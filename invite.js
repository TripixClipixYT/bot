const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let helpembed = new Discord.RichEmbed()
    .addField(" ℹ Invites", "-------------------")
    .setColor("#7289DA")
    .addField("Bot Invite", "https://discordapp.com/api/oauth2/authorize?client_id=572841752822677515&permissions=8&scope=bot")
    .addField("Server Invite", "https://discord.gg/VZeCKG4")
    .setFooter("Seeth#9090");

    message.channel.send(helpembed);
}


module.exports.help = {
    name: "invite"
}