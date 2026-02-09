<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
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

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Le champ '$field' est requis."]);
        exit();
    }
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags(trim($data['name'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(strip_tags(trim($data['subject'])));
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
    exit();
}

// Your email address
$to = 'im.hamlaoui@gmail.com';

// Email subject
$email_subject = "[Portfolio Contact] $subject";

// Email body
$email_body = "Vous avez reçu un nouveau message depuis votre portfolio.\n\n";
$email_body .= "Nom: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Sujet: $subject\n\n";
$email_body .= "Message:\n$message\n";

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = @mail($to, $email_subject, $email_body, $headers);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Votre message a été envoyé avec succès!']);
} else {
    // If mail fails, log the message to a file as backup
    $log_file = __DIR__ . '/contact_messages.log';
    $log_entry = date('Y-m-d H:i:s') . " | Name: $name | Email: $email | Subject: $subject | Message: $message\n";
    file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);
    
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.']);
}
