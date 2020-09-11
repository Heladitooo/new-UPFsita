
let usersRoom = require("./usersRoom");
let toReport = true;

function report(message, config, client, defaultState, go) {
  let verification = config.players.find((data) => {
    return data.userInfo.id == message.author.id;
  });

  function update() {
    config.players.map((data) => {
      if (data.live == true) {
        data.room = {
          name: "🟧sala principal🟧",
          color: "🟧",
          img: "./src/commands/murder/src/maps/conservatorio/salaPrincipal.png",
          posible: [
            {
              name: "🟨pasillo 1🟨",
              color: "🟨",
            },
            {
              name: "🟩pasillo 2🟩",
              color: "🟩",
            },
          ],
        };
      }
    });

    let verification = config.players.find((data) => {
      return data.userInfo.id == message.author.id;
    });

    config.report = true;

    config.players.map((data) => {
      client.users.cache
        .get(data.userInfo.id)
        .send(
          `**REUNION DE EMERGENCIA**, tienen 1 minuto para debatir en el canal de **murder** y votar por quien es`
        );
    });

    usersRoom(config, verification, client);

    setTimeout(() => {
      toReport = false;
      config.report = false;

      config.players.map((data) => {
        client.users.cache
          .get(data.userInfo.id)
          .send(`**Se acabo el tiempo de voto**`);
      });

      let max = {
        name: "",
        max: 0,
      };

      config.players.map((data) => {
        if (data.votes > max.max) {
          max.name = data.name;
          max.max = data.votes;
        }
      });

      let coincidence = config.players.find((data) => {
        if (data.name != max.name) {
          if (data.votes == max.votes) {
            return data;
          }
        }
      });

      if (max.max > 0) {
        if (coincidence == undefined) {
          for (let i = 0; i < config.players.length; i++) {
            if (config.players[i].name == max.name) {
              config.players[i].live = false;

              if (config.players[i].murder == true) {
                config.players.map((data) => {
                  client.users.cache
                    .get(data.userInfo.id)
                    .send(
                      `**el ${config.players[i].name} era el asesino, ganaron**`
                    );
                });

                defaultState(config);
              } else {
                let lives = 0;

                config.players.map((data) => {
                  if (data.live == true) {
                    lives++;
                  }

                  client.users.cache
                    .get(data.userInfo.id)
                    .send(`**el ${config.players[i].name} no era el asesino**`);
                  
                    go(message, config, client, data, defaultState);
                });

                if (lives == 2) {
                  config.players.map((data) => {
                    let murder = config.players.find((data) => {
                      return data.murder == true;
                    });
                    client.users.cache
                      .get(data.userInfo.id)
                      .send(
                        `** el ${murder.name} era el asesino, y los mato, el gano.**`
                      );
                  });

                  defaultState(config);
                } else {
                  for (let i = 0; i < config.players.length; i++) {
                    config.players[i].vote = "";
                    config.players[i].votes = 0;
                  }
                }
              }
              break;
            }
          }
        } else {
          config.players.map((data) => {
            client.users.cache
              .get(data.userInfo.id)
              .send(`**Empate, no se pudo sacar a alguien.**`);

              go(message, config, client, data, defaultState);
          });

          for (let i = 0; i < config.players.length; i++) {
            config.players[i].vote = "";
            config.players[i].votes = 0;
          }
        }
      } else {
        config.players.map((data) => {
          client.users.cache
            .get(data.userInfo.id)
            .send(`**No hubieron suficientes votos para sacar a alguien.**`);
          
            go(message, config, client, data, defaultState);
        });

        for (let i = 0; i < config.players.length; i++) {
          config.players[i].vote = "";
          config.players[i].votes = 0;
        }
      }

      setTimeout(() => {
        toReport = true;
      }, 60000);
    }, 84000);
  }

  if (verification.live == true) {
    if (verification.room.name == "🟧sala principal🟧") {
      if (toReport == true) {
        update();
      } else {
        client.users.cache
          .get(message.author.id)
          .send(`Espera 1 minuto para volver a reportar`);
      }
    } else {
      client.users.cache
        .get(message.author.id)
        .send(`Tienes que estar en la sala principal para reportar`);

    }
  } else {
    client.users.cache
      .get(message.author.id)
      .send(`Estas muerto, no puedes reportar, no reveles información...`);
  }
}

module.exports = report;
