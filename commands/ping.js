module.exports= 
{
   name: 'ping',
   description: "command handler or !ping",
   execute(message, args)
   {
        message.channel.send('test');
        if(message.member.roles.cache.has('702915710531141694')){
         message.channel.send('you are the queen of spice. Now you will also be a robitTester')
         message.member.roles.add('991373478877995099')

        }

   } 
}