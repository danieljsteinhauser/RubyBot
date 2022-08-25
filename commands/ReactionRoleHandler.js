module.exports= {
   ///////////////////Scope////////////////////////
        name: 'ReactionRoleHandler',
        description: "Assigns all roles", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
        requiredChannel: 'role-assign',
        async execute(message, Discord, client){
   
   //////////////////////Channel and Role Info////////////////////////
             // const channel ='996036666017988708'; // Laika's Bot Testing Channel
              const channel = '871852170188832778' // DMV role-assign
             // const channel = '928335650225270784' // Bot Testing Channel

             const marylandRole = message.guild.roles.cache.find(role => role.name === "MD"); // Use Role's Name
             const virginiaRole = message.guild.roles.cache.find(role => role.name === "VA");
             const dcRole = message.guild.roles.cache.find(role => role.name === "DC");

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
             const mdFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'MDFlag'); // pulls image from server's list, works based on name of emoji
             const vaFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'VAFlag');
             const dcFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'DCFlag');
   
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

   ///////////////Reaction Add Protocols and Safety Checks ///////////////// 
             client.on('messageReactionAdd', async (reaction, user) => {
                  if (user.bot) return; //skips bot reactions 
                  if (!reaction.message.guild) return; //reaction has to be from server member
                  if (reaction.partial) await reaction.fetch();   
   
   // If Permission Error Happens, Make sure Bot is in Role with Permissions
                  try{                                                  
                       if (reaction.message.channel.id == channel) {
                            if (reaction.emoji === mdFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(marylandRole) 
                       }}
                       if (reaction.message.channel.id == channel) {
                            if (reaction.emoji === vaFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(virginiaRole) 
                       }}
                       if (reaction.message.channel.id == channel) {
                            if (reaction.emoji === dcFlag){
                              await reaction.message.guild.members.cache.get(user.id).roles.add(dcRole) 
                       }} 
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
                            return }
                  } catch (error) {
                       console.error('Something went wrong assigning roles:', error)
                       let eCatch = error.stack;
                       const Laika = await client.users.fetch('226563920863690752');
                       Laika.send('Something went wrong assigning roles');  // error catching, sends a message to Laika briefly explaining what happened
                       Laika.send(eCatch);
                       return;
                  }
             })
   
    ///////////////Reaction Remove Protocols and Safety Checks /////////////////     
             client.on('messageReactionRemove', async (reaction, user) => {
                  if (user.bot) return
                  if (!reaction.message.guild) return
                  if (reaction.partial) await reaction.fetch()
   
                  try{
                     if (reaction.message.channel.id == channel) {
                        if (reaction.emoji === mdFlag) {
                           await reaction.message.guild.members.cache.get(user.id).roles.remove(marylandRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
                     }}
                     if (reaction.message.channel.id == channel) {
                        if (reaction.emoji === vaFlag){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(virginiaRole) 
                     }}
                     if (reaction.message.channel.id == channel) {
                        if (reaction.emoji === dcFlag){
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(dcRole) 
                     }}
         ///////////////////////// DMV AND FGC Divide /////////////////////////////

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
                           await reaction.message.guild.members.cache.get(user.id).roles.remove(miscRole)}
                     else {
                           return }}} 
                  catch (error) {
                     console.error('Something went wrong assigning roles:', error)
                     let eCatch = error.stack;
                     const Laika = await client.users.fetch('226563920863690752');
                     Laika.send('Something went wrong assigning roles');  // error catching, sends a message to Laika briefly explaining what happened
                     Laika.send(eCatch);
                     return;
                  }
        })
   }}
