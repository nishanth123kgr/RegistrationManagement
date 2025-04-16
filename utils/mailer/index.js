const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const userController = require('../../controllers/userController');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');
const logger = require('../logger');

require('dotenv').config();

const icon = {
    "Technical Connection": "🧠",
    "Paper Presentation": "📝",
    "Project Expo": "🔬",
    "Debugging": "💻",
    "Prompt Engineering": "🤖",
    "Treasure Hunt": "💰",
    "Meme Creation": "😂",
    "Bioscope": "🎬",
    "Video Editing & Photography": "🎥",
    "Lyric Detective": "🎶"
};

// Create a transporter using SMTP (example with Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreply@auttvl.ac.in',
        pass: 'ydcznicxgwjraeni' // Use App Passwords if using Gmail
    }
});


const mailHTML = (userData, qrURL, events) => {
    const { name, email, phone, college, food, upiID, transactionID } = userData;
    return `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Tech Blitz 2025 - Registration Confirmation</title>
    <!--[if mso]>
    <style type="text/css">
      table {border-collapse: collapse;}
      .mso-button-container {padding: 12px 24px !important;}
      .mso-button-container a {text-decoration: none; color: white !important;}
    </style>
    <![endif]-->
</head>

<body style='margin: 0; padding: 0; font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'>
    <!-- Preheader text (hidden) -->
    <div style="display: none; max-height: 0px; overflow: hidden;">
        Your Tech Blitz 2025 registration is confirmed! Here's your QR code and event details.
    </div>
    <!-- End preheader -->

    <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);" role="presentation">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; padding: 35px 20px; text-align: center;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                <tr>
                                    <td align="center">
                                        <img src="https://techblitz.bluecape.site/img/logo.png" alt="TechBlitz Logo" width="180" style="display: block; margin: 0 auto 15px; border: none;">
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <h1 style="margin: 0; font-size: 32px; font-weight: 800; color: white; letter-spacing: -0.5px;">TechBlitz <span style="color: #ff974d;">2025</span></h1>
                                        <p style="margin: 0; font-size: 16px; opacity: 0.8; color: white; font-weight: 300;">Registration Confirmation</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px; background-color: #ffffff;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                <tr>
                                    <td align="center" style="margin-bottom: 35px;">
                                        <h2 style="color: #4f46e5; margin-top: 0; font-size: 24px; font-weight: 700;">Registration Successful!</h2>
                                        <p style="font-size: 16px; color: #475569; margin-top: 10px;">Thank you for registering for TechBlitz 2025. <br> We're excited to have you join us!</p>
                                    </td>
                                </tr>

                                <!-- QR Code Section -->
                                <tr>
                                    <td align="center" style="padding: 30px 20px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e2e8f0; margin: 30px 0;">
                                        <div style="width: 200px; margin: 0 auto 20px;  background-color: white; border-radius: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);">
                                            <img src="https:${qrURL}" alt="Registration QR Code" style="width: 100%; height: auto; display: block; border-radius: 20px;">
                                        </div>
                                        <p style="font-weight: 600; color: #4f46e5; margin-bottom: 5px; font-size: 18px;">Please show this QR code at the Registration Desk</p>
                                    </td>
                                </tr>

                                <!-- Space between QR Code and Registration Details -->
                                <tr>
                                    <td style="height: 30px;"></td>
                                </tr>

                                <!-- Registration Details -->
                                <tr>
                                    <td style="padding: 25px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e2e8f0;">
                                        <h3 style="margin-top: 0; margin-bottom: 20px; color: #4f46e5; font-size: 20px; font-weight: 600;">Your Registration Details</h3>
                                        <table width="100%" cellpadding="10" cellspacing="0" border="0" role="presentation">
                                            <tr>
                                                <td width="40%" style="font-weight: 600; color: #4f46e5; font-size: 15px;">Name:</td>
                                                <td style="font-size: 15px; color: #334155;">${name}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: 600; color: #4f46e5; font-size: 15px;">Email:</td>
                                                <td style="font-size: 15px; color: #334155;">${email}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: 600; color: #4f46e5; font-size: 15px;">College:</td>
                                                <td style="font-size: 15px; color: #334155;">${college}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: 600; color: #4f46e5; font-size: 15px;">Phone:</td>
                                                <td style="font-size: 15px; color: #334155;">${phone}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: 600; color: #4f46e5; font-size: 15px;">Food Preference:</td>
                                                <td style="font-size: 15px; color: #334155;">${food}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: 600; color: #4f46e5; font-size: 15px;">UPI ID:</td>
                                                <td style="font-size: 15px; color: #334155;">${upiID}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: 600; color: #4f46e5; font-size: 15px;">Transaction ID:</td>
                                                <td style="font-size: 15px; color: #334155;">${transactionID}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- Space between Registration Details and Event Details -->
                                <tr>
                                    <td style="height: 30px;"></td>
                                </tr>

                                <!-- Event Details -->
                                <tr>
                                    <td style="padding: 25px; background-color: #f9fafb; border-radius: 12px; border: 1px solid #e2e8f0;">
                                        <h3 style="margin-top: 0; margin-bottom: 20px; color: #4f46e5; font-size: 20px; font-weight: 600;">Registered Events</h3>

                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">

                                            ${events.map(event => `
                                            <tr>
                                                <td style="padding-bottom: 15px;">
                                                    <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                                                        <tr>
                                                            <td style="display: inline-block; width: 36px; height: 36px; background-color: #e0e7ff; border-radius: 50%; color: #4f46e5; font-size: 18px; text-align: center; line-height: 36px; vertical-align: middle;">
                                                                ${icon[event]}
                                                            </td>
                                                            <td style="padding-left: 12px; font-size: 16px; color: #334155;">
                                                                <strong>${event}</strong>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>`).join('')}
                                        </table>

                                        <!-- Space between events list and reminders -->
                                        <div style="height: 25px;"></div>

                                        <div style="background-color: #e0e7ff; border-left: 4px solid #4f46e5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                            <h3 style="margin-top: 0; margin-bottom: 15px; color: #4f46e5; font-size: 18px; font-weight: 600;">Important Reminders</h3>
                                            <ul style="margin: 0; padding-left: 20px; color: #334155;">
                                                <li style="margin-bottom: 10px; padding-left: 5px;">Event Date: <strong>April 16, 2025</strong></li>
                                                <li style="margin-bottom: 10px; padding-left: 5px;">Bring your college ID card for verification</li>
                                                <li style="margin-bottom: 10px; padding-left: 5px;">You can further register more events from here: <a href="https://techblitz.bluecape.site/register" style="color: #4f46e5; text-decoration: underline;">https://techblitz.bluecape.site/register</a></li>
                                                <li style="margin-bottom: 10px; padding-left: 5px;">Please use this email ID for any additional event registrations.</li>
                                            </ul>
                                        </div>

                                        <!-- Space between reminders and calendar button -->
                                        <div style="height: 25px;"></div>

                                        <div style="text-align: center;">
                                            <!--[if mso]>
                                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20250416%2F20250416&amp;details=Technical%20Symposium%20-%20TechBlitz%202025&amp;location=Anna%20University%20Regional%20Campus%20-%20Tirunelveli&amp;text=TechBlitz%202025" style="height:45px;v-text-anchor:middle;width:200px;" arcsize="10%" stroke="f" fillcolor="#4f46e5">
                                            <w:anchorlock/>
                                            <center style='color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;font-size:16px;font-weight:bold;'>Add to Calendar</center>
                                            </v:roundrect>
                                            <![endif]-->
                                            <!--[if !mso]><!-->
                                            <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;dates=20250416%2F20250416&amp;details=Technical%20Symposium%20-%20TechBlitz%202025&amp;location=Anna%20University%20Regional%20Campus%20-%20Tirunelveli&amp;text=TechBlitz%202025" class="mso-button-container" style="display: inline-block; background: #4f46e5; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-top: 10px; font-size: 16px; transition: all 0.2s ease;">Add to Calendar</a>
                                            <!--<![endif]-->
                                        </div>
                                    </td>
                                </tr>

                                <!-- Space before footer -->
                                <tr>
                                    <td style="height: 40px;"></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f1f5f9; padding: 30px; text-align: center; color: #64748b; font-size: 14px; border-top: 1px solid #e2e8f0;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                <tr>
                                    <td align="center" style="padding: 15px 0;">
                                        <a href="https://www.instagram.com/techblitz_2025/" style="display: inline-block; width: 40px; height: 40px; background-color: #6366f1; border-radius: 50%; color: white; text-align: center; line-height: 40px; margin: 0 5px; text-decoration: none;">
                                            <img src="https://techblitz.bluecape.site/img/instagram.png" width="18px" height="18px" alt="Instagram" style="vertical-align: middle;">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <p style="margin: 5px 0; color: #64748b;">© 2025 Tech Blitz. All rights reserved.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding-top: 15px;">
                                        <p style="margin: 5px 0; color: #64748b;">For any queries, please contact:</p>
                                        <p style="margin: 8px 0;"><a href="mailto:techblitzaurct2025@gmail.com" style="color: #6366f1; text-decoration: none; font-weight: 500;">techblitzaurct2025@gmail.com</a></p>
                                        <p style="margin: 8px 0;"><a href="tel:+919791334755" style="color: #6366f1; text-decoration: none; font-weight: 500;">+91 9791334755</a> or <a href="tel:+916382575585" style="color: #6366f1; text-decoration: none; font-weight: 500;">+91 6382575585</a></p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
`;
}

