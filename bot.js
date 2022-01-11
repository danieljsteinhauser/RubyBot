const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = '-';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  console.log(member.user.username + 'welcome to the server!')
    console.log(member)
    const role = member.guild.roles.find('name', 'Guests');
    member.addRole(role);
});


client.on('message', message => {
    
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'speak')){
    	message.channel.send('no');
  	} else

    if (message.content.startsWith(prefix + 'number')) {
    	message.channel.send(Math.floor(Math.random() * 100));
  	} else
        
          if (message.content.startsWith(prefix + 'roles')) {
    	message.reply('\nSupporter - If you \'re a supporter of Fullmetal or Hayden, get this role to see even more of their content and let them know that you care!\nGranblue - Gives access to the Granblue Fantasy Versus related channels.\nSmash - Gives access to the Smash series related channels.\nBBTag - Gives access to the BlazBlue Cross Tag Battle related channels, where I reign supreme. \nGG - Gives access to the GGXrd2 channels.');
  	} 
        
                   
                    
                          
});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
