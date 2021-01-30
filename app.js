let express=require("express");
let app=express();
let http=require("http").createServer(app);
app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/public/index.html");
    // res.redirect("/index.html");
});

let port=process.env.PORT||3000;

http.listen(port,function(){
console.log("started at port 3000");
});