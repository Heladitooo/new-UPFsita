function join(message, config, user) {
  if (config.initStart == false) {
    message.channel.send("no se a iniciado ningun juego");
  } else {
    let verification = config.players.find((data) => {
      return data.userInfo.id == user.id;
    });

    if (config.start == true) {
      message.channel.send("ya hay un juego en curso, espera al siguiente.");
    } else {
      if (config.colors.length == 0) {
        message.channel.send("ya esta lleno unu, maximo 10 jugadores.");
      } else {
        if (verification == undefined) {
          config.players.push({
            murder: false,
            live: true,
            vote: "",
            votes: 0,
            msg: {
              msg: [],
              embed: [],
            },
            name: config.colors[0],
            room: {
              name: "🟧sala principal🟧",
              color: "🟧",
              img:
                "./src/commands/murder/src/maps/conservatorio/salaPrincipal.png",
              posible: [{
                name: "🟨pasillo 1🟨",
                color: "🟨",
              }, {
                name: "🟩pasillo 2🟩",
                color: "🟩",
              }]
            },
            userInfo: user,
          });

          config.colors.shift();

          let inGame = "";
          config.players.map((data) => {
              inGame = `${inGame} - ${data.userInfo.username}`;
          });

          config.principalMsg.embed.fields = [];

          config.principalMsg.msg.edit(
            config.principalMsg.embed.addField("Jugadores", inGame)
          );
        }
      }
    }
  }
}

module.exports = join;
