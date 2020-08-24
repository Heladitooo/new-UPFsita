//upf-warning
//upf-sorry
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
  if (commads.particion(message, client)) {
    commads.findCommand(message, client);
  }

  badWords.findWord(message);
  console.log();
});

client.on("guildMemberAdd", (member) => {
  welcome.newUser(member);
});

client.login(process.env.TOKEN);
