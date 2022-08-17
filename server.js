require('dotenv').config()
const express = require('express')
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const app = express()

if(!process.env.TEST_EMAIL_TO_ADDRESS || !process.env.TEST_EMAIL_FROM_ADDRESS || !process.env.SENDGRID_API_KEY || !process.env.TEST_ENDPOINT) {
    console.log("Make sure to set the following environment variables for your application:\n‣ TEST_EMAIL_TO_ADDRESS\n‣ TEST_EMAIL_FROM_ADDRESS\n‣ SENDGRID_API_KEY\n‣ TEST_ENDPOINT\n")
    process.exit()
}


app.get('/', async (req, res) => {
    res.send("Hello World")
})

app.get(`/${process.env.TEST_ENDPOINT}`, async (req, res) => {
    const msg = {
        to: process.env.TEST_EMAIL_TO_ADDRESS,
        from: process.env.TEST_EMAIL_FROM_ADDRESS,
        subject: 'My Test Email',
        text: 'This is a test email sent when your application was deployed',
        html: 'This is a <strong>test</strong> email sent when your application was deployed',
    };

    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }

    res.send("Email sent")
})


app.listen(process.env.PORT, () => {
    console.log(`Hello World Application is running on port ${process.env.PORT}`)
})