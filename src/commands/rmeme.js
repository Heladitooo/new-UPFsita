const Command = require("./command");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");
const Canvas = require("canvas");
const randomNumber = require("../random");
const gmu = require("../getMentionsUsers");

const { registerFont } = require('canvas');
registerFont('./src/fonts/Righteous-Regular.ttf', { family: 'Righteous-Regular' });

class Rmeme extends Command {
  constructor(name, description) {
    super(name, description);
    this.images = [
      "./src/img/rmeme/0.jpeg",
      "./src/img/rmeme/1.png",
      "./src/img/rmeme/2.png",
      "./src/img/rmeme/3.png",
      "./src/img/rmeme/4.png",
      "./src/img/rmeme/5.png",
      "./src/img/rmeme/6.png",
      "./src/img/rmeme/7.png",
      "./src/img/rmeme/8.png",
      "./src/img/rmeme/9.png",
      "./src/img/rmeme/10.png",
      "./src/img/rmeme/11.png",
      "./src/img/rmeme/12.png",
      "./src/img/rmeme/13.png",
      "./src/img/rmeme/14.png",
      "./src/img/rmeme/15.png",
      "./src/img/rmeme/16.png",
      "./src/img/rmeme/17.png",
      "./src/img/rmeme/18.png",
      "./src/img/rmeme/19.png",
      "./src/img/rmeme/20.png",
      "./src/img/rmeme/21.jpg",
      "./src/img/rmeme/22.png",
    ]
  }

  autoWrap(text,width, height){
    let newText = "";
    let spaceWidth = 0;
    let spaceHeight = 0;
    for(let i = 0; i < text.length; i++){
      if(spaceWidth + 783  >= width-2)
      {
        spaceWidth = 0;
        spaceHeight+=2 *2;
        newText = newText + "\n" + text[i];
      } else {
        spaceWidth++;
        newText = newText + text[i];
      }
    }

    if(spaceHeight >= parseInt(height / spaceHeight)){
      return false;
    } else {
      return newText;
    }
    
  }

  async on(message, client) {
    let canvas = Canvas.createCanvas(800,800);
    let ctx = canvas.getContext("2d");
    const self = this;
    

    if(message.content.slice(10).length > 0){
      
      let userMention = gmu(message);
      let xuser = userMention[0];

      

      let background = await Canvas.loadImage(self.images[randomNumber(0,self.images.length-1)]);
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
      ctx.strokeStyle = chooseColor();
      ctx.lineWidth = 20;
      ctx.strokeRect(0, 0, canvas.width,canvas.height);

      ctx.fillStyle = chooseColor();
      ctx.strokeStyle = "black";
  
      let toSend = this.autoWrap(message.content.slice(10), canvas.width, canvas.height);

      if(toSend == false){
        message.channel.send("el mensaje es muy largo, lo siento unu.")
      } else {
        if(xuser == undefined){
          ctx.lineWidth = 4;
          ctx.font = `90px Righteous-Regular`;

          ctx.fillText(toSend, 42, 100);
          ctx.strokeText(toSend, 42, 100);
      
          const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'rmeme.png');
          message.channel.send(attachment);
        } else {
          console.log(xuser);
          message.channel.send("intenta no mencionar a alguien");
        }
       
      }
    } else {
      message.channel.send("no puedo con un mensaje en blanco ;-;");
    }
    
	  
  }
}

module.exports = Rmeme;