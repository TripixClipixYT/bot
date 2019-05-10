const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Gamerz v1.2.0")
  .setDescription("If you would like to use noface bot on your own server be sure to contact me via Private message. Thank you.")
  .setColor("#7289DA")
  .setThumbnail(bicon)
  .setFooter("LuciferBG#6035");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"info"
}
