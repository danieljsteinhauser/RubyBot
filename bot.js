const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = 'Anna, ';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"`);
  member.guild.channels.get("469920145335124008").send(`Thank you for joining the server "${member.user.username}"! Make sure to check out the list of roles you can choose from in the bot-commands channel!`);
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
        message.member.addRole('334178368150831115')
        .then(console.log)
        .catch(console.error);
        message.reply('Done, have fun with your new role!');
    } else
        
         if (message.content.startsWith(prefix + 'smash')){
        message.member.addRole('469925194744594463')
        .then(console.log)
        .catch(console.error);
             message.reply('Done, have fun with your new role!');
    } else
        
         if (message.content.startsWith(prefix + 'BBTag')){
        message.member.addRole('469925096975237120')
        .then(console.log)
        .catch(console.error);
             message.reply('Done, have fun with your new role!');
    } else
        
         if (message.content.startsWith(prefix + 'promo')){
        message.member.addRole('469926083106701362')
        .then(console.log)
        .catch(console.error);
             message.reply('Done, have fun with your new role!');
    } else
        
      if (message.content.startsWith(prefix + 'player')){
        message.member.addRole('253198112498122752')
        .then(console.log)
        .catch(console.error);
          message.reply('We appreciate having you join us! Make sure to check out what other roles you can get as well!');
    } else
        
          if (message.content.startsWith(prefix + 'commands')) {
    	message.channel.send('player - Gives access to the general channels!\n splatoon 2 - Gives access to the Splatoon 2 related channels!');
  	} 
              
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
