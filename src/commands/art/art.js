const Command = require("../command");
const randomNumber = require("../../random");

class Art extends Command {
  constructor(name, description) {
    super(name, description);
    this.images = [
      "./src/commands/art/src/UPFsita.png",
      "./src/commands/art/src/UPFsita1.png",
      "./src/commands/art/src/UPFsita2.JPG",
      "./src/commands/art/src/logo.png",
      "./src/commands/art/src/logoxd.jpg",
      "./src/commands/art/src/UPFsita3.png",
    ];
  }

  on(message) {
    let random = this.images[randomNumber(0, this.images.length -1)];
    message.channel.send("fan art ^^", {
      files: [random],
    });

  }
}

module.exports = Art;
