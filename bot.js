var Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
bot.login(token)
   token: NTU3OTQ4MjM2Mzc2MzA5Nzgw.XKUZPw.rzAnPxqZ393AgRxY0hSrZHQ1-iE
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !hi
            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});