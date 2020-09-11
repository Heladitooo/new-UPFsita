function usersRoom(config,verification,client){

let usersWithMe = "";

 config.players.map((data) => {
   if (data.room.name == verification.room.name) {
     if (data.live == true) {
       usersWithMe = `${usersWithMe} - ${data.name}`;
     } else {
       usersWithMe = `${usersWithMe} - ** cadáver del ${data.name}**`;
     }
   }
 });

 config.players.map((data) => {
   if (data.room.name == verification.room.name) {
     client.users.cache
       .get(data.userInfo.id)
       .send(
         `**en la sala:** ${usersWithMe.replace(data.name, `**${data.name}**`)}`
       );
   }
 });
}

module.exports = usersRoom