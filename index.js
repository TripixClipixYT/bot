const Discord = require('discord.js');
const bot = new Discord.Client(); 

const token = 'NTM1ODU3NTE4MzY3MzQyNTkz.XMCiQg.pzPztW0RvbvTg1Fd_RSkBLN0d4s';
const PREFIX = '/';
 
var version = '1.1.12';

bot.on('ready', () =>{
      console.log('Tripix Clipix Bot is online!');
   })

   let statuses =["Tripix Clipix and Vanix_'s videos"]

setInterval(function(){
  let status = statuses[Math.floor(Math.random()* statuses.length)];
  bot.user.setActivity(status, {type: 'PLAYING'});
}, 1000)

   bot.on('message', message=>{
      let args = message.content.substring(PREFIX.length).split(" ");
      switch(args[0]){
          case 'ping':
              message.reply('pong', message.author.p);
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
                      message.channel.sendEmbed(embed);
                           break; 
                           case 'botinfo':
                            const embed4 = new Discord.RichEmbed()
                             .setTitle('Bot Information')
                                .addField('Bot Name:Tripix Clipix')
                                .addField('Bot Version', version)
                                   .setColor(0xF1C40F)
                                         .setFooter('Made by TripixClipixYT#6035')
                                             message.channel.sendEmbed(embed4); 
                                                  break;
                                                    
    case 'help':
                                                   
                                                   const Sembed = new Discord.RichEmbed()
                                                   .setColor(colours.redlight)
                                                   .setAuthor(`Tripix Clipix`, message.guild.iconURL)
                                                   .setThumbnail(bot.user.displayAvatarURL)
                                                   .setTimestamp()
                                                   .setDescription(`These are the avaliable commands at the moment for Tripix Clipix\n The bot prefix is ${prefix}`)
                                                   .addField(`Commands: "developer" "user" "serverinfo" "botinfo"`)
                                                   .setFooter("Tripix Clipix\n 2k19 Developed!")
                                                   message.channel.send(Sembed)
                                                   break;
                                                   }
   }
                                             }
)
bot.login(token);
