//upf-warning
//upf userList

require("dotenv").config();

const git = require("git-rev-sync");

const Discord = require("discord.js");
const client = new Discord.Client(); //Nuevo cliente de discord

const BadWords = require("./src/badWords");
const badWords = new BadWords();

const Commads = require("./src/commands");
const commads = new Commads();

const Welcome = require("./src/welcome");
const welcome = new Welcome();

const random = require("./src/random");
const chat = require("./src/chat");

let thursdayConfirmation = false;

client.on("ready", () => {
  console.log("Hello word! " + git.tag());
  commads.init();

  client.user.setPresence({
    status: "online",
    activity: {
      name: `upf!help nwn   ${git.tag()}`,
      type: "PLAYING",
    },
  });
});

client.on("guildMemberAdd", (member) => {
  welcome.newUser(member);
});

let stop = false;
client.on("message", (message) => {
  
  let verification = badWords.findWord(message);

  if (verification != true) {
    if (commads.particion(message, client)) {
      commads.findCommand(message, client);
    }

    let dateDay = new Date().getDay();

    if (dateDay == 4) {
      if (thursdayConfirmation == false) {
        message.channel.send(`Feliz jueves <@${message.author.id}> nwn`, {
          files: ["./src/img/thursday/felizJueves.mp4"],
        });
        thursdayConfirmation = true;
      }
    } else {
      thursdayConfirmation = false;
    }

    const okChannels = [
     "732228698803142736"
    ];

    let verificateChannel = okChannels.find((data) => {
      return data == message.channel.id;
    });

    if (verificateChannel != undefined) {
      if (message.author.id != process.env.ID) {
        if (random(0, 10) == 5) {
          chat(message, message.content);
        }
      }
    }

    if (
      message.content.startsWith(`<@!${process.env.ID}>`) ||
      message.content.startsWith(">>")
    ) {
      let messageR = message.content.match(/>.+/);
      if (messageR != undefined && message.author.id != process.env.ID) {
        chat(message, messageR[0].slice(1));
      }
    }

    if (stop != true) {
      if (
        message.channel.id == "766283479012605982" &&
        message.author.id == "766274172208152588"
      ) {
        setTimeout(() => {
          chat(message, message.content);
        }, 5000);
      }
    }

    if (message.content == "b!stop") {
      stop = true;
    }

     if (message.content == "b!play") {
       stop = false;
     }
  }
});

client.login(process.env.TOKEN);
