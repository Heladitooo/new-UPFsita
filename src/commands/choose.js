const Command = require("./command");
const randomNumber = require("../random");

class Choose extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message) {
    let toChoose = message.content.match(/\/[ a-zA-Z0-9]+/g);

    if (toChoose != undefined) {
      if (toChoose.length > 1) {
        if (randomNumber(0, 20) == 13) {
          let memberChannelList = [];

          message.channel.members.forEach((member) =>
            memberChannelList.push(member.user.id)
          );

          message.channel.send(
            `Ammm pues <@${
              memberChannelList[randomNumber(0, memberChannelList.length - 1)]
            }> tiene una mejor respuesta 😅`
          );
        } else {
          message.channel.send(
            `elijo: ${toChoose[randomNumber(0, toChoose.length - 1)].slice(1)}`
          );
        }
      } else {
        message.channel.send(
          "bueno solo hay una opción, tu puedes :D, escoge de manera correcta"
        );
      }
    } else {
      message.channel.send(
        "no puedo escoger, sepáralas asi: /opción1 /opción 2 y asi nwn"
      );
    }
  }
}

module.exports = Choose;
