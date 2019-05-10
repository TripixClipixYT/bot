const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let helpembed = new Discord.RichEmbed()
    .addField(" ℹ [Gamerz HELP MENU]", "--------------------------------------")
    .setColor("#7289DA")
    .addField("Help", "Shows list of commands or can show advice on using command [ex: !<command> help]")
    .addField("Serverinfo", "Gives information on current server")
    .addField("Userinfo", "Gives information on user of choice")
    .addField("Info", "Information on bot and creator.")
    .addField("Report", "Report a user for conflict or breaking rules. [ex: !report <user> <reason>]")
    .addField("invite", "Get invite links")
    .addField(" 🎲 [FUN COMMANDS]", "--------------------------------------")
    .addField("8ball", "Shake the 8ball to answer your deepest questions [ex: !8ball <question>]")
    .addField("Coinflip", "Flip a coin")
    .addField("Coins", "Check your Popukoin ammount")
    .addField("Pay", "Transfer your Popukoins to a friend")
    .addField("Ship", "Ship your fav two people [ex: !ship <@user> <@user>]")
    .addField("Gay", "Gay meter, see how gay someone is[ex: !gay <@user>]")
    .addField("Meme", "Posts random meme from r/meme")
    .addField("PPtest", "Test how big your pp is")
    .addField("Dice", "Rolls dice gives you random number")
    .addField(" 🔍 [COMMANDS TO SEARCH THE WEB]", "--------------------------------------")
    .addField("DDG", "Search something up on DuckDuckGo [ex: !ddg <search request>]")
    .addField("Google", "Look something up on google. [ex: !google <search request>]")
    .addField("Pornhub [NSFW]", "Look something up on Pornhub you lil perv [ex: !pornhub <search request>]")
    .addField("wiki", "Look something up on wiki [ex. !wiki <search request] ")
    message.channel.send(helpembed);

    if(message.member.hasPermission("MANAGE_MESSAGES")){
    let modembed = new Discord.RichEmbed()
    .addField(" 👮 Gamerz Moderator Help Menu", "--------------------------------------")
    .setColor("#7289DA")
    .addField("Ban", "Ban user of choice. [ex: !Ban <user>]")
    .addField("kick", "Kick user of choice [ex:!kick <user>]")
    .addField("Removerole", "Remove role from user [ex: !removerole <user> <role>]")
    .addField("Addrole", "Give user role [ex: !addrole <user> <role>]")
    .addField("Prefix", "Change Popukos prefix [ex: !prefix <prefix>]")
    .addField("Warn", "Warn misbehaving user [ex: !warn <user> <reason>]")
    .addField("Warnlevel", "Check ammount user have been warned [ex: !warnlevel <user>]")
    .addField("Tempmute", "Mute user temporarily [ex: !tempmute <user> <1h> <1m> <1s>]")
    .addField("Poll", "Create a quick poll [ex: !poll <question>")
    
try{
    await message.author.send(modembed);
    message.react(" ")
 }catch(e){
        message.reply("Your DMs are locked. Please go to 'Privacy settings' and allow direct messages from server members to see list of mod commands");
    }
}

}

module.exports.help = {
    name: "help"
}