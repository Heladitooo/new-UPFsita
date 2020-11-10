//9

const Command = require("../command");
const Discord = require("discord.js");
const gmu = require("../../getMentionsUsers");
const fs = require("fs");
const chooseColor = require("../../chooseColor");

class Pmessage extends Command {
  constructor(name, description) {
    super(name, description);
    this.channelID = "746449632196034762";
    this.file = "./src/commands/pmessage/data.json";
    this.list = [];
  }

  on(message, client) {
    let userMention = gmu(message);
    let xuser = userMention[0];

    if (xuser == undefined) {
      if (message.content == "upf!pmessage ban") {
        fs.readFile(this.file, "utf8", (err, data) => {
          if (err) {
            message.author.send("a ocurrido un error...");
            console.log(err);
          } else {
            this.list = JSON.parse(data);

            let getUser = this.list.find((data) => {
              return data.id == message.author.id;
            });

            if (getUser == undefined) {
              message.channel.send("Nadie te a enviado un mensaje anónimo...");
            } else {
              for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == getUser.latest) {
                  this.list[i].ban.push(getUser.id);
                  client.users.cache
                    .get(this.list[i].id)
                    .send(
                      `Fuiste bloqueado por ${message.author.username}, ya no le puedes mandar mensajes anónimos a ${message.author.username}, habla con los administradores si quieres tratar de quitarte el bloqueo`
                    );
                  break;
                }
              }

              fs.writeFile(
                this.file,
                JSON.stringify(this.list),
                "utf8",
                (err) => {
                  console.log(err);
                }
              );
              
              message.channel.send(
                "bloqueaste a ese usuario, no te podra mandar mas mensaje anónimos"
              );
            }
          }
        });
      } else {
        message.author.send("Menciona a quien vas a enviar el mensaje ;-;");
        message.delete();
      }
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
          if (message.channel.id == this.channelID) {
            fs.readFile(this.file, "utf8", (err, data) => {
              if (err) {
                message.author.send("a ocurrido un error...");
                console.log(err);
              } else {
                this.list = JSON.parse(data);

                let getUser = this.list.find((data) => {
                  return data.id == message.author.id;
                });

                if (getUser == undefined) {
                  this.list.push({
                    id: message.author.id,
                    ban: [],
                    latest: "",
                  });
                  getUser = this.list.find((data) => {
                    return data.id == message.author.id;
                  });
                }

                let posibleBan = getUser.ban.find((data) => {
                  return data == xuser.id;
                });

                if (posibleBan == undefined) {
                  if (xuser.id == getUser.id) {
                    message.author.send(
                      "te vas a enviar un mensaje anónimo a ti mismo?"
                    );
                  } else {
                    const embed = new Discord.MessageEmbed()

                      .setColor(chooseColor())
                      .setTitle(`:detective: mensaje anónimo:`)
                      .addField(
                        md[0].slice(1),
                        `Escribe **upf!pmessage ban** para banear al usuario que te mando el ultimo mensaje`
                      );

                    client.users.cache.get(xuser.id).send(embed);

                    message.author.send(
                      "mensaje enviado exitosamente a " +
                        xuser.username +
                        ":detective:"
                    );

                    let getXuser = this.list.find((data) => {
                      return data.id == xuser.id;
                    });

                    if (getXuser == undefined) {
                      this.list.push({
                        id: xuser.id,
                        ban: [],
                        latest: getUser.id,
                      });

                      getXuser = this.list.find((data) => {
                        return data.id == xuser.id;
                      });
                    } else {
                      getXuser.latest = getUser.id;

                      for (let i = 0; i < this.list.length; i++) {
                        if (this.list[i].id == getXuser.id) {
                          this.list[i] = getXuser;
                          break;
                        }
                      }
                    }

                    fs.writeFile(
                      this.file,
                      JSON.stringify(this.list),
                      "utf8",
                      (err) => {
                        console.log(err);
                      }
                    );
                  }
                } else {
                  message.author.send(
                    "el usuario al que intentas mandar el mensaje te bloqueo anteriormente"
                  );
                }
              }

              message.delete();
            });
          } else {
            message.author.send(
              "este comando solo funciona en el canal #epic-anonymous-message"
            );
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
