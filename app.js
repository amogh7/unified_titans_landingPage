let express=require("express");
let app=express();



const {  GMAIL_ID , GMAIL_PW } = require("./config/secrets");
const nodemailer=require("nodemailer");


async function sendEmail(message) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
          user: GMAIL_ID ,
          pass: GMAIL_PW,
        },
      });
  
      let res = await transporter.sendMail({
        from: message.from, // sender address
        to: message.to, // list of receivers
        subject: message.subject , // Subject line
        text:`sent by ${message.name} and he wants to know this-- ${message.text} , his email is ${message.for} and phone number is ${message.phone} ` , // plain text body
      });
      return res;
    } catch (error) {
      return error;
    }
  }
   







let path=require("path");
// view engine setup
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json());



app.get('/',function(req,res){
    res.render("index");
    // res.redirect("/index.html");
});
app.get('/contactUs',function(req,res){
    res.render("contactUs");
    // res.redirect("/index.html");
})
app.get('/locations',function(req,res){
    res.render("locations");
    // res.redirect("/index.html");
});
app.get('/gallery',function(req,res){
    res.render("gallery");
    // res.redirect("/index.html");
});

app.post("/sendEmail",async function(req,res){
  try{
      let {message}=req.body;
      console.log(message);
      let response= await sendEmail(message);
        res.status(201).json({
        message:"sent successfuly",
        response,
      })
  }
  catch(error){
    res.status(501).json({
      message:"some error occured",
      error
    })

  } 
})
let port=process.env.PORT||3000;

app.listen(port,function(){
console.log("started at port 3000");
});