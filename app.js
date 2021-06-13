let express=require("express");
let app=express();




let path=require("path");
// view engine setup
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');



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

let port=process.env.PORT||3000;

app.listen(port,function(){
console.log("started at port 3000");
});