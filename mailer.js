const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Create a transporter using SMTP (example with Gmail)
const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: 'josephsharon051@gmail.com ',
    pass: 'yfuqhifiujcbdbxp' // Use App Passwords if using Yahoo
  }
});

// Read HTML content from 'mail.html'
const htmlContent = fs.readFileSync(path.join(__dirname, 'mail.html'), 'utf-8');

// Define the email options
const mailOptions = {
  from: '"Team TechBlitz" techblitz@bluecape.site',
  to: 'shanthiaustin74@gmail.com',
  subject: 'TechBlitz 2025 - Registration Confirmation',
  html: htmlContent,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
