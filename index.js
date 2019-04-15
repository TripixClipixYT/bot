const Discord = require('discord.js');
const bot = new Discord.Client(); 

const token = 'NTM1ODU3NTE4MzY3MzQyNTkz.XLCOzQ.BlCTxN4NOOsu7tqsBvIxWwaGdCA';
const PREFIX = '/';

var version = '1.1.11';

bot.registry
bot.on('ready', () =>{
      console.log('Tripix Clipix Bot is online!');
   })

   let statuses =['Live Sub Count PewDiePie vs T-Series']

setInterval(function(){
  let status = statuses[Math.floor(Math.random()* statuses.length)];
  bot.user.setActivity(status, {type: 'Streaming'});
}, 5000)

   bot.on('message', message=>{
      let args = message.content.substring(PREFIX.length).split(" ");
      switch(args[0]){
          case 'ping':
              message.reply('pong');
               break;
                    case 'developer':
                       message.reply('This is a ChatBot by TripixClipixYT#6035!')
                             break;
                                   case 'user':
                                       const embed = new Discord.RichEmbed()
                                           .setTitle('User Information')
                                              .addField('Player Name:', message.author.username)
                                                  .setColor(0xF1C40F)
                                                    .addField('Current Server', message.guild.name)
                                                      .addField('Date your Discord account was created:', message.author.createdAt)
                                                      .addField('Date you joined the server:', message.author.joined)
                                                       .setThumbnail(message.author.avatarURL)
                                                        .setFooter('Made by TripixClipixYT#6035')
                                                          message.channel.sendEmbed(embed);
                                                             break;             
case 'serverinfo':
    const embed2 = new Discord.RichEmbed()
     .setTitle('Server Information')
        .addField('Server Name', message.guild.name)
           .setColor(0xF1C40F)
              .addField('Server Was Created in:', message.guild.createdAt)
                  .setFooter('Made by TripixClipixYT#6035')
                      message.channel.sendEmbed(embed2);
                           break; 
case 'botinfo':
   const embed4 = new Discord.RichEmbed()
    .setTitle('Bot Information')
      .addField('Bot Name', 'Tripix Clipix')                 
           .addField('Bot Version', version)
              .setColor(0xF1C40F)
                     .setFooter('Made by TripixClipixYT#6035')
                              message.channel.sendEmbed(embed4);
                                                  break; 
      }
   }
)         
bot.login(token);
 
