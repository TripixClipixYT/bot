const Discord = require("discord.js")
exports.run = (client, message, args) => {
  message.channel.send(`https://www.google.com/search?newwindow=1&source=hp&ei=urjQXMrGI5L8tAW70bKQBw&q=${args.join("+")}`)
}
module.exports.help = {
  name: "google"
}