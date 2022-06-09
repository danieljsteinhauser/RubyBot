const Discord = require('discord.js');
const client = new Discord.Client({
partials: ['MESSAGE', 'REACTION']
});
let prefix = '-';

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', guildMember =>{
  let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'DMV');
guildMember.roles.add(welcomeRole);
   
    guildMember.guild.channels.cache.get('871827657468289045').send(`Welcome <@${guildMember.user.id}> to the server!`)
  
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
  	} else
        
        if(message.content.startsWith(prefix + 'strive')){
            
            let role = message.member.guild.roles.cache.find(role => role.name === "Strive");
            
if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        
        
        }
                      
                          
});



module.exports = {
  name: "giverole",
  description: "Give roles to users",
  userPerms: ["MANAGE_ROLES"],
  botPerms: ["EMBED_LINKS", "MANAGE_ROLES"],
  run: async (client, message, args) => {
    const user = message.mentions.members.first();
    if (!message.content.startsWith(prefix))
      return message.channel.send(
        "Please mention a user you want to give the role to"
      );
    const name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Please type the name of the role");
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Couldn't find the Provided Role");
    await user.roles.add(role),
      message.channel.send(`${user} now has the ${role} role`);
  },
};
                
        
        
    














});
  	
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
