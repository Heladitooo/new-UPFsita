//10

const Command = require("./command");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");
const Canvas = require("canvas");
const randomNumber = require("../random");
const gmu = require("../getMentionsUsers");
const fs = require("fs");

const { registerFont } = require("canvas");
registerFont("./src/fonts/Righteous-Regular.ttf", {
  family: "Righteous-Regular",
});
const CanvasTextWrapper = require("canvas-text-wrapper").CanvasTextWrapper;

class Rmeme extends Command {
  constructor(name, description) {
    super(name, description);

    this.file = "./src/rmeme/rmeme.json";
    this.admiID = "699392792346230785";
    this.epicID = "718130983378878557";

    fs.readFile(this.file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.images = JSON.parse(data);
      }
    });
  }

  read() {
    fs.readFile(this.file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        this.images = JSON.parse(data);
      }
    });
  }

  append(toJSON) {
    this.read();
    this.images.push(toJSON);

    fs.writeFile(
      this.file,
      JSON.stringify(this.images),
      "utf8",
      (err, data) => {
        if (err) {
          console.log(err);
        }
      }
    );
  }

  async on(message, string) {
    if (string.length > 0) {
      if (string.slice(0, 5) != "/save") {
        let userMention = gmu(message);
        let xuser = userMention[0];

        if (xuser == undefined) {
          await message.reply("^^ espera...").then(async (msg) => {
            let canvas = Canvas.createCanvas(400, 400);
            let ctx = canvas.getContext("2d");
            const self = this;

            let background = await Canvas.loadImage(
              self.images[randomNumber(0, self.images.length - 1)]
            );
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            ctx.fillStyle = chooseColor();
            ctx.strokeStyle = "black";

            ctx.lineWidth = 2;

            await CanvasTextWrapper(canvas, string, {
              strokeText: true,
              font: `90px Righteous-Regular`,
              textAlign: "center",
              verticalAlign: "top",
              paddingY: 10,
              sizeToFill: true,
              maxFontSizeToFill: 50,
              renderHDPI: false,
            });

            msg.delete();

            const attachment = new Discord.MessageAttachment(
              canvas.toBuffer(),
              "rmeme.png"
            );
            message.channel.send(attachment);
          });
        } else {
          message.channel.send("intenta no mencionar a alguien.");
        }
      } else {
        let link = message.content.match(
          /(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
        );

        try {
          link = link[0];
        } catch {
          link = false;
        }

        if (link == false) {
          message.channel.send("tienes que guardar una imagen.");
        } else {
          if (
            message.member.roles.cache.some((r) => r.id === this.admiID) ||
            message.member.roles.cache.some((r) => r.id === this.epicID)
          ) {
            this.append(link);
            this.read();

            message.channel.send("Guardado :D. ");
          } else {
            message.channel.send("no eres admi 7-7 ni MEGA SUPER EPIC MEMBER.");
          }
        }
      }
    } else {
      message.channel.send("no puedo con un mensaje en blanco ;-;");
    }
  }
}

module.exports = Rmeme;
