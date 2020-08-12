const Command = require("./command");

class Gevaraconaguaazulada extends Command {
    constructor(name, description) {
        super(name, description);
    }

    on(message) {
        message.channel.send("gevaraconaguaazulada nwn.");
    }
}

module.exports = Gevaraconaguaazulada;