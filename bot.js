const adminprefix = "!";
const developers = ['482639461306335232'];
const Discord = require('discord.js');
 const RichEmbed = require('discord.js');


client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
console.log("YES YES AHHH! *cums*");

})


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "482639461306335232") return;

  
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('watching be' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('LISTENING be' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
} 


});
client.login(process.env.BOT_TOKEN); 
