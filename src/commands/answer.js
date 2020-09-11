//7

const Command = require("./command");
const randomNumber = require("../random");

class Answer extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message, string) {
    let random = randomNumber(0, 5);

    if (string.length > 0) {
      switch (random) {
        case 0:
          message.channel.send("NO.");
          break;
        case 1:
          message.channel.send("no, bueno si.");
          break;
        case 2:
          message.channel.send("correria peligro si te lo dijera.");
          break;
        case 3:
          message.channel.send("SI.");
          break;
        case 4:
          message.channel.send("si pero no.");
          break;
        case 5:
          message.channel.send("es muy obvio que no.");
          break;
        case 6:
          message.channel.send("¡jamas!");
          break;
        case 7:
          message.channel.send("ni lo pienses.");
          break;
      }
    } else {
      message.channel.send("no te puedo responder a nada w-w.");
    }
  }
}

module.exports = Answer;
