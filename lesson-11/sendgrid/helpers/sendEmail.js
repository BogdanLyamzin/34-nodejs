const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

/*
data = {
    to: "lohimec589@peykesabz.com",
    subject: "Новая заявка с сайта",
    html: "<p>Ваша заявка принята</p>"
}
*/

const sendEmail = async(data)=> {
    try {
        const email = {...data, from: "bogdan.lyamzin.d@gmail.com"}
        await sgMail.send(email);
        return true;
    } catch (error) {
        throw error;
    }
}

module.exports = sendEmail;