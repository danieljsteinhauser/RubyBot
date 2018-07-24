const Discord = require('discord.js');
const client = new Discord.Client();
const Random = Math.floor(Math.random() * 100);

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
    	message.reply(Random);
  	}
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
