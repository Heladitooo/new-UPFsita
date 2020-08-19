function getMentionUsers(message){
    mentionUsers = []
  try {
    message.mentions.users.map((data) => {
      mentionUsers.push(data);
    })

    return mentionUsers;
  } catch(error){
    console.log(error);
  }
}

module.exports = getMentionUsers;