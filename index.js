const express = require('express')
const app = express()
const port = 3000

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
        user: "javaprojectSE@yandex.ru",
        pass: "57UtPapGdeGrduG"
    }
});

var mailOptions = {
    from: 'javaprojectSE@yandex.ru',
    to: '220675@astanait.edu.kz',
    subject: 'Laboratory work 2 for Web',
    text: 'Simple text for lab 2. For example here can be generated password.'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})