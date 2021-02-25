const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '10eb70ac6601945c1372561ee646e9bd-d32d817f-80ce276c',
        domain: 'sandbox0b9654d36970415189f212321c384495.mailgun.org'
    },
    tls: {
        rejectUnauthorized: false
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'aditya.metal01@gmail.com',
        subject,
        text
    };
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        } else {
            console.log('Message Sent: %s', data.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(data));
            cb(null, data);
        }
    });
}

// Exporting the sendmail
module.exports = sendMail;