function allowCrossDomain(e,r,o){r.header("Access-Control-Allow-Origin","*"),r.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS"),r.header("Access-Control-Allow-Headers","cache-control, x-requested-with, content-type"),o()}function mkdir(e,r){fs.exists(e,function(o){o?r():fs.mkdir(e,function(){r()})})}var express=require("express"),bodyParser=require("body-parser"),fileUpload=require("express-fileupload"),fs=require("fs"),BASE_PATH=__dirname+"/uploads/",port=Number(process.env.PORT||8081);String.prototype.format||(String.prototype.format=String.prototype.f=function(){for(var e=this,r=arguments.length;r--;)e=e.replace(new RegExp("\\{"+r+"\\}","gm"),arguments[r]);return e}),String.prototype.formatO||(String.prototype.formatO=String.prototype.fo=function(e){var r=this;for(var o in e)r=r.replace(new RegExp("\\{{0}\\}".f(o),"gm"),e[o]);return r});var email=require("./email"),app=express();app.use(bodyParser.json()),app.use(bodyParser.urlencoded({extended:!0})),app.use(fileUpload()),app.use(allowCrossDomain),app.post("/upload",function(e,r){var o=e.query.uid;if(!e.files)return void r.send("No files were uploaded.");var t=BASE_PATH+"/"+o+"/";mkdir(t,function(){var o=e.files.file;o.mv(t+o.name,function(e){e?r.status(500).send(e):r.send("File uploaded!")})})}),app.post("/save",function(e,r){var o=e.body;o.urlToFolder="http://{0}/{1}/".f(e.headers.host,o.uid),email.send("submit",o),email.sendToManager(o),r.end("true")}),mkdir(BASE_PATH,function(){app.use(express["static"]("uploads")),app.listen(port)}),console.log("Server has been started (port = "+port+")");