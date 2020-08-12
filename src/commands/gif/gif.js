const Command = require("../command");
const randomGif = require("./randomGif");
const Discord = require("discord.js");
const chooseColor = require("../../chooseColor");
const name = "UPFsita"

class Gif extends Command {
  constructor(name, description) {
    super(name, description);
    
  }

  on(message, command){
    let xuser;
    let embed;
    try {
      xuser = message.mentions.users.first().username;
    } catch {
      xuser = false;
    }
    
    let gifSelected = randomGif(command, message.author.username, xuser);


    if ((xuser == false || xuser == message.author.username ||xuser == name)) {
      embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle(gifSelected.doesWork.alone);

        if(gifSelected.doesWork.showGif == true){
          embed.setImage(gifSelected.gif);
        }
        

      message.channel.send(embed);
    } else {
      embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle(gifSelected.works)
        .setImage(gifSelected.gif);

      message.channel.send(embed);
    }
    
  
   
      

  }
}

module.exports = Gif;
