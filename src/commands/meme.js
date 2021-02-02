const Command = require("./command");
const puppeteer = require("puppeteer");
const randomNumber = require("../random");



class Meme extends Command {
    constructor(name, description) {
        super(name, description);
        this.url = 'https://es.memedroid.com/'
        this.changeMessage = ``;
    }

    memedroid(message,string){
        message.channel.send(this.changeMessage)
            .then(async msg => {
                try {
                    const browser = await puppeteer.launch();
                    const [page] = await browser.pages();

                    let selectedMemes = [];

                    await page.goto(this.url, { waitUntil: 'networkidle0' });
                    const data = await page.evaluate(() => {
                        const anchors = document.querySelectorAll('.img-responsive');
                        return [].map.call(anchors, img => img.src);
                    });

                    msg.delete();

                    for(let i = 0; i < data.length-1; i++){
                        if(data[i].includes("UPLOADED")){
                            selectedMemes.push(data[i]);
                        }
                    }

                    if(parseInt(string) > 1){
                        if(parseInt(string) < selectedMemes.length){
                            for(let i = 0; i < parseInt(string); i++){
                                message.channel.send(selectedMemes[i]);
                            }
                        } else {
                            message.channel.send("solo puedo traer " + selectedMemes.length + " en esta caso");
                            for(let i = 0; i < selectedMemes.length-1; i++){
                                message.channel.send(selectedMemes[i]);
                            }
                        }
                    } else {
                        message.channel.send(selectedMemes[randomNumber(0,selectedMemes.length-1)]);
                    }
                    
                    await browser.close();
                } catch (err) {
                    console.error(err);
                }
            })
    }

    memu(message){
        message.channel.send(this.changeMessage)
        .then(async msg => {
            try {
                const browser = await puppeteer.launch();
                const [page] = await browser.pages();

                await page.goto(this.url, { waitUntil: 'networkidle0' });
                const data = await page.evaluate(() => {
                    const anchors = document.querySelectorAll('.body > .image > a > img');
                    return [].map.call(anchors, img => img.src);
                });

                msg.delete();

                message.channel.send(data[randomNumber(0,data.length-1)]);
                
                await browser.close();
            } catch (err) {
                console.error(err);
            }
        })
    }

    on(message, string) {
       
        if(parseInt(string) > 1){
            this.changeMessage = `trayendo ${string} memes mas recientes desde https://es.memedroid.com/ <@${message.author.id}>...`;
            this.memedroid(message, string);
        } 
        
        else if(string === "english"){
            this.url = "https://www.memedroid.com/";
            this.changeMessage = `bringing one of the most recent memes sincee https://memedroid.com/ <@${message.author.id}>...`;
            this.memedroid(message, string);
        } 
        else if(string === "portuguese"){
            this.url = "https://pt.memedroid.com/"
            this.changeMessage = `trazendo um dos mais novos memes desde https://pt.memedroid.com/ <@${message.author.id}>...`;
            this.memedroid(message, string);
        }
        else if(string === "french"){
            this.url = "https://fr.memedroid.com/";
            this.changeMessage = `
            apportant l'un des mèmes les plus récents depuis https://fr.memedroid.com/ <@${message.author.id}>...`;
            this.memedroid(message, string);
        }
        else if(string === "italian"){
            this.url = "https://it.memedroid.com/";
            this.changeMessage = `portando uno dei meme più recenti da allora https://it.memedroid.com/ <@${message.author.id}>...`;
            this.memedroid(message, string);
        }
        else if(string === "russian"){
            this.url = "http://www.1001mem.ru/new";
            this.changeMessage = `принося один из самых последних мемов с тех пор **(PERTURBADOR)** http://www.1001mem.ru/new <@${message.author.id}>...`
            this.memu(message,string);
        }

        else if(string === "help"){
            message.channel.send("puedes usar numeros como upf!meme 2 y te traera 2 memes o idiomas como `(russian,portuguese,french,italian,englich,russian)`")
        }

        else {
            this.url = 'https://es.memedroid.com/'
            this.changeMessage = `trayendo uno de los memes mas recientes desde https://es.memedroid.com/ <@${message.author.id}>...`;
            this.memedroid(message);
        }

        

    }
}

module.exports = Meme;
