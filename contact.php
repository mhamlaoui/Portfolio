<?php
// Include PHPMailer
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';
require_once __DIR__ . '/phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Start session for rate limiting
session_start();

// Strict CORS / Origin Check
$allowed_origins = ['http://localhost', 'http://127.0.0.1', 'https://ilias.dev', 'https://www.ilias.dev'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$origin_domain = '';
if (!empty($origin)) {
    $parsed = parse_url($origin);
    $origin_domain = ($parsed['scheme'] ?? '') . '://' . ($parsed['host'] ?? '');
}

if (!empty($origin) && !in_array($origin_domain, $allowed_origins)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Origin not allowed (CORS)']);
    exit();
}

if (!empty($origin)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
else {
    header('Access-Control-Allow-Origin: *'); // Fallback if no origin header is provided
}

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Rate Limiting (1 message every 60 seconds)
if (isset($_SESSION['last_submit']) && (time() - $_SESSION['last_submit']) < 60) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Veuillez patienter avant d\'envoyer un autre message. (Rate Limit)']);
    exit();
}

// Get POST data
$raw_input = file_get_contents('php://input');
$data = json_decode($raw_input, true);

// Check if JSON decode failed
if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

// Honeypot check (anti-bot)
if (!empty($data['website'])) {
    // If the hidden website field is filled, it's a bot. Silently drop or reject.
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request detected']);
    exit();
}

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Le champ '$field' est requis."]);
        exit();
    }
}

// Sanitize inputs & validate length
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(strip_tags(trim($data['subject'])));
$message = htmlspecialchars(strip_tags(trim($data['message'])));

if (strlen($name) > 100 || strlen($email) > 150 || strlen($subject) > 200 || strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Input length exceeds limits.']);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
    exit();
}

// Record successful attempt time for rate limiting
$_SESSION['last_submit'] = time();

// Log the message (backup)
$log_file = __DIR__ . '/contact_messages.log';
$log_entry = "=== " . date('Y-m-d H:i:s') . " ===\n";
$log_entry .= "Nom: $name\n";
$log_entry .= "Email: $email\n";
$log_entry .= "Sujet: $subject\n";
$log_entry .= "Message: $message\n\n";
file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);

// =====================================================
// GMAIL SMTP CONFIGURATION
// =====================================================
// Read credentials from .env file securely
$env_file = __DIR__ . '/.env';
$env_vars = file_exists($env_file) ? parse_ini_file($env_file) : [];

$gmail_username = $env_vars['GMAIL_USERNAME'] ?? 'im.hamlaoui@gmail.com';
$gmail_app_password = $env_vars['GMAIL_APP_PASSWORD'] ?? ''; // Loaded from .env

try {
    $mail = new PHPMailer(true);

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = $gmail_username;
    $mail->Password = $gmail_app_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->CharSet = 'UTF-8';

    // Email settings
    $mail->setFrom($gmail_username, 'Portfolio Contact');
    $mail->addAddress($gmail_username); // Send to yourself
    $mail->addReplyTo($email, $name); // Reply goes to the sender

    // Email content
    $mail->isHTML(false);
    $mail->Subject = "[Portfolio] $subject";
    $mail->Body = "Nouveau message depuis votre portfolio\n\n";
    $mail->Body .= "Nom: $name\n";
    $mail->Body .= "Email: $email\n";
    $mail->Body .= "Sujet: $subject\n\n";
    $mail->Body .= "Message:\n$message\n";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès!']);

}
catch (Exception $e) {
    // Email failed, but message is logged
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l\'envoi. Message enregistré.',
        'debug' => $mail->ErrorInfo // Remove this line in production
    ]);
}
