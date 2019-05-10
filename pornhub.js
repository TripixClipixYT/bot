const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.channel.send(`https://www.pornhub.com/video/search?search=${args.join("+")}`)
}
module.exports.help = {
  name: "pornhub"
}