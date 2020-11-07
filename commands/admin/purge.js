exports.run = async (client, message, args) => {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('you need to input a number between 1 and 99.');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('there was an error when i tried to prune messages in this channel! can you check my perms?');
    });
},


exports.help = {
	name: "purge",
	description: "Purge a defined amount of message(s)",
	usage: "purge <number>",
	example: "purge 69"
};
  
exports.conf = {
	aliases: ["purge"],
	cooldown: 4
};