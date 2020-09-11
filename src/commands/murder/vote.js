function vote(message, String, config, client) {
  let verification = config.players.find((data) => {
    return data.userInfo.id == message.author.id;
  });

  let person = String.slice(5);

  function update(findV){

     client.users.cache
               .get(message.author.id)
               .send(
                 `votaste por sacar al ${findV.name}`
               );

    for (let i = 0; i < config.players.length; i++) {
      if (config.players[i].userInfo.id == findV.userInfo.id) {
        config.players[i].votes++;
        break;
      }
    }

     for (let i = 0; i < config.players.length; i++) {
       if (config.players[i].userInfo.id == verification.userInfo.id) {
         config.players[i].vote = findV.name;
         break;
       }
     }

  }

  if (verification.vote.length > 2) {
    client.users.cache.get(message.author.id).send(`Ya votaste.`);
  } else {
    if (verification.live == true) {
         let findV = config.players.find((data) => {
             return data.name == person;
         });

         if(findV == undefined){
             client.users.cache
               .get(message.author.id)
               .send(
                 `Menciona a un usuario vivo, upf!murder vote NOMBRE`
               );
         } else {
            if(findV.live == true){
                update(findV);
            } else {
                client.users.cache
                  .get(message.author.id)
                  .send(`La persona esta muerta, menciona a alguien mas..`);
            }
         }
    } else {
      client.users.cache
        .get(message.author.id)
        .send(`Estas muerto, no puedes votar, no reveles información...`);
    }
  }

}

module.exports = vote;
