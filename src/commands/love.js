const Command = require("./command");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");
const randomNumber = require("../random");
const name = "UPFsita";


class Love extends Command {
  constructor(name, description) {
    super(name, description);
  }
  
  calculateLove(message, user, xuser){
    let random = randomNumber(0, 100);
    let mixNames = user.slice(0, Math.ceil(user.length / 2)) + xuser.slice(Math.ceil(xuser.length / 2), xuser.length);

    if (random < 20) {
      const embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle("la expectativa de amor de " + user + " con " + xuser + " es de: " + random + "%\n" + "nombre de pareja: " + mixNames)
        .setDescription("...")
        .setImage('https://media1.tenor.com/images/962ad70db722230a88ff7bef13c5ad45/tenor.gif');

      message.channel.send(embed);
    }
    else if (random > 20 && random < 40) {
      const embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle("la expectativa de amor de " + user + " con " + xuser + " es de: " + random + "%\n" + "nombre de pareja: " + mixNames)
        .setDescription("si eso, tienes un lapiz de sobra?")
        .setThumbnail('https://i.kym-cdn.com/photos/images/newsfeed/001/450/446/573.jpg');

      message.channel.send(embed);
    }
    else if (random > 40 && random < 60) {
      const embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle("la expectativa de amor de " + user + " con " + xuser + " es de: " + random + "%\n" + "nombre de pareja: " + mixNames)
        .setDescription("mejores amigos, click")
        .setThumbnail('https://pbs.twimg.com/media/BOR3RmPCUAARN9d.jpg');

      message.channel.send(embed);
    }
    else if (random > 60 && random < 80) {
      const embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle("la expectativa de amor de " + user + " con " + xuser + " es de: " + random + "%\n" + "nombre de pareja: " + mixNames)
        .setDescription("hmmm miren como se sonrojan por leer el mensaje")
        .setThumbnail('https://i.pinimg.com/originals/ef/f5/c6/eff5c612ecc97c7fcc1f6dd29aca7970.jpg');

      message.channel.send(embed);
    }
    else if (random > 80) {
      const embed = new Discord.MessageEmbed()
        .setColor(chooseColor())
        .setTitle("la expectativa de amor de " + user + " con " + xuser + " es de: " + random + "%\n" + "nombre de pareja: " + mixNames)
        .setDescription("Aceptenlo <3")
        .setThumbnail('https://i.pinimg.com/originals/4f/54/48/4f5448517022c9613d9feb832ebf7bbe.png');

      message.channel.send(embed);
    }
  }

  on(message) {
    let user = message.author.username; 
    
    let mentionUsers = [];
    
    let xuser;

    let xuser2;
    
    message.mentions.users.map((data) => {
      mentionUsers.push(data);
    })

    
    try {
      xuser = mentionUsers[0].username;
    } catch {
      xuser = false;
    }

    try {
      xuser2 = mentionUsers[1].username;
    } catch {
      xuser2 = false;
    }
    
    if (xuser == false || xuser == user){
      if (xuser == message.author.username) {
       
        const embed = new Discord.MessageEmbed()
          .setColor(chooseColor())
          .setTitle("la expectativa de amor de " + user + " es de 100% ")
          .setDescription("te amas mucho :D <3")
          .setThumbnail('https://cdn.memegenerator.es/imagenes/memes/full/22/36/22367886.jpg');

        message.channel.send(embed);

      } else {
        const embed = new Discord.MessageEmbed()
          .setColor(chooseColor())
          .setTitle("ni modo, zapato riendo ._.XD")
          .setDescription("prueba mencionando a alguien upf!love @user   o por upf!love @user @user2")
          .setImage('https://i.ytimg.com/vi/UaybCb5iUWg/hqdefault.jpg');

        message.channel.send(embed);
      }
  }else {
      if(xuser2 == false){
        this.calculateLove(message, user, xuser);
      } else {
        this.calculateLove(message, xuser, xuser2);
      }
      
  }
  }
}

module.exports = Love;
