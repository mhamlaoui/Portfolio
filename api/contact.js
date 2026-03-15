const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, subject, message, website } = req.body;

  if (website) {
    return res.status(400).json({ success: false, message: 'Invalid request detected' });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Tous les champs sont requis.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USERNAME}>`,
    to: process.env.GMAIL_USERNAME,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Nouveau message depuis votre portfolio\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Votre message a été envoyé avec succès !' });
  } catch (error) {
    console.error('Mail Error:', error);
    return res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message.', error: error.message });
  }
};
