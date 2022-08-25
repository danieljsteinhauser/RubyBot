// instances API 
const { channel } = require("diagnostics_channel");
const Discord = require("discord.js")
require('dotenv').config()

// Bot limitations

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS" ], // parses the folowing inputs, guild_members is for new member join / leaving 
    partials: ["MESSAGE", "CHANNEL", "REACTION" ] }); // required for any reaction handling

// allows file navigation and instances Discord Command Collection
const fs = require('fs')
client.commands = new Discord.Collection()

// basic expression handler
const prefix = "!"

//Tells bot to only look at /commands/ dirrectory for command files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{const command = require(`./commands/${file}`)
client.commands.set(command.name, command
    )
}

//////////////////////////////////////// LOGIN ////////////////////////////////////////////////////
// gets token from .env file
client.login(process.env.TOKEN)

client.on("ready", () => 
{console.log('Logged in as ${client.user.tag}')})

////////////////////////////// New Member Join => DMV ////////////////////////////////////////
client.on('guildMemberAdd' , member =>{
    console.log('a member has joined the server') // console output, easy way to check if it is working. I advise you test this once to ensure it's working. 
    let welcomeRole = member.guild.roles.cache.find(role => role.name === "DMV");
    member.roles.add(welcomeRole)
})

///////////////////////////////// COMMANDS ///////////////////////////////////////////// 
/*  JRock = 148938139413512192
    Snips = 163127628004458497
    Laika = 226563920863690752
    Boom = 122380205766606849
    Maelstrom = 496739138805170227 */

// Only Mods and Laika can trigger ! commands (for now) // 
const adminIDs = ['148938139413512192', '163127628004458497', '226563920863690752', '122380205766606849', '496739138805170227']

client.on('messageCreate', message =>
{   
    if(!message.content.startsWith(prefix) || message.author.bot || message.content.length <= 10) return; // Ignores messages by bot and short !!! statements
    const args = message.content.slice(prefix.length).split(/ +/); 
    const command = args.shift().toLowerCase(); //formatting 

/////////////////////DMV Reaction Role /////////////////////
    if(adminIDs.includes(message.author.id)){
        if (command === 'dmvreactionrole'){
            message.delete() // cleans up command 
            client.commands.get('dmvreactionrole').execute(message, args, Discord, client)
    }}
    else{
        message.channel.send('insufficent privledges, contact a mod to use this function')  // basic error messsage for non bot users
    }
/////////////////////Game Reaction Role /////////////////////
    if(adminIDs.includes(message.author.id)){
        if (command === 'gamereactionrole'){
            message.delete() // cleans up command 
            client.commands.get('gamereactionrole').execute(message, args, Discord, client)
    }}
    else{
        message.channel.send('insufficent privledges, contact a mod to use this function')  // basic error messsage for non bot users
}})

client.on('messageCreate', message => { 
    if (message.author.bot){ 
    client.commands.get('ReactionRoleHandler').execute(message, Discord, client) // restarts reaction role handler if bot seems a message from itself
}})

client.on("ready", () => {
    const dmvBotTestChannel = '928335650225270784'
    //const laikaBotTestChannel = '996036666017988708'
    client.channels.cache.get(dmvBotTestChannel).send("bot online") // Instances the ReactionHandler with message being found.
})