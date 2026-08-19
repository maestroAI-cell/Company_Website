const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS
    }
})
app.post("/send-message", async (request) =>{
    const { name, email, phone, message} = req.body;
    try {
        await transporter.sendMail({
            from:
            process.env.EMAIL_USER,
            to:
            process.env.COMPANY_EMAIL,
            replyTo: email,
            subject: "New Contact Form Message",
            text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
            `
        });
        resizeBy.json({
            success: true,
            message: "Message sent successfully!"
        });
    } catch (error){
        console.error(error);
        resizeBy.status(500).json({
            success: false,
            message: "Message could not be sent."
        });
    }
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});