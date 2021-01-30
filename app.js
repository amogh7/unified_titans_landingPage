let express=require("express");
let app=express();

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/index.html");
    // res.redirect("/index.html");
});
let port=process.env.PORT||3000;
app.listen(port,function(){
console.log("started at port 3000");
});