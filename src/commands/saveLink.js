const Command = require("./command");
const fs = require("fs");
const randomNumber = require("../random");

class SaveLink extends Command {
  constructor(name, description) {
    super(name, description);

    this.file = "./src/saveLink/saveLink.json";
    this.channelID = "743289894721552445";
    this.admiID = "699392792346230785";
    this.epicID = "718130983378878557";

    fs.readFile(this.file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.list = JSON.parse(data);
      }
    });
  }

  read() {
    fs.readFile(this.file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.list = JSON.parse(data);
      }
    });
  }

  update(message) {
    const self = this;

    message.channel.messages.fetch().then(
      function (list) {
        message.channel.bulkDelete(list);
      },
      function (err) {
        message.channel.send("no pude limpiar el canal.");
      }
    );

    for (let i = 0; i < self.list.length; i++) {
      message.channel.send(`👇 ${self.list[i].id} 👇`);
      message.channel.send(self.list[i].link);
    }
  }

  delete(message, toDelete) {
    this.read();

    let index = this.list.findIndex((data) => {
      return data.id == toDelete;
    });

    if (index != -1) {
      message.channel.send("Borrado.");

      this.list.splice(index, 1);
      fs.writeFile(
        this.file,
        JSON.stringify(this.list),
        "utf8",
        (err, data) => {
          if (err) {
            console.log(err);
          }
        }
      );

      this.read();

      setTimeout(() => {
        this.update(message);
      }, 4000);
    } else {
      message.channel.send("no encontre el ID para borrar ;-;");
    }
  }

  append(toJSON) {
    this.read();

    let disponibleID = 0;

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].id == "0") {
        disponibleID += this.list[i].id + 1;
      } else {
        disponibleID = disponibleID + this.list[i].id + 2;
      }
    }

    let findID = this.list.find((data) => {
      return data.id == disponibleID;
    });

    if (findID == undefined) {
      this.list.push({
        id: disponibleID,
        link: toJSON,
      });

      fs.writeFile(
        this.file,
        JSON.stringify(this.list),
        "utf8",
        (err, data) => {
          if (err) {
            console.log(err);
          }
        }
      );
    } else {
      return false;
    }
  }

  on(message, client) {
    this.read();
    const self = this;
    let random = randomNumber(0, self.list.length - 1);

    let link = message.content.match(
      /(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
    );

    try {
      link = link[0];
    } catch {
      link = false;
    }

    if (link == false) {
      this.read();

      if (message.content.slice(13) == "update") {
        if (message.member.roles.cache.some((r) => r.id === this.admiID)) {
          this.read();

          if (message.channel.id == this.channelID) {
            this.update(message);
          } else {
            message.channel.send("no puedo hacerlo en este canal.");
          }
        } else {
          message.channel.send("no eres admi 7-7.");
        }
      } else if (message.content.slice(13, 19) == "delete") {
        if (message.channel.id == this.channelID) {
          if (message.member.roles.cache.some((r) => r.id === this.admiID)) {
            this.delete(message, message.content.slice(20));
          } else {
            message.channel.send("no eres admi 7-7.");
          }
        } else {
          message.channel.send("no puedo hacerlo en este canal.");
        }
      } else if (message.content.slice(13) == "random") {
        message.channel.send("tu link random ;D");
        message.channel.send(self.list[random].link);
      } else {
        message.channel.send("Porfavor ingresa un link ;-; upf!saveLink link");
      }
    } else {
      if (
        message.member.roles.cache.some((r) => r.id === this.admiID) ||
        message.member.roles.cache.some((r) => r.id === this.epicID)
      ) {
        let possibleAppend = this.append(link);

        if (possibleAppend == false) {
          message.channel.send("ocurrio un problema ;-; ");
        } else {
          this.read();

          message.channel.send("Guardado :D. ");

          const channel = client.channels.cache.find(
            (channel) => channel.id === this.channelID
          );

          channel.send(`👇 ${self.list[self.list.length - 1].id} 👇`);
          channel.send(self.list[self.list.length - 1].link);
        }
      } else {
        message.channel.send("no eres admi 7-7 ni MEGA SUPER EPIC MEMBER.");
      }
    }
  }
}

module.exports = SaveLink;
