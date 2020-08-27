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
let Status = require("./commands/status");
let Choose = require("./commands/choose");

class Commands {
  constructor() {
    this.command = {
      init: "upf!",
      list: [],
    };
    this.responseLimit = {
      loop: 0,
      limit: false,
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
      new Status("status", "como es mi estado"),
      new Choose(
        "choose",
        "elijo entre las opciones que me das: / opción 1 / opción 2"
      ),
    ];
  }

  particion(message) {
    if (message.content.slice(0, 4) == this.command.init) {
      return true;
    }
  }

  async findCommand(message, client) {
    setInterval(() => {
      this.responseLimit.loop = 0;
      this.responseLimit.limit = false;
    }, 120000);

    if (this.responseLimit.limit != true) {
      await this.responseLimit.loop++;

      if (this.responseLimit.loop >= 5) {
        this.responseLimit.limit = true;
        message.channel.send("me quemo, porfavor espera 2 minutos...");
      }

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
        //message.content with no prefix
        let commandFindString = message.content.slice(
          commandFind.length + this.command.init.length + 1
        );

        switch (commandFind) {
          case this.command.list[0].name:
            //say
            this.command.list[0].on(message, commandFindString);
            break;
          case this.command.list[1].name:
            //gevaraconaguaazulada
            this.command.list[1].on(message);
            break;
          case this.command.list[2].name:
            //help
            this.command.list[2].on(message, this.command.list);
            break;
          case this.command.list[4].name:
            //thanksYou
            this.command.list[4].on(message);
            break;
          case this.command.list[5].name:
            //love
            this.command.list[5].on(message);
            break;
          case this.command.list[6].name:
            //answer
            this.command.list[6].on(message, commandFindString);
            break;
          case this.command.list[7].name:
            //saveLink
            this.command.list[7].on(message, commandFindString, client);
            break;
          case this.command.list[8].name:
            //pmessage
            this.command.list[8].on(message, commandFindString, client);
            break;
          case this.command.list[9].name:
            //rmeme
            this.command.list[9].on(message, commandFindString);
            break;
          case this.command.list[10].name:
            //status
            this.command.list[10].on(message);
            break;
          case this.command.list[11].name:
            //status
            this.command.list[11].on(message);
            break;
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
          message.channel.send(
            "el comando no existe UnU, intenta con: upf!help"
          );
        }
      }
    } else {
      message.delete();
      message.channel.send("espera 2 minutos...");
    }
  }
}

module.exports = Commands;
