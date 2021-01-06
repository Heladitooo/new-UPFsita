const Command = require("./command");

class Gift extends Command {
  constructor(name, description) {
    super(name, description);
    this.users = []
    this.gifts = [
        "https://puffitoscp.files.wordpress.com/2012/05/2012-05-27_160347.png",
        "https://cdn.discordapp.com/attachments/618601904397746187/791694677861597194/desconocido.jpegs",
        "https://cdn.discordapp.com/attachments/618601904397746187/791694287691055114/desconocido.jpeg",
        "https://media.ambito.com/adjuntos/239/imagenes/037/240/0037240231.jpg?0000-00-00-00-00-00",
        "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/btg/corazon-humano-real.png",
        "https://media.discordapp.net/attachments/619661084239986688/791693479096221726/IMG-20201204-WA0007.jpg?width=505&height=403",
        "https://i.pinimg.com/736x/a1/05/d1/a105d1b2cc96a9f8cf44bcba575cb75f.jpg",
        "https://cdn.mientrastantoenmexico.mx/wp-content/uploads/2018/09/Vive-100-1024x638.jpg",
        "https://cdn.discordapp.com/attachments/619661084239986688/791692613114920960/IMG-20201202-WA0001.jpg",
        "https://cdn.discordapp.com/attachments/619661084239986688/791691418062028830/20201218_235302.jpg",
        "https://cdn.discordapp.com/attachments/619661084239986688/791690936924504064/Screenshot_20201224-103654.png",
        "https://pm1.narvii.com/6220/cf080922d11d6048d9e0d2da17aa182c3c926d25_hq.jpg",
        "https://cdn.discordapp.com/attachments/618601904397746187/791696174620737556/unknown.png",
        "https://images-na.ssl-images-amazon.com/images/I/81%2BnTOqM%2ByL._AC_SY355_.jpg",
        "https://www.latinflores.com/imagenes/productos/demega0009_L.jpg",
        "https://mapamundi.online/wp-content/uploads/2018/11/argentina-mapamundi.png",
    ]
  }

  on(message) {
    let gifted = false;
    this.users.map(data => {
        if(data == message.author.id){
            gifted = true;
        } else {
            gifted = false;
        }
    }) 
    
    if(this.gifts.length === 0){
        message.channel.send("lo sieeento, ya no tengo mas regalos :(");
    } else {
        if(gifted == true){
            console.log(this.gifts[this.gifts.length-1])
            message.channel.send(`***otro regalo?** buenooo <@${message.author.id}>, feliz navidad :D`, {
                files: [this.gifts[this.gifts.length-1]]
            });
            this.users.push(message.author.id);
            this.gifts.pop();
        } else {
            console.log(this.gifts[this.gifts.length-1])
            message.channel.send(`para ti <@${message.author.id}>, feliz navidad :D`, {
                files: [this.gifts[this.gifts.length-1]]
            });
            this.users.push(message.author.id);
            this.gifts.pop();
        }
    }
  }
}

module.exports = Gift;
