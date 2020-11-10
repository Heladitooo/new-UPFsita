//0

const Command = require("./command");
require("dotenv").config();

class Say extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message, string) {
    let messageToPrint = string;

    if (
      messageToPrint.length > 0 &&
      message.author.id != process.env.ID
    ) {
      message.channel.send("- " + messageToPrint);
      message.delete();
    } else {
      message.channel.send(
        "porfavor escribe un mensaje y no lo dejes en blanco nwn."
      );
    }
  }
}

module.exports = Say;
