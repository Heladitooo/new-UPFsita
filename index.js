const keepAlive = require('./server.js');
const Monitor = require('ping-monitor');

const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client(); //Nuevo cliente de discord
    
const BadWords = require("./src/badWords");
const badWords = new BadWords();

const Commads = require("./src/commands");
const commads = new Commads();
require("dotenv").config();

keepAlive();
const monitor = new Monitor({
    website: 'https://Second.heladitooo.repl.run',
    title: 'Second',
    interval: 15 // minutes
});
 
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));


client.on("ready", () => {
    console.log("Hello word!");
    commads.init();
  
    client.user.setPresence({
        status: "online",
        activity: {
            name: "upf!help :3   v1.5.0",
            type: "PLAYING"
        }
    });
});

client.on("message", (message) => {
  
    if (commads.particion(message, client)) {
      commads.findCommand(message, client);
    }

    badWords.findWord(message,(data) => {
        if (data && message.author != "736342162886623313"){
            message.author.send("https://pbs.twimg.com/media/EZiN_NbX0AANLZG.jpg \n");
            message.author.send("escribiste: " + message.content +". **usa buen vocabulario 7-7, tu mensaje fue borrado.**");

            fs.appendFile("./src/badWords/badWords.txt", `${message.author.username}: ${message.content}   ${message.channel.name}  ${new Date()} \n\n` , 
                function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("\n\n" + message.author.username + " " + message.content + " " + new Date());
                })
    
            message.delete();

        }
    })
    
});

client.login(process.env.TOKEN);
