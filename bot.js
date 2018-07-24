const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = 'Anna, ';

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', message => {
    
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'speak')){
    	message.reply('no');
  	} else

    if (message.content.startsWith(prefix + 'number')) {
    	message.channel.send(Math.floor(Math.random() * 100));
  	} else
        
    if (message.content.startsWith(prefix + 'splatoon2')){
        message.member.addRole('471453908695252992').catch(error => console.log(error));
    
    }    
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
