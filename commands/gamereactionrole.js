module.exports= {
          //Channel and Role Definitions//
     name: 'gamereactionrole',
     description: "Assigns Roles to GGST, DNF, BBTAG, Blazblue, Granblue, Persona, KOFXV,  Skullgirls, Dengeki and MISC ", // note if getting ids from pasting \:emoji: into Discord; right-click does not work
     requiredChannel: 'role-assign',
     async execute(message, args, Discord, client){
          
//////////////////////Channel and Role Info////////////////////////
          //const channel ='996036666017988708' // Laika's Bot Testing Channel
           const channel = '871852170188832778' // DMV role-assign
          // const channel = '928335650225270784' // DMV Bot Testing Channel
          
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
     }}
