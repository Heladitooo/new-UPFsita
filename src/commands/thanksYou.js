const Command = require("./command");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");


class ThanksYou extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message) {
    const embed = new Discord.MessageEmbed()
      .setColor(chooseColor())
      .setTitle("Thanks You")
      .setImage("https://img-9gag-fun.9cache.com/photo/aDzoVPG_460s.jpg")
      embed.setDescription("@andf, @iceWolf, @pajaro, @BratianCero, @Guevardox, @Molonazo")

    message.channel.send(embed);
  }
}

module.exports = ThanksYou;
