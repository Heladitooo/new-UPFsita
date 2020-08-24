const Command = require("./command");
const Discord = require("discord.js");
const gmu = require("../getMentionsUsers");

class Pmessage extends Command {
  constructor(name, description) {
    super(name, description);
    this.channelID = "746449632196034762";
  }

  on(message, client) {
    let userMention = gmu(message);
    let xuser = userMention[0];

    if (xuser == undefined) {
      message.author.send("Menciona a quien vas a enviar el mensaje ;-;");
      message.delete();
    } else {
      let md = message.content.match(/\/.+/g);

      try {
        md[0];
      } catch {
        md = false;
      }

      if (md == false) {
        message.author.send("divide el mensaje upf!pmessage @mention /message");
        message.delete();
      } else {
        try {
          if(message.channel.id == this.channelID){
            client.users.cache
              .get(xuser.id)
              .send("**:detective: mensaje anónimo:** " + md[0].slice(1));
            message.author.send(
              "mensaje enviado exitosamente a " + xuser.username + ":detective:"
            );
            message.delete();
          } else {
            message.author.send("este comando solo funciona en el canal #epic-anonymous-message");
            message.delete();
          }
        } catch {
          message.delete();
          message.author.send(
            "a ocurrido un error, asegurate de solo mencionar personas"
          );
        }
      }
    }
  }
}

module.exports = Pmessage;