exports.sendMail = async function (email) {

    const data = await userController.getUserDetailsAndEvents(email);

    console.log(data);

    if(!data.exists) {
        console.error('User data does not exist for email:', email);
        return;
    }
    






    

    // Read HTML content from 'mail.html'
    // const htmlContent = fs.readFileSync(path.join(__dirname, 'mail.html'), 'utf-8');

    // Create a post request with body
    const qrAPI = 'https://api.qrcode-monkey.com/qr/custom';

    const userID = Buffer.from(data.userData.id.toString()).toString('base64');

    const qrData = {
        "data": userID,
        "config": {
            "body": "circle",
            "eye": "frame13",
            "eyeBall": "ball15",
            "erf1": [],
            "erf2": [],
            "erf3": [],
            "brf1": [],
            "brf2": [],
            "brf3": [],
            "bodyColor": "#000000",
            "bgColor": "#FFFFFF",
            "eye1Color": "#000000",
            "eye2Color": "#000000",
            "eye3Color": "#000000",
            "eyeBall1Color": "6366f1",
            "eyeBall2Color": "6366f1",
            "eyeBall3Color": "6366f1",
            "gradientColor1": null,
            "gradientColor2": null,
            "gradientType": "linear",
            "gradientOnEyes": false,
            "logo": "",
            "logoMode": "clean"
        },
        "size": 300,
        "download": "imageUrl",
        "file": "png"
    }


    const response = await axios.post(qrAPI, qrData);
    const qrURL = response.data.imageUrl;

    if(!qrURL) {
        console.error('Error generating QR code:', response.data);
        return;
    }

    // Define the email options
    const mailOptions = {
        from: 'Team TechBlitz <noreply@auttvl.ac.in>',
        to: email,
        subject: 'TechBlitz 2025 - Registration Confirmation',
        html: mailHTML(data.userData, qrURL, data.events),
    };

    // Send the email
    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

}

exports.sendMailToAllUsers = async function () {
    try {
        const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_ANON_KEY);

        const { data: allUsers, error } = await supabase
            .from('users')
            .select('email')
            .gt('id', 135);

        if (error) {
            throw new Error('Error fetching users from Supabase: ' + error.message);
        }

        logger.info('Fetched all users from Supabase:', allUsers);
        if (!allUsers || allUsers.length === 0) {
            console.log('No users found in the database.');
            return;
        }

        let sentEmails = 0;
        const totalUsers = allUsers.length;
        for (const user of allUsers) {
            await exports.sendMail(user.email);
            sentEmails++;
            console.log(`Sent email to ${user.email}. (${sentEmails}/${totalUsers})`);
        }

        console.log('Emails sent to all users successfully.');
    } catch (error) {
        console.error('Error sending emails to all users:', error);
    }
};

exports.sendMailToAllUsers()
