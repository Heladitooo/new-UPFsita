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

    if (message.content.startsWith(`<@!${process.env.ID}>`)) {
      chat(message);
    }
  }
});

client.on("guildMemberAdd", (member) => {
  welcome.newUser(member);
});

client.login(process.env.TOKEN);
