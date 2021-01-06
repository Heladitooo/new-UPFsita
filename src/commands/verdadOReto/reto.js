const Command = require("../command");
const Discord = require("discord.js");
const request = require('request');
const cheerio = require('cheerio');
const translate = require("@vitalets/google-translate-api");
const url = 'https://fungenerators.com/random/truth-or-dare?option=dare'; 

class Reto extends Command {
  constructor(name, description) {
    super(name, description);
  }

  on(message) {
    request(url,function(error,response,html){
        if(!error && response.statusCode === 200){
            let $ = cheerio.load(html);
            
            translate($("h2").text(), {to: "es"}).then(data => {
                const embed = new Discord.MessageEmbed()
                    .setColor("#FF0000")
                    .setTitle(`${message.author.username} te reto a:`)
                    .addField(data.text, "no olvides enviarnos evidencia!");
                message.channel.send(embed)
            })
            
            
        }
    })    
  }
}

module.exports = Reto;
