let usersRoom = require("./usersRoom");
const Discord = require("discord.js");

function kill(message, String, config, client, defaultState) {
  let verification = config.players.find((data) => {
    return data.userInfo.id == message.author.id;
  });

  let person = String.slice(5);

  function update(victim) {
    let lives = 0;

    config.players.map((data) => {
      if (data.live == true) {
        lives++;
      }
    });

    for (let i = 0; i < config.players.length; i++) {
      if (config.players[i].userInfo.id == victim.userInfo.id) {
        config.players[i].live = false;
        client.users.cache
          .get(config.players[i].userInfo.id)
          .send(
            `**TE MATARON, ahora estas muerto, los muertos no revelan información, no arruines el juego unu.**`
          );
        break;
      }
    }

    if (lives == 3) {

      let embed = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle(
          `el ${verification.name} era el asesino, y los mato, el gano.`
        );
        
      config.principalMsg.msg.edit(embed);

      config.players.map((data) => {
        client.users.cache
          .get(data.userInfo.id)
          .send(
            `** el ${verification.name} era el asesino, y los mato, el gano.**`
          );
      });

      defaultState(config);
    
    } else {
      usersRoom(config, verification, client);
    }
  }

  if (verification.murder == false) {
    client.users.cache
      .get(message.author.id)
      .send("no eres asesino, eres inocente, no los puedes matar...");
  } else {
    if (config.toKill == false) {
      client.users.cache.get(message.author.id).send("espera 25 segundos.");
      if (config.time == false) {
        config.time = true;
        setTimeout(() => {
          config.time = false;
          config.toKill = true;
        }, 25000);
      }
    } else {
      if (person.length > 0) {
        let findV = config.players.find((data) => {
          if (data.name != verification.name) {
            return data.name == person;
          }
        });

        if (findV != undefined) {
          if (findV.live == true) {
            if (findV.room.name == verification.room.name) {
              config.toKill = false;
              if (config.time == false) {
                config.time = true;
                setTimeout(() => {
                  config.time = false;  
                  config.toKill = true;
                }, 25000);
              }
              update(findV);
              client.users.cache
                .get(message.author.id)
                .send(`**mataste al ${findV.name}**`);
            } else {
              client.users.cache
                .get(message.author.id)
                .send(`no lo puedes matar, no estan en la misma sala.`);
            }
          } else {
            client.users.cache
              .get(message.author.id)
              .send(
                `el ${findV.name} ya esta muerto, no lo puedes volver a matar`
              );
          }
        } else {
          client.users.cache
            .get(message.author.id)
            .send("tu victima no existe, escribe el nombre de un jugador.");
        }
      } else {
        client.users.cache
          .get(message.author.id)
          .send("intenta mencionar a quien vas a matat upf!kill NOMBRE.");
      }
    }
  }
}

module.exports = kill;
