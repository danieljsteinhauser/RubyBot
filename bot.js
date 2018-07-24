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
    	message.reply(Math.floor(Math.random() * 100));
  	}
})

   if (message.substring(0, 1) == 'Anna,') {
        const args = message.substring(1).split(' ');
        const cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'hi':
                client.sendMessage({
                    to: channelID,
                    message: 'Hello!'
                });
            break;
            // Just add any case commands if you want to..
}

;
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
