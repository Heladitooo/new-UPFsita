const randomNumber = require("../../random");
const go = require("./go");

//mandar el mensaje con el final

function start(message, config, client, defaultState) {
  config.join = false;
  config.start = true;

  config.principalMsg.embed.setColor("#FF0000");

  config.principalMsg.msg.reactions.removeAll();

  config.principalMsg.embed.setTitle(
    "la partida se manejara por MD, sin embargo pueden hablar en el chat principal para las discusiones SOLO CUANDO ESTEN EN REUNION DE EMERGENCIA"
  );

  config.principalMsg.embed.setDescription("El juego a inicado, sobreviva");

  config.principalMsg.msg.edit(config.principalMsg.embed);

  config.players[randomNumber(0, config.players.length - 1)].murder = true;

  config.players.map((data) => {
    if (data.murder == true) {
      client.users.cache
        .get(data.userInfo.id)
        .send(`**${data.name} eres el asesino, MATALOS**`);
    } else {
      client.users.cache
        .get(data.userInfo.id)
        .send(`**${data.name} eres inocente, SOBREVIVE**`);
    }
  });

  config.time = true;
  setTimeout(() => {
    config.time = false;
    config.toKill = true;
  }, 25000);

  config.players.map(async (data) => {
    await go(message, config, client, data, defaultState);
  });
}

module.exports = start;
