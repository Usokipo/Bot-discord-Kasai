const Discord = require("discord.js")
const Client = new Discord.Client();

var prefix = '*'
var token = 'NjI4OTEwNDI5NzMyNjAxODU3.XZSErg.xWDvkcwIhktCA45swpEOCyLhAXQ'

client.on("ready", function(){
	console.log("ready")
})

client.on("message", message => {
	
})

client.login(token);
