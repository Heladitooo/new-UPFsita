const cleverbot = require("cleverbot-free");

function chat(message){
    let messageR = message.content.match(/>.+/);
    if(messageR != undefined){
        cleverbot(message.content.match(/>.+/)[0].slice(1)).then((response) => message.channel.send(response));
    }
}

module.exports = chat;

