module.exports= {
///////////////////Scope////////////////////////
     name: 'dmvreactionrole',
     description: "Assigns Roles to Maryland, Virginia, and DC", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
     requiredChannel: 'role-assign',
     async execute(message, args, Discord, client){

//////////////////////Channel and Role Info////////////////////////
          const channel ='996036666017988708' // Laika's Bot Testing Channel
          // const channel = '871852170188832778' // DMV role-assign
          // const channel = '928335650225270784' // DMV Bot Testing Channel


          const marylandRole = message.guild.roles.cache.find(role => role.name === "MD") // Use Role's Name
          const virginiaRole = message.guild.roles.cache.find(role => role.name === "VA")
          const dcRole = message.guild.roles.cache.find(role => role.name === "DC")

 //////////////Emojis///////////////// 
          const mdFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'MDFlag') // pulls image from server's list, works based on name of emoji
          const vaFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'VAFlag')
          const dcFlag = message.guild.emojis.cache.find(emoji => emoji.name === 'DCFlag')

/////////////////Embed//////////////////////
          let embed = new Discord.MessageEmbed()
            .setColor('#e42643') // white 
            .setTitle('DMV Region Selection')
            .setDescription('Select your region using the following reactions\n\n'
                + `${mdFlag} for Maryland \n`
                + `${vaFlag} for Virginia \n`
                + `${dcFlag} for DC \n`)
          
          //Sends Embed and reacts to it
          let messageEmbed = await message.channel.send({embeds: [embed]}) // only accepts arrays, older videos/guides often miss this
          messageEmbed.react(mdFlag)
               .then(() => messageEmbed.react(vaFlag)) // then method ensures bot reacts to the embed in the correct order.
               .then(() => messageEmbed.react(dcFlag))
          
///////////////Reaction Add Protocols and Safety Checks ///////////////// 
          client.on('messageReactionAdd', async (reaction, user) => {
               if (reaction.partial) await reaction.fetch() 
               if (user.bot) return //skips bot reactions
               if (!reaction.message.guild) return //reaction has to be from server member
               
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === mdFlag){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(marylandRole) // If Permission Error Happens, Make sure Bot is in Bot Role with Permissions
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === vaFlag){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(virginiaRole) 
               }}
               if (reaction.message.channel.id == channel) {
                    if (reaction.emoji === dcFlag){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dcRole) 
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
                    if (reaction.emoji === mdFlag){
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
               else {
                    return
          }

     })
}}
