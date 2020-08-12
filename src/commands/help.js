const Command = require("./command");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");

class Help extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message, list) {
    const embed = new Discord.MessageEmbed()
      .setColor(chooseColor())
      .setTitle("Lista de comandos :D");

    for (let i = 0; i < list.length; i++) {
      embed.addFields({
        name: list[i].name,
        value: "```" + list[i].description + ".```",
      });
    }

    message.channel.send(embed);
  }
}

module.exports = Help;