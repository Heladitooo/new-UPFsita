const Discord = require("discord.js");
const client = new Discord.Client(); //Nuevo cliente de discord

const BadWords = require("./src/badWords");
const badWords = new BadWords();

const Commads = require("./src/commands");
const commads = new Commads();

const Welcome = require("./src/welcome");
const welcome = new Welcome();

client.on("ready", () => {
  console.log("Hello word!");
  commads.init();

  client.user.setPresence({
    status: "online",
    activity: {
      name: "upf!help :3   v1.5.8",
      type: "PLAYING",
    },
  });
});

client.on("message", (message) => {
  if (commads.particion(message, client)) {
    commads.findCommand(message, client);
  }

  badWords.findWord(message);
});

//client.on("guildMemberAdd", (member) => {//
//  welcome.newUser(member);
//})

client.login("");
