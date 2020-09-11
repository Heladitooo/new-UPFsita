const Discord = require("discord.js");
const chooseColor = require("../../chooseColor");

function map(config, user) {
  
  if (user.live == true) {
    let posible = "";
    let lives = "";
 
    config.players.map((data) => {
      if (data.live == true) {
        lives = `${lives}     -     ${data.name}`;
      }
    });

    user.room.posible.map((data) => {
      posible = `${posible}     -     ${data.name}`;
    });

    let attachment = new Discord.MessageAttachment(user.room.img, "room.png");

    const embed = new Discord.MessageEmbed()
      .setColor(chooseColor())
      .attachFiles(attachment)
      .setTitle(user.name)
      .addFields(
        {
          name: "Vivos:",
          value: lives,
        },
        {
          name: "Estas en:",
          value: user.room.name,
        },
        {
          name: "Puedes ir a:",
          value: posible,
        }
      )
      .setImage("attachment://room.png");

    user.msg.embed = embed;
  }
}

module.exports = map;
