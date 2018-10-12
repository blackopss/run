const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "!";
const developers = ['498517748918386690'];

console.log("Paaaaartly");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
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


client.login("NDk4NTE3NzQ4OTE4Mzg2Njkw.DqIF4A.4msu-cg7dYBwogcO9rlS0bqLQxY") 
