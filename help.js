const Discord = require('discord.js');
const botconfig = require(".../index.js");

if(!args[0]){
message.delete();
let embed = new Discord.RichEmbed()
.setAuthor(`Help Command!`, message.guild.iconURL)
.setColor(colours.cyan)
.setDescription(`${message.author.username} check your DM!`)

let Sembed = new Discord.RichEmbed()
.setColor(colours.redlight)
.setAuthor(`Tripix Clipix`, message.guild.iconURL)
.setThumbnail(bot.user.displayAvatarURL)
.setTimestamp()
.setDescription(`These are the avaliable commands at the moment for Tripix Clipix\n The bot prefix is ${prefix}`)
.addField(`Commands: "developer" "user" "serverinfo" "botinfo"`)
.setFooter("Tripix Clipix\n 2k19 Developed!")
message.channel.send(Sembed)


}