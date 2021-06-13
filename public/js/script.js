// let navbtn=document.querySelector(".nav-btn__links");
// let navbar=document.querySelector(".navbar-dropdown");
// navbtn.addEventListener("click",function(){
//     if(navbar.classList.contains("show")){
//         navbar.classList.remove("show");
//     }
// else{
//         navbar.classList.add("show");
//     }
// });

// const nodemailer=require("nodemailer");

// async function sendEmail(message) {
//     try {
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         host: "smtp.gmail.com",
//         auth: {
//           user: GMAIL_ID ,
//           pass: GMAIL_PW,
//         },
//       });
  
//       let res = await transporter.sendMail({
//         from: message.from, // sender address
//         to: message.to, // list of receivers
//         subject: message.subject, // Subject line
//         text: message.text, // plain text body
//       });
//       return res;
//     } catch (error) {
//       return error;
//     }
//   }

//   let btn=document.querySelector(".btn.btn--green.btn--animated");

//   btn.addEventListener("click",function(){
//       console.log("btn clicked");
//   })

