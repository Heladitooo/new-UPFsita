//12

//diseñar portada para .setThumbail

require("dotenv").config();
const Command = require("../command");
const Discord = require("discord.js");
const chooseColor = require("../../chooseColor");
const join = require("./join");
const start = require("./start");
const kill = require("./kill");
const report = require("./report");
const vote = require("./vote");

class Murder extends Command {
  constructor(name, description) {
    super(name, description);
    this.config = {
      colors: [],
      principalMsg: {
        msg: [],
        embed: [],
      },

      initStart: false,
      join: false,
      toKill: false,
      time: false,
      report: false,
      players: [],
    }
    this.defaultState(this.config);
  }

  defaultState(config) {
      config.colors = [
        "azul",
        "rosa",
        "verde",
        "morado",
        "rojo",
        "amarillo",
        "naranja",
        "cafe",
        "negro",
        "blanco",
      ];

      config.principalMsg= {
        msg: [],
        embed: [],
      };

      config.initStart= false;
      config.join= false;
      config.toKill= false;
      config.time= false;
      config.report= false;
      config.players = [];
  }

  help(message) {
    const embed = new Discord.MessageEmbed()
      .setColor(chooseColor())
      .setTitle("Lista de acciones MURDER")
      .setThumbnail(
        "https://i1.wp.com/cibelae.net/wp-content/uploads/2020/05/Coljuegos.jpg?resize=600%2C400&ssl=1"
      )
      .addFields(
        {
          name: "Descripción:",
          value:
            "Uno de los jugadores es un asesino y los intentara matar, descubran quien es. ",
        },
        {
          name: "help",
          value: "```Listas las acciones que puedes hacer upf!murder help```",
        },
        {
          name: "start",
          value: "```Inicias un nuevo juego upf!murder start```",
        },
        {
          name: "kill",
          value:
            "```si eres el asesino mata a alguien upf!murder kill NOMBRE```",
        },
        {
          name: "vote",
          value:
            "```vota por alguien en una reunión de emergencia upf!murder vote NOMBRE```",
        }
      );

    message.channel.send(embed);
  }

  async on(message, string, client) {
    let self = this;

    function verificate() {
      let verification = self.config.players.find((data) => {
        return data.userInfo.id == message.author.id;
      });

      if (verification == undefined) {
        return false;
      } else {
        return true;
      }
    }

    let confirm = verificate();

    if (string == "start") {
      if (this.config.initStart == false) {
        //Retorna un array y verifica si se reacciono con ese emoji
        const filter = (reaction, user) => {
          return ["✅"].includes(reaction.emoji.name);
        };

        const embed = new Discord.MessageEmbed()
          .setColor(chooseColor())
          .setTitle("nuevo juego iniciado :0, tienen 2 minutos para entrar")
          .setDescription("reacciona con ✅ para entrar");

        let msg = await message.channel.send(embed);
        await msg.react("✅");

        this.config.join = true;
        this.config.initStart = true;
        this.config.start = false;
        this.config.principalMsg.msg = msg;
        this.config.principalMsg.embed = embed;

        if (message.author.id != process.env.ID) {
          join(message, this.config, message.author);
        }

        let collector = msg.createReactionCollector(filter, { idle: 60000 });
        collector.on("collect", async (reaction, user) => {
          if (user.id != process.env.ID) {
            if (reaction.emoji.name == "✅") {
              join(message, this.config, user);
            }
          }
        });

        setTimeout(() => {
          if (this.config.players.length >= 4) {
            start(message, this.config, client, this.defaultState);
          } else {
            this.config.principalMsg.msg.reactions.removeAll();
            this.config.principalMsg.msg.edit(
              new Discord.MessageEmbed()
                .setColor("#000000")
                .setTitle(
                  "No hay suficientes jugadores(4) UnU, el juego no podrá iniciar..."
                )
            );
            message.channel.send(
              "No hay suficientes jugadores(4) UnU, el juego no podrá iniciar, creen otra partida..."
            );
            this.defaultState(this.config);
          }
        }, "120000");
      } else {
        if (this.config.start == false) {
          message.channel.send(
            "ya hay una partida que podria iniciar, entra :o"
          );
        } else {
          message.channel.send(
            "ya hay una partida en curso, espera a que acabe..."
          );
        }
      }
    }  else if (string == "help") {
      this.help(message);
    } else if (string.slice(0, 4) == "kill") {
      if (
        this.config.initStart == false ||
        this.config.report == true ||
        confirm == false
      ) {
        if (this.config.initStart == false) {
          message.channel.send("no se a iniciado ningun juego");
        } else if (this.config.report == true) {
          message.channel.send("hay una reunión en curso");
        } else {
          message.channel.send("no estas dentro del juego...");
        }
      } else {
        kill(message, string, this.config, client, this.defaultState);
      }
    }
     else if (string.slice(0, 4) == "vote") {
      if (
        this.config.initStart == false ||
        this.config.report == false ||
        confirm == false
      ) {
        if (this.config.initStart == false) {
          message.channel.send("no se a iniciado ningun juego");
        } else if (this.config.report == false) {
          message.channel.send("no hay una reunión...");
        } else {
          message.channel.send("no estas dentro del juego...");
        }
      } else {
        vote(message, string, this.config, client);
      }
    } else {
      message.channel.send("intenta con upf!murder help");
    }
  }
}

module.exports = Murder;
