const map = require("./map");
const report = require("./report");

//traer usersRoom.js
const rooms = [
  {
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
  },
  {
    name: "🟩pasillo 2🟩",
    color: "🟩",
    img: "./src/commands/murder/src/maps/conservatorio/pasillo2.png",
    posible: [
      {
        name: "🟧sala principal🟧",
        color: "🟧",
      },
      {
        name: "🟦sala de estudio🟦",
        color: "🟦",
      },
    ],
  },
  {
    name: "🟦sala de estudio🟦",
    color: "🟦",
    img: "./src/commands/murder/src/maps/conservatorio/salaDeEstudio.png",
    posible: [{ name: "🟩pasillo 2🟩", color: "🟩" }],
  },
  {
    name: "🟨pasillo 1🟨",
    color: "🟨",
    img: "./src/commands/murder/src/maps/conservatorio/pasillo1.png",
    posible: [
      {
        name: "🟧sala principal🟧",
        color: "🟧",
      },
      {
        name: "🟪observatorio🟪",
        color: "🟪",
      },
      {
        name: "🟫sotano🟫",
        color: "🟫",
      },
      {
        name: "⬛baños⬛",
        color: "⬛",
      },
      {
        name: "⬜central⬜",
        color: "⬜",
      },
    ],
  },
  {
    name: "🟪observatorio🟪",
    color: "🟪",
    img: "./src/commands/murder/src/maps/conservatorio/observatorio.png",
    posible: [
      {
        name: "🟨pasillo 1🟨",
        color: "🟨",
      },
    ],
  },
  {
    name: "⬜central⬜",
    color: "⬜",
    img: "./src/commands/murder/src/maps/conservatorio/central.png",
    posible: [
      {
        name: "🟨pasillo 1🟨",
        color: "🟨",
      },
    ],
  },
  {
    name: "🟫sotano🟫",
    color: "🟫",
    img: "./src/commands/murder/src/maps/conservatorio/sotano.png",
    posible: [
      {
        name: "🟨pasillo 1🟨",
        color: "🟨",
      },
    ],
  },
  {
    name: "⬛baños⬛",
    color: "⬛",
    img: "./src/commands/murder/src/maps/conservatorio/banos.png",
    posible: [
      {
        name: "🟨pasillo 1🟨",
        color: "🟨",
      },
    ],
  },
];

async function go(message, config, client, user, defaultState) {
  function showPlayers(out) {
    let usersWithMe = "";

    if (out == true) {
      config.players.map((data) => {
        if (
          data.room.name == user.room.name &&
          data.userInfo.id != user.userInfo.id
        ) {
          if (data.live == true) {
            usersWithMe = `${usersWithMe} - ${data.name}`;
          } else {
            usersWithMe = `${usersWithMe} - **cadáver del ${data.name}**`;
          }
        }
      });

      config.players.map((data) => {
        if (
          data.room.name == user.room.name &&
          data.userInfo.id != user.userInfo.id
        ) {
          client.users.cache
            .get(data.userInfo.id)
            .send(
              `**en la sala:** ${usersWithMe.replace(
                data.name,
                `**${data.name}**`
              )}`
            );
        }
      });
    } else {
      config.players.map((data) => {
        if (data.room.name == user.room.name) {
          if (data.live == true) {
            usersWithMe = `${usersWithMe} - ${data.name}`;
          } else {
            usersWithMe = `${usersWithMe} - ** cadáver del ${data.name}**`;
          }
        }
      });

      config.players.map((data) => {
        if (data.room.name == user.room.name) {
          client.users.cache
            .get(data.userInfo.id)
            .send(
              `**en la sala:** ${usersWithMe.replace(
                data.name,
                `**${data.name}**`
              )}`
            );
        }
      });
    }
  }

  //principal Code
  await map(config, user);

  user.msg.msg = await client.users.cache
    .get(user.userInfo.id)
    .send(user.msg.embed);

  user.room.posible.map(async (data) => {
    if(user.room.name == rooms[0].name){
      await user.msg.msg.react("⚠");
    }

    await user.msg.msg.react(data.color);
  });

  let filter = (reaction) => {
    return ["⚠", "🟨", "🟩", "🟧", "🟦", "🟪", "⬜", "⬛", "🟫"].includes(
      reaction.emoji.name
    );
  };

  let collector = user.msg.msg.createReactionCollector(filter, {
    idle: 60000,
  });

  collector.on("collect", async (reaction, u) => {
    if (u.id != process.env.ID) {
      if (user.live == true) {
        if(config.report != true){
          let verification = user.room.posible.find((data) => {
            return data.color == reaction.emoji.name;
          });

          if (reaction.emoji.name == "⚠") {
            report(message, config, client, defaultState, go);
          }

          if (verification != undefined) {
            await showPlayers(true);

            user.room = rooms.find((data) => {
              return data.name == verification.name;
            });

            showPlayers(false);

            go(message, config, client, user, defaultState);
          }

        }
      }
    }
  });
}

module.exports = go;
