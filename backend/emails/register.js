const nodemailer = require('nodemailer');

const registerEmail = ({user})=>{
    const tranporter = nodemailer.createTransport({
        service:'gmail',
        auth:'yunusabdullateef95@gmail.com',
        pass:''
    })

    const mailOptions = {
        from:'yunusabdullateef95@gmail.com',
        to:user.email,
        subject:'jobQuest',
        html:'<h1> you have registered successfully'
    }

    tranporter.sendMail(mailOptions,(error,res)=>{
        if(error) console.log(error)
        else console.log('email sent')
    })
}

module.exports = registerEmail;