const Command = require("./command");
const puppeteer = require("puppeteer");

const url = 'https://www.randomlists.com/spanish-words?dup=false&qty=1';

class ChangeName extends Command {
    constructor(name, description) {
        super(name, description);
    }

    on(message, string) {
        if (message.author.id === message.guild.ownerID) {
            message.channel.send("lo siento, no tengo el suficiente poder para hacer eso...");
        } else {
            if (string.length > 0) {
                if (string == "remove") {

                    message.member.setNickname(message.author.username);
                    message.channel.send("tu nombre se a restablecido :D");

                } else {
                    message.channel.send("para remover tu nombre de usuario usa upf!changename remove")
                }
            } else {

                message.channel.send(`cambiando tu nikname <@${message.author.id}>...`)
                    .then(async msg => {
                        try {
                            const browser = await puppeteer.launch();
                            const [page] = await browser.pages();

                            await page.goto(url, { waitUntil: 'networkidle0' });
                            const data = await page.evaluate(() => document.querySelector('.rand_large').textContent);

                            msg.delete();

                            message.member.setNickname(data);
                            message.channel.send(`Tu apodo a sido cambiado <@${message.author.id}> :D, recuerda que puedes quitarlo con:` + "`upf!changename remove`")
                            await browser.close();
                        } catch (err) {
                            console.error(err);
                        }
                    })


                // request(url, function (error, response, html) {
                //     if (!error && response.statusCode === 200) {
                //         let $ = cheerio.load(html);
                //         console.log($(".layout section_wide").html())
                //     }
                // })

                //message.member.setNickname(randomWords({ exactly: 5, join: ' ' }));


            }


        }

    }
}

module.exports = ChangeName;