let Say = require("./commands/say");
let Gevaraconaguaazulada = require("./commands/gevaraconaguaazulada");
let Help = require("./commands/help");
let Gif = require("./commands/gif/gif");
let ThanksYou = require("./commands/thanksYou");
let Love = require("./commands/love");
let Answer = require("./commands/answer");
let SaveLink = require("./commands/saveLink");
let Pmessage = require("./commands/pmessage");
let Rmeme = require("./commands/rmeme");

class Commands {
  constructor() {
    this.command = {
      init: "upf!",
      list: [],
    };
  }

  init() {
    this.command.list = [
      new Say("say", "puedo hacer que yo diga algo con upf!say [tu palabra]"),
      new Gevaraconaguaazulada(
        "gevaraconaguaazulada",
        "gevaraconaguaazulada nwn upf!gevaraconaguaazulada"
      ),
      new Help("help", "te doy la lista de comandos upf!help"),
      new Gif(
        "comandos gif: ",
        "usa Gifs nwn  upf!kiss, upf!bye, upf!dance, upf!happy, upf!sad, upf!kill, upf!hug, upf!elcomandonoexiste, upf!sleep, upf!hi, upf!angry, upf!confused, upf!revive, upf!cry"
      ),
      new ThanksYou("thanksYou", ":D"),
      new Love("love", "posibilidades de amor pib@ 7w7 upf!love"),
      new Answer("answer", "te respondo si o no a tu duda :D"),
      new SaveLink(
        "saveLink",
        "upf!saveLink LINK  guarda un link, upf!saveLink delete NUMBER borra un comando , upf!saveLink update recarga,  upf!saveLink random  da un link random ^^"
      ),
      new Pmessage(
        "pmessage",
        "envia un mensaje privado o-o upf!pmessage @mention /mensaje"
      ),
      new Rmeme("rmeme", "responde con una imagen :D upf!rmeme mensaje"),
    ];
  }

  particion(message) {
    if (message.content.slice(0, 4) == this.command.init) {
      return true;
    }
  }

  findCommand(message, client) {
    let posibleCommand = message.content.slice(4).match(/\w+/);
    let commandFind = false;
    for (let i = 0; i < this.command.list.length; i++) {
      try {
        if (posibleCommand[0] == this.command.list[i].name) {
          commandFind = this.command.list[i].name;
        }
      } catch {
        commandFind = false;
      }
    }

    if (commandFind != false) {
      if (commandFind == this.command.list[0].name) {
        this.command.list[0].on(message);
      } else if (commandFind == this.command.list[1].name) {
        this.command.list[1].on(message);
      } else if (commandFind == this.command.list[2].name) {
        this.command.list[2].on(message, this.command.list);
      } else if (commandFind == this.command.list[4].name) {
        this.command.list[4].on(message);
      } else if (commandFind == this.command.list[5].name) {
        this.command.list[5].on(message);
      } else if (commandFind == this.command.list[6].name) {
        this.command.list[6].on(message);
      } else if (commandFind == this.command.list[7].name) {
        this.command.list[7].on(message, client);
      } else if (commandFind == this.command.list[8].name) {
        this.command.list[8].on(message, client);
      } else if (commandFind == this.command.list[9].name) {
        this.command.list[9].on(message, client);
      }
    } else {
      if (
        posibleCommand == "happy" ||
        posibleCommand == "kiss" ||
        posibleCommand == "kill" ||
        posibleCommand == "hug" ||
        posibleCommand == "sleep" ||
        posibleCommand == "hi" ||
        posibleCommand == "angry" ||
        posibleCommand == "sad" ||
        posibleCommand == "bye" ||
        posibleCommand == "dance" ||
        posibleCommand == "confused" ||
        posibleCommand == "revive" ||
        posibleCommand == "cry"
      ) {
        this.command.list[3].on(message, posibleCommand);
      } else {
        message.channel.send("el comando no existe UnU, intenta con: upf!help");
      }
    }
  }
}

module.exports = Commands;
