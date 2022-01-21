const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_API_KEY} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const email = {
    to: "lohimec589@peykesabz.com",
    from: "bogdan.lyamzin.d@gmail.com",
    subject: "Новая заявка с сайта",
    html: "<p>Ваша заявка принята</p>"
}

sgMail.send(email)
    .then(()=> console.log("Email send success"))
    .catch(error => console.log(error.message))