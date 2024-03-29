const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("server is running"))

const contactEmail = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth:{
        user:"karper1003@gmail.com",
        pass:"rhwwbrkcstvuuukg"
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("ready to send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const location = req.body.location;
    const number = req.body.number;
    const mail = {
        from : name,
        to: "karper1003@gmail.com",
        subject: " Contact form Submission",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Location: ${location}</p>
            <p>Number: ${number}</p>
        `
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" })
        } else{
            res.json({  status: "Email Send" })
            alert("mail send")
        }
    })
})

router.post("/contact-data", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const location = req.body.location;
    const message = req.body.message;
    const mail = {
        from : name,
        to: "karper1003@gmail.com",
        subject: " Contact form Submission",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Location: ${location}</p>
            <p>Number: ${message}</p>
        `
    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" })
        } else{
            res.json({  status: "Email Send" })
            alert("mail send")
        }
    })
})