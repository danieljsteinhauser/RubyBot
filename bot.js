const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "Anna,";



client.on('ready', () => {
    console.log('I am ready!');
});

if (!message.content.startsWith(prefix)) return;

client.on('message', message => {
    if (message.content.startsWith(prefix + 'speak')){
    	message.reply('no');
  	}
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'number')) {
    	message.channel.send(Math.floor(Math.random() * 100));
  	}
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
