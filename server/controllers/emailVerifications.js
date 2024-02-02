//NodeMailer
const nodemailer = require('nodemailer');
exports.emailVerifications = async (email, verificationToken) => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Configure the email service or SMTP details here
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'kr.rohitgup@gmail.com',
      pass: '',
    },
  });

  // Compose the email message
  const mailOptions = {
    from: 'ecomzonefy',
    to: email,
    subject: 'Email Verification',
    text: `Please click the following link to verify your email: http://localhost:8000/verify/${verificationToken}`,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent successfully');
  } catch (error) {
    console.error('Error sending verification email:', error);
  }
};
