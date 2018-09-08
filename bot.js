const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = 'Ruby, ';
let rudeRuby = Math.floor(Math.random() * 5);

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('social', '255859167200411658');
  const role = member.guild.roles.find('guests', '256943213477101569' );
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
    member.addRole(role);
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'speak')){
    	message.reply('no');
  	} else

    if (message.content.startsWith(prefix + 'number')) {
    	message.channel.send(Math.floor(Math.random() * 100));
  	} else
        
    if (message.content.startsWith(prefix + 'splatoon')){
        message.member.addRole('481485569063518217')
        .then(console.log)
        .catch(console.error);
        switch(rudeRuby)
        {
            case 1 :
                message.reply('done have fun with your new role!');
                break;
                
            case 2 :
                message.reply('can\'t you see I\'m busy?')
                break;
                
            case 3 :
                message.reply('stop bothering me...')
                break;
                
                default :
                message.channel.send('error')
        }
    } else
        
         if (message.content.startsWith(prefix + 'smash')){
        message.member.addRole('481485523781943306')
        .then(console.log)
        .catch(console.error);
             message.reply('done have fun with your new role!');
    } else
        
         if (message.content.startsWith(prefix + 'BBTag')){
        message.member.addRole('481485486955692063')
        .then(console.log)
        .catch(console.error);
             message.reply('done have fun with your new role!');
    } else
        
         if (message.content.startsWith(prefix + 'GG')){
        message.member.addRole('481485431863771136')
        .then(console.log)
        .catch(console.error);
             message.reply('done have fun with your new role!');
    } else
        
      if (message.content.startsWith(prefix + 'player')){
        message.member.addRole('253198112498122752')
        .then(console.log)
        .catch(console.error);
          message.reply('We appreciate having you join us! Make sure to check out what other roles you can get as well!');
    } else
        
          if (message.content.startsWith(prefix + 'roles')) {
    	message.reply('player - Gives access to the general channels!\nSplatoon - Gives access to the Splatoon 2 related channels!\nSmash - Gives access to the Smash series related channels!\nBBTag - Gives access to the BlazBlue Cross Tag Battle related channels!\nGG - Gives access to the GGXrd2 channels!');
  	} 
              
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
