const Command = require("../command");
const randomGif = require("./randomGif");
const Discord = require("discord.js");
const chooseColor = require("../../chooseColor");
const name = "UPFsita";
const gmu = require("../../getMentionsUsers");

class Gif extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message, command) {
    let mentionUsers = gmu(message);

    let xuser = mentionUsers[0];
    let embed;

    if (
      xuser == undefined ||
      xuser == message.author.username ||
      xuser == name
    ) {
      let gifSelected = randomGif(command, message.author.username);
      embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle(gifSelected.doesWork.alone);

      if (gifSelected.doesWork.showGif == true) {
        embed.setImage(gifSelected.gif);
      }

      message.channel.send(embed);
    } else {
      let gifSelected = randomGif(
        command,
        message.author.username,
        xuser.username
      );
      embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle(gifSelected.works)
        .setImage(gifSelected.gif);

      message.channel.send(embed);
    }
  }
}

module.exports = Gif;
