//11

const Command = require("./command");
const pm2 = require("pm2");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");

class Status extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message) {
    pm2.describe("UPFsita", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const embed = new Discord.MessageEmbed().setColor(chooseColor());

        if (data[0].monit.cpu <= 20) {
          embed.setTitle("toy fresquita 😄");
        } else if (data[0].monit.cpu > 20 && data[0].monit.cpu < 80) {
          embed.setTitle("temperatura ambiente 😎");
        } else if (data[0].monit.cpu >= 80) {
          embed.setTitle("🥵 estoy caliente 🥵");
        }

        embed.setDescription(
          `memoria: ${(data[0].monit.memory / (1024 * 1024)).toFixed(2)} MB    cpu: ${
            data[0].monit.cpu
          }%`
        );

        message.channel.send(embed);
      }
    });
  }
}

module.exports = Status;
