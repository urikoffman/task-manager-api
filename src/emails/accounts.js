const sgMail = require('@sendgrid/mail')
    // const sendGridAPIKey = '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'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // sgMail.send({


// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({

        to: email,
        from: 'uri.koffman@gmail.com',
        subject: 'This is my first creation',
        text: `Hey ${name}, welcome to the App `,
    })
}
const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'uri.koffman@gmail.com',
        subject: 'Goodbye Mate',
        text: `Goodbye ${name}, hope we will see you soon `,
    })
}

module.exports = { sendWelcomeEmail, sendGoodbyeEmail }