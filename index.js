const Discord = require('discord.js');
const bot = new Discord.Client(); 

const token = 'NTcxNjc4NTY0MjE5NDg2MjQ4.XPezoA.4g6xjm0frR-KduDhvrTVMKwiUNs';
const PREFIX = 'tr!';

var prefix = '/'; 
var version = '1.1.12';

bot.on('ready', () =>{
      console.log('Tripix Clipix Bot is online!');
   })

   let statuses =[
     `tr!help`,
         `Skillet-Legendary`
]

setInterval(function(){
  let status = statuses[Math.floor(Math.random()* statuses.length)];
  bot.user.setActivity(status, {type: 'lISTENING'});
}, 5000)

   bot.on('message', message=>{
      let args = message.content.substring(PREFIX.length).split(" ");
      switch(args[0]){
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
      .addField('Members Joined:', message.guild.memberCount)
                  .setFooter('Made by TripixClipixYT#6035')
                      message.channel.sendEmbed(embed2);
                           break; 
                           case 'botinfo':
                            const embed4 = new Discord.RichEmbed()
                             .setTitle('Bot Information')
                                .addField('Bot Name:Tripix Clipix')
                                .addField('Bot Version', version)
                                   .setColor(0xF1C40F)
                                         .setFooter('Made by TripixClipixYT#6035');
                                                  break;
                                                     
                                                 case 'help':
                                                
                                                   const Sembed = new Discord.RichEmbed()
                                                   .setColor(0xF1C40F)
                                                   .setAuthor(`MBG`, message.guild.iconURL)
                                                   .setThumbnail(bot.user.displayAvatarURL)
                                                   .setTimestamp()
                                                   .setDescription(`These are the avaliable commands at the moment for Tripix Clipix\n The bot prefix is **tr!**`)
                                                   .addField(`Commands:"developer" "user" "serverinfo" "botinfo[Soon...]" "ping[Soon...]" `)
                                                   .setFooter("Tripix Clipix\n 2k19 Developed!")
                                                   message.channel.send(Sembed)
                                                   break;          
      const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const { botconfig } = require ("../../botconfig.json");

var version = "1.0.3[Alpha]";
var bdeveloper= "LuciferBG#6035";

            case 'botinfo':
    let biEmbed = new RichEmbed()
        .setColor(cyan)
        .setTimestamp()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTitle("**Bot Info**")
        .addField("**Bot Name**", bot.user.username)
        .addField("**Bot's Website**", "https://lucifers-coding.site123.me")
        .addField("**Bot Owner:**", bdeveloper)
        .addField("**Bot Version:**", version)
        .setDescription("Tripix's Bot Information")
        .addField("**The bot was created on:**", bot.user.createdAt)
        .addField("**Bot Type:**", "_Chat Bot_")
        .addField("**Total Servers:**", bot.guilds.size)
        .addField("**More Info:**", "When the bot is in **Beta** mode **admins** and **mods** can use the bot code and help for finishig him!")
        .setFooter(`Gamerz`, bot.user.displayAvatarURL);
    message.channel.send(biEmbed);
                  break;
      
      } 
        if (message.content === prefix + "ping"){
    message.reply("Pong! (hold on, processing latency...)").then(m => m.edit(`${message.author}:ping_pong: Pong!  (Current latency is ${m.createdTimestamp - message.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
    message.react("✅");
  }            
      
                               }
   )
   
bot.login(token);
