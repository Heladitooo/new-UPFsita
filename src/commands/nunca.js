const Command = require("./command");
const puppeteer = require("puppeteer");
const Discord = require("discord.js");

class Nunca extends Command {
  constructor(name, description) {
    super(name, description);
    this.url = "https://psycatgames.com/es/app/never-have-i-ever/"
  }

  on(message) {
    message.channel.send("hmmm dejame pensar...")
    .then(async msg => {
        try {
            const browser = await puppeteer.launch();
            const [page] = await browser.pages();

            await page.goto(this.url, { waitUntil: 'networkidle0' });
            await page.click('img[alt="Mixto Icon"]');

            const data = await page.evaluate(() => {
              return document.querySelector('span[data-text]').innerText;
            });

            msg.delete();
            
            const embed = new Discord.MessageEmbed()
              .setColor("#F8F8FF")
              .setDescription(data);
              
            message.channel.send(embed)

            await browser.close();
        } catch (err) {
            console.error(err);
        }
    })
  }
}

module.exports = Nunca;
