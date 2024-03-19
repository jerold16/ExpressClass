import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // or 465 if using SSL
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'pizzashopfranz@gmail.com',
      pass: 'iqye ikmu youm oeyv'
    }
  });

 export const UserRegisterationMail=async ()=>{
    const mailOptions = {
        from: 'pizzashopfranz@gmail.com',
        to: 'rakkiii49sh8@gmail.com',
        subject: 'Offer !! OFfer !!',
        text: 'Oombu punda'
      };
      try{
        await transporter.sendMail(mailOptions);
       console.log("Success");
      }
      catch(err){
        console.log(err);
      }
  }
// app.get('/send-email', async (req, res) => {
//     try {
//       // Define email options
//       const mailOptions = {
//         from: 'your_email@example.com',
//         to: 'recipient@example.com',
//         subject: 'Test Email',
//         text: 'This is a test email sent from an Express.js application.'
//       };
  
//       // Send the email
//       await transporter.sendMail(mailOptions);
  
//       res.send('Email sent successfully!');
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     }
//   });
  