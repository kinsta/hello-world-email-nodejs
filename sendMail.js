require('dotenv').config()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

if(!process.env.TEST_EMAIL_TO_ADDRESS || !process.env.TEST_EMAIL_FROM_ADDRESS || !process.env.SENDGRID_API_KEY) {
    console.log("Make sure to set the following environment variables for your application:\n‣ TEST_EMAIL_TO_ADDRESS\n‣ TEST_EMAIL_FROM_ADDRESS\n‣ SENDGRID_API_KEY\n")
    process.exit()
}

const msg = {
    to: process.env.TEST_EMAIL_TO_ADDRESS,
    from: process.env.TEST_EMAIL_FROM_ADDRESS,
    subject: 'My Test Email',
    text: 'This is a test email sent when your application was deployed',
    html: 'This is a <strong>test</strong> email sent when your application was deployed',
};

(async () => {
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
})();
