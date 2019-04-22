const Discord = require('discord.js');
const bot = new Discord.Client(); 

const token = 'NTM1ODU3NTE4MzY3MzQyNTkz.XLnZfg.d2SwG3-G-V8iAQfNfeUh9H_w-ZU';
const PREFIX = '/';
 
var version = '1.1.9';

bot.on('ready', () =>{
      console.log('Tripix Clipix Bot is online!');
   })

   let statuses =["Tripix Clipix and Vanix_'s videos", "Vanix_ is Tripix Clipix's second channel"]

setInterval(function(){
  let status = statuses[Math.floor(Math.random()* statuses.length)];
  bot.user.setActivity(status, {type: 'WATCHING'});
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
                                                  if (user === func.autouser(message, args.join(" ")) || message.guild.members.get(args[0])) {
                                                    const embed = new Discord.MessageEmbed()
                                                        .setColor('#36393e')
                                                        .setThumbnail(user.user.displayAvatarURL())
                                                        .setAuthor(`${user.user.username}#${user.user.discriminator}`, user.user.displayAvatarURL())
                                                        .addField("ID:", `${user.user.id}`, true)
                                                        .addField("Nickname:", `${member.nickname || 'None'}`, true)
                                                        .addField("Status:", status(), true)
                                                        .addField("Bot:", `${isBot()}`, true)
                                                        .addField("Game", game(), true)
                                                        .addField("Created At" + ` (${moment(user.user.createdAt, "dd").fromNow()})`, `${moment.utc(user.user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
                                                        .addField("Joined Server" + ` (${moment(member.joinedAt, "dd").fromNow()})`, `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
                                                        .addField("Highest Role", member.user.highestRole, true)
                                                        .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
                                                        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                                                    message.channel.send({
                                                        embed
                                                    });
                                                } else {
                                                    const embed = new Discord.MessageEmbed()
                                                        .setColor('#36393e')
                                                        .setThumbnail(user.displayAvatarURL())
                                                        .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
                                                        .addField("ID:", `${user.id}`, true)
                                                        .addField("Nickname:", `${member.nickname || 'None'}`, true)
                                                        .addField("Status:", status(), true)
                                                        .addField("Bot:", `${isBot()}`, true)
                                                        .addField("Game", game(), true)
                                                        .addField("Created At" + ` (${moment(user.createdAt, "dd").fromNow()})`, `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
                                                        .addField("Joined Server" + ` (${moment(member.joinedAt, "dd").fromNow()})`, `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, false)
                                                        .addField("Highest Role", member.highestRole, true)
                                                        .addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '), true)
                                                        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
                                                    message.channel.send({
                                                        embed
                                                    });
                                                }
                                            }          
      }
)
bot.login(token);
