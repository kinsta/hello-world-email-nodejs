# Kinsta - Hello World - Eamail Sending With Node.js
An example of how to set your Node.js application to send emails via SendGrid from Kinsta App Hosting services.

> Kinsta’s Application Hosting is a service to run your web apps and any databases side by side in a hassle-free environment, tailored for developer needs and ease of use. App Hosting is currently in an invite-only beta phase, sign up for a test account at [kinsta.com/application-hosting](https://kinsta.com/appplication-hosting).

## Email Support At Kinsta
Kinsta does not natively support outbound email from servers. Sending emails through specialized outbound providers such as [SendGrid](https://sendgrid.com/) or [Mailchimp](https://mailchimp.com/) offers more flexibility and higher success rates for transactional and campaign emails. 

> While Kinsta doesn't limit or control the outbound mail you send using a third-party SMTP service provider, we maintain a strict anti-spam policy. That policy covers email sent via an application or site hosted at Kinsta, even if we are not the SMTP provider. 

## Environment Variables
Once you've created your application in MyKinsta you will need to set environment variables. You can do so through the Settings section of your application in Environment variables section by pressing the Add environment variable button. You'll need to set three variables:

* `SENDGRID_API_KEY`: The API key created on SendGrid
* `TEST_EMAIL_TO_ADDRESS`: The address you'd like to send the test email to
* `TEST_EMAIL_FROM_ADDRESS`: The address you'd like to send the test email from

## Deployment Lifecycle
Whenever a deployment is initiated (through creating an application or re-deploying due to an incoming commit) the `npm build` command is run, followed by the `npm start` command. This project does not require a build phase, the start command runs `node sendMail.js` which will send a test email. 

This means that the application will send **one** email each time it is deployed. 