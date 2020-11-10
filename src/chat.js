const cleverbot = require("cleverbot-free");
const shell = require("shelljs");
const exec = require("child_process").exec;
const translate = require("@vitalets/google-translate-api");


function chat(message, string) {
  

  cleverbot(string).then((response) => {
    translate(response, {to: "es"}).then(data => {
      message.channel.send(data.text);
      // exec(
      //   `./src/tts.sh "${data.text}" < /dev/null &`,
      //   (error, stdout, stderr) => {
      //     if (error !== null) {
      //       console.log(`exec error: ${error}`);
      //     }
      //   }
      // );

    })
    
    
  });
}

module.exports = chat;
