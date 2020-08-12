const Command = require("./command");
const randomNumber = require("../random");

class Answer extends Command {
    constructor(name, description) {
        super(name, description);
    }

    on(message) {
        let random = randomNumber(0,4);

        if (message.content.slice(11).length > 0){
            if (random == 0) {
                message.channel.send("NO.");
            }
            else if (random == 1) {
                message.channel.send("no, bueno si.");
            }
            else if (random == 2) {
                message.channel.send("correria peligro si te lo dijera.");
            }
            else if (random == 3) {
                message.channel.send("SI.");
            }
            else if (random == 2) {
                message.channel.send("si pero no.");
            }
        } else {
            message.channel.send("no te puedo responder a nada w-w.")
        }
    }
}

module.exports = Answer;