const { response } = require("express");
const express = require("express");
const router = express.Router();

router.post("/sendemail", (req,response)=> {
    let nodemailer = require('nodemailer');
    let milerCofig = {
        service: "Gmail",
        host:"smtp.gmail.com",
        auth: {
            type:"login",
            user:"testemailjs@gmail.com",
            pass:"testemailjs"
        },
        tls: {
            rejectUnauthorized: false
        }
    }

    let transporter = nodemailer.createTransport(milerCofig);
    let mailOptions = {
        from: "testemailjs@gmail.com",
        to:" contact@cbmis.com",
        subject:" Email subject",
        html:`<body>` +
           ` <p> Email body</p> `+
        `</body> `   
    };

    transporter.sendMail(mailOptions,function (error) {
        if (error) {
            return response.send ({result: 404 + "." + error})
        } else {
            return response.send({ result: 200 + " "})
        }
    });
})

module.exports = router;