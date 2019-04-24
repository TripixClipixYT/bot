const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login("NTY4Nzk3NjYwMDAyMzg1OTI0.XLnU9g.jUsI3YX_OGRUc009uWuz3QYECCg");