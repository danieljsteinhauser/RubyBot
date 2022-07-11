module.exports= {
          //Channel and Role Definitions//
     name: 'gamereactionrole',
     description: "Assigns Roles to GGST, DNF, BBTAG, Blazblue, Granblue, Persona, KOFXV,  Skullgirls, Dengeki and MISC ", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
     requiredChannel: 'role-assign',
     async execute(message, args, Discord, client){
          
//////////////////////Channel and Role Info////////////////////////
          const channel ='996036666017988708' // Laika's Bot Testing Channel
          // const channel = '871852170188832778' // DMV role-assign
          // const channel = '928335650225270784' // DMV Bot Testing Channel
          

          const striveRole = message.guild.roles.cache.find(role => role.name === "Strive") // Use Role's Name
          const blazeblueRole = message.guild.roles.cache.find(role => role.name === "Blazblue")
          const kofRole = message.guild.roles.cache.find(role => role.name === "KOF")
          const meltyRole = message.guild.roles.cache.find(role => role.name === "Melty") 
          const bbtagRole = message.guild.roles.cache.find(role => role.name === "BBTag")
          const granblueRole = message.guild.roles.cache.find(role => role.name === "Granblue")
          const personaRole = message.guild.roles.cache.find(role => role.name === "Persona")
          const dnfRole = message.guild.roles.cache.find(role => role.name === "DNF")  
          const dengekiRole = message.guild.roles.cache.find(role => role.name === "Dengeki Bunko Fighting Climax")
          const skullgirlsRole = message.guild.roles.cache.find(role => role.name === "Skullgirls")
          const miscRole = message.guild.roles.cache.find(role => role.name === "Miscellaneous")

 //////////////Emojis///////////////// 
          const striveEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Strive') // pulls image from server's list, works based on name of emoji
          const blazblueEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Blazblue')
          const kofEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'KOFXV')
          const meltyEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Melty_Blood') 
          const bbtagEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'BBTag')
          const granblueEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Granblue') 
          const personaEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Persona')
          const dnfEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'DNF_Duel')
          const dengekiEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Dengeki') 
          const skullgirlsEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Skullgirls')
          const miscEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'Misc')


/////////////////Embed//////////////////////
          let embed = new Discord.MessageEmbed()
          .setColor('#e42643')
          .setTitle('Games Selection')
          .setDescription('Use the following reactions to select which games you play!\n\n'    // NOTE: when adding new things to this list, use ` ` and NOT ' ' 
               + `${striveEmoji} for Strive \n`
               + `${dnfEmoji} for DNF \n`
               + `${granblueEmoji} for Granblue \n`
               + `${blazblueEmoji} for Blazblue \n`
               + `${personaEmoji} for Persona \n`
               + `${dengekiEmoji} for Dengeki \n`
               + `${kofEmoji} for KOFXV \n`
               + `${bbtagEmoji} for BBTAG \n`
               + `${skullgirlsEmoji} for Skullgirls \n`
               + `${meltyEmoji} for Melty Blood \n`
               + `${miscEmoji} for Misc. \n`)

          //Sends Embed and reacts to it
          let messageEmbed = await message.channel.send({embeds: [embed]}) // only accepts arrays, older videos/guides often miss this
          messageEmbed.react(striveEmoji)
               .then(() => messageEmbed.react(dnfEmoji))  // then method ensures bot reacts to the embed in the correct order. 
               .then(() => messageEmbed.react(granblueEmoji))
               .then(() => messageEmbed.react(blazblueEmoji))
               .then(() => messageEmbed.react(personaEmoji))
               .then(() => messageEmbed.react(dengekiEmoji))
               .then(() => messageEmbed.react(kofEmoji))
               .then(() => messageEmbed.react(bbtagEmoji))
               .then(() => messageEmbed.react(skullgirlsEmoji))
               .then(() => messageEmbed.react(meltyEmoji))
               .then(() => messageEmbed.react(miscEmoji))
     
          ///////////////Reaction Add Protocols and Safety Checks ///////////////// 
          client.on('messageReactionAdd', async (reaction, user) => {
               if (reaction.partial) await reaction.fetch() 
               if (user.bot) return //skips bot reactions
               if (!reaction.message.guild) return //reaction has to be from server member
               
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === striveEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(striveRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === blazblueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blazeblueRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === kofEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(kofRole) 
               }}     
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === meltyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(meltyRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === bbtagEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bbtagRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === granblueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(granblueRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === personaEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(personaRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === dnfEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dnfRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === dengekiEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dengekiRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === skullgirlsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(skullgirlsRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === miscEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(miscRole) 
               }}                  
          else {
               return
          }})

          ///////////////Reaction Remove Protocols and Safety Checks /////////////////     
          client.on('messageReactionRemove', async (reaction, user) => {
               if (reaction.partial) await reaction.fetch()
               if (user.bot) return
               if (!reaction.message.guild) return

               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === striveEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(striveRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === blazblueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blazeblueRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === kofEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(kofRole) 
               }}     
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === meltyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(meltyRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === bbtagEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bbtagRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === granblueEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(granblueRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === personaEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(personaRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === dnfEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dnfRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === dengekiEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dengekiRole) 
               }} 
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === skullgirlsEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(skullgirlsRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === miscEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(miscRole) 
               }}                  
          else {
               return
          }})
     }}