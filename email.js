function send(e){var o=nodemailer.createTransport("smtps://makemecoolvideo%40gmail.com:24547294@smtp.gmail.com"),t={from:options.from,to:e.to,subject:e.subject,html:e.template.fo(e.body)};o.sendMail(t,function(e,o){return e?console.log(e):void console.log("Message sent: "+o.response)})}var nodemailer=require("nodemailer"),options={from:'"MakeCoolVideo" <makemecoolvideo@gmail.com>',manager:"nserlap@gmail.com",siteUrl:"https://makecool.video/"},templates={submit:{en:{subject:"In Progress",template:'<div style="background-color: #202024; width:100%; height: 100; text-align: center; color: white; font-family: Tahoma;padding:0 0 10px 0"> <div style="background-color: #3f3f47"> <a href="{0}"><img src="http://manifest-sum-144411.appspot.com/images/logo.png" style="width: 250px; margin-top:2px" /></a> </div> <h2 style="font-weight: normal">Your submission has been approved</h2> <p>You will get the video soon. Thank you</p> <p style="color: rgba(255, 255, 255, 0.5); font-size: 0.9em;margin-bottom:10px;margin-top:50px;">Copyright &copy; 2016 Make a cool video</p> </div>'.f(options.siteUrl)},ru:{subject:"Принято в обработку",template:'<div style="background-color: #202024; width:100%; height: 100; text-align: center; color: white; font-family: Tahoma;padding:0 0 10px 0"> <div style="background-color: #3f3f47"> <a href="{0}"><img src="http://manifest-sum-144411.appspot.com/images/logo.png" style="width: 250px; margin-top:2px" /></a> </div> <h2 style="font-weight: normal">Ваша заявка прината в обработку</h2> <p>Видео скоро будет готово. Спасибо</p> <p style="color: rgba(255, 255, 255, 0.5); font-size: 0.9em;margin-bottom:10px;margin-top:50px;">Copyright &copy; 2016 Make a cool video</p> </div>'.f(options.siteUrl)}},ready:{en:{subject:"Your video is ready",template:""},ru:{subject:"Ваше видео готово",template:""}},order:{subject:"New Order",template:"<h2>We have a new order</h2><p>Language: {lang}</p><p>Price: {price}</p><p>Duration: {duration} minutes</p><p>Template: {template}</p><p>Email: {email}</p><p>External links:</p><ul>{links}</ul><p>Uploaded files:</p><ul>{uploaded}</ul><p>Comments: {comments}</p>",process:function(e){for(var o="",t=0;t<e.names.length;t++)o+='<li><a href="{0}{1}">{1}</a></li>'.f(e.urlToFolder,e.names[t]);e.uploaded=o;for(var a="",t=0;t<e.links.length;t++)a+='<li><a href="{0}">{1}</a></li>'.f(decodeURIComponent(e.links[t]),"file "+t);return e.links=a,e}}};module.exports={send:function(e,o){var t=templates[e],a=o.lang.substr(0,2),i={to:o.email,subject:t[a].subject,template:t[a].template,body:o};send(i)},sendToManager:function(e){var o=templates.order;e=o.process(e);var t={to:options.manager,subject:o.subject,template:o.template,body:e};send(t)}};