function send(e){var t=mailgun.getTransporter(),o={from:options.from,to:e.to,subject:e.subject,html:e.template.fo(e.body)};t.sendMail(o,function(e,t){return e?console.log(e):void console.log("Message sent: "+t.response)})}var gmail=require("./email-gmail"),mailgun=require("./email-mailgun"),options={from:'"SlideShowPlanet" <nataly@slideshowplanet.com>',manager:"nserlap@gmail.com",siteUrl:"http://slideshowplanet.com/"},templates={submit:{en:{subject:"In Progress",template:'<table style="padding: 0; margin: 0; background-color: #f2f2f2;" border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family: sans-serif; font-size: 16px; color: #333333; padding: 30px 0px 0px 0px;"><table style="border-top: 1px solid #4f4f4f; border-right: 1px solid #4f4f4f; border-left: 1px solid #4f4f4f;" border="0" width="710" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="background-color: #4f4f4f; color: white; font-size: 25px; line-height: 22px; font-weight: bold; padding: 3px; text-align: center;" height="18px"><a href="http://slideshowplanet.com/"> <img style="height: 66px;" src="http://slideshowplanet.com/common/images/logo_grey.png" alt="SlideShowPlanet" border="0" /> </a></td></tr></tbody></table><table style="color: black; margin-bottom: 80px; border-left: 1px solid #c7c7c7; border-right: 1px solid #c7c7c7; border-bottom: 1px solid #c7c7c7;" border="0" width="710" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="padding: 16px 16px 16px 16px; background-color: #fff; text-align: center;"><h2 style="font-weight: normal; color: black;">Your submission has been approved</h2><p>You will be contacted shortly by one of our Designers to discuss your order/confirm details.</p><p>Have a great day ahead!</p><p style="color: black; font-size: 0.9em; margin-bottom: 5px; margin-top: 50px;">Copyright © 2016 SlideShowPlanet</p></td></tr></tbody></table></td></tr></tbody></table>'},ru:{subject:"Принято в обработку",template:'<table style="padding: 0; margin: 0; background-color: #f2f2f2;" border="0" width="100%" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family: sans-serif; font-size: 16px; color: #333333; padding: 30px 0px 0px 0px;"><table style="border-top: 1px solid #4f4f4f; border-right: 1px solid #4f4f4f; border-left: 1px solid #4f4f4f;" border="0" width="710" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="background-color: #4f4f4f; color: white; font-size: 25px; line-height: 22px; font-weight: bold; padding: 3px; text-align: center;" height="18px"><a href="http://slideshowplanet.com/"> <img style="height: 66px;" src="http://slideshowplanet.com/common/images/logo_grey.png" alt="SlideShowPlanet" border="0" /> </a></td></tr></tbody></table><table style="color: black; margin-bottom: 80px; border-left: 1px solid #c7c7c7; border-right: 1px solid #c7c7c7; border-bottom: 1px solid #c7c7c7;" border="0" width="710" cellspacing="0" cellpadding="0" align="center"><tbody><tr><td style="padding: 16px 16px 16px 16px; background-color: #fff; text-align: center;"><h2 style="font-weight: normal; color: black;">Ваша заявка принята в обработку</h2><p>В случае возникновения вопросов наши дизайнеры свяжутся с Вами для выяснения деталей.</p><p>Удачного Вам дня!</p><p style="color: black; font-size: 0.9em; margin-bottom: 5px; margin-top: 50px;">Copyright © 2016 SlideShowPlanet</p></td></tr></tbody></table></td></tr></tbody></table>'}},ready:{en:{subject:"Your video is ready",template:""},ru:{subject:"Ваше видео готово",template:""}},order:{subject:"New Order",template:"<h2>We have a new order</h2><p>Language: {lang}</p><p>Price: {price}</p><p>Duration: {duration} minutes</p><p>Template: {template}</p><p>Email: {email}</p><p>External links:</p><ul>{links}</ul><p>Uploaded files url: {folder}</p><p>Comments: {comments}</p>",process:function(e){e.folder='<a href="{0}">Dropbox Folder</a>'.f(e.urlToFolder);for(var t="",o=0;e.links&&o<e.links.length;o++)t+='<li><a href="{0}">{1}</a></li>'.f(decodeURIComponent(e.links[o]),"file "+o);return e.links=t,e}}};module.exports={send:function(e,t){var o=templates[e],l=t.lang.substr(0,2),r={to:t.email,subject:o[l].subject,template:o[l].template,body:t};send(r)},sendToManager:function(e){var t=templates.order;e=t.process(e);var o={to:options.manager,subject:t.subject,template:t.template,body:e};return send(o),o.template.fo(o.body)}};