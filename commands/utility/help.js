const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "display all commands and descriptions",
  guildOnly: true,
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("sefy help menu")
      .setDescription("list of all commands (for now)")
      .setColor("#F8AA2A")
      .setFooter("this is a wip bot. image credit: azurie「リン」#9528")
      .setImage('https://images-ext-2.discordapp.net/external/9U04vbD9GLf31Hhxj66zbsG3JWELA_mzbTyL0TnVFNg/https/i.imgur.com/S2AOUgx.png?width=389&height=278')
      .setThumbnail('https://cdn.discordapp.com/avatars/768468297552756797/3d2844612aa803b8c38feabe42aede38.png?size=2048');

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};