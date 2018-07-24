const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Anna') {
    	message.reply('yes?');
  	}
});
client.on('message', message => {
    if (message.content === 'Number') {
    	message.channel.send(Math.floor(Math.random() * 100));
  	}
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
