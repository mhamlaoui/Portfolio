const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message, website } = req.body;

  // Honeypot check
  if (website) {
    return res.status(400).json({ success: false, message: 'Invalid request detected' });
  }

  // Validate fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
  }

  // SMTP Configuration using environment variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME || 'im.hamlaoui@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USERNAME || 'im.hamlaoui@gmail.com'}>`,
    to: process.env.GMAIL_USERNAME || 'im.hamlaoui@gmail.com',
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Nouveau message depuis votre portfolio\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Votre message a été envoyé avec succès !' });
  } catch (error) {
    console.error('Mail Error:', error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message.' });
  }
}
