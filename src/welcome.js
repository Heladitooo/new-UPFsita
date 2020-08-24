const Canvas = require("canvas");
const Discord = require("discord.js");

const { registerFont } = require("canvas");
registerFont("./src/fonts/Righteous-Regular.ttf", {
  family: "Righteous-Regular",
});

const CanvasTextWrapper = require("canvas-text-wrapper").CanvasTextWrapper;

class Welcome {
  constructor() {
    this.channelID = "746880978122965073";
    this.images = ["./src/img/welcome/1.png"];
  }

  applyText(canvas, text) {
    const ctx = canvas.getContext("2d");

    let fontSize = 140;

    do {
      ctx.font = `${(fontSize -= 30)}px Righteous-Regular`;
    } while (ctx.measureText(text).width > canvas.width);

    return ctx.font;
  }

  async newUser(member) {
    const channel = member.guild.channels.cache.find(
      (ch) => ch.id == this.channelID
    );

    let canvas = Canvas.createCanvas(1024, 600);
    let ctx = canvas.getContext("2d");

    let backgroud = await Canvas.loadImage(this.images[0]);
    ctx.drawImage(backgroud, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;

    ctx.fillStyle = "white";

    let textToUser = `Hola\n${member.user.username}`;

    await CanvasTextWrapper(canvas, textToUser, {
      font: this.applyText(canvas, textToUser),
      textAlign: "center",
      strokeText: true,
      verticalAlign: "top",
      allowNewLine: true,
      paddingY: canvas.height - 270,
      renderHDPI: false,
    });

    ctx.lineWidth = 2;

    await CanvasTextWrapper(canvas, "Oficialmente eres parte de la U.P.F :D", {
      font: `55px Righteous-Regular`,
      textAlign: "center",
      strokeText: true,
      verticalAlign: "bottom",
      allowNewLine: true,
      renderHDPI: false,
    });

    let avatarWidth = 290;

    ctx.beginPath();
    ctx.arc(canvas.width / 2, 158, avatarWidth - 140, 0, Math.PI * 2, false);

    ctx.lineWidth = 15;
    

    ctx.closePath();
    ctx.clip();

    let avatar = await Canvas.loadImage(
      member.user.displayAvatarURL({ format: "jpg" })
    );
  
    ctx.drawImage(
      avatar,
      canvas.width / 2 - avatarWidth / 2,
      10,
      avatarWidth,
      avatarWidth
    );

    ctx.stroke();

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "welcome.png"
    );


    channel.send(
      `Hola! me llamo <@736342162886623313>, Bienvenid@ <@${
        member.user.id
      }> a la EPIC U.P.F !, mira las <#699074519780032562> y reacciona para tener acceso al server, si quieres que tu nombre tenga color ve a <#710173429898280970> y por ultimo diviertete :D.`
    );
    channel.send(attachment);
  }
}

module.exports = Welcome;
