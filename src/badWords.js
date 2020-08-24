const fs = require("fs");

class BadWords {
  constructor() {
    this.counterWords = 0;
    this.words = [
      "krajo",
      "mierda",
      "estupido",
      "carajo",
      "pichurria",
      "Putö",
      "Subnormal",
      "Putò",
      "pendejo",
      "بزرگترین توهین",
      "estupido",
      "puta",
      "puto",
      "perra",
      "recontrachanfles",
      "zorra",
      "fuck",
      "retrasado",
      "golazoooo",
      "marica",
      "maricon",
      "estupida",
      "jodete",
      "mierdita",
      "mierdota",
      "imbecil",
      "imbeciles",
      "caraculo ",
      "idiota",
      "idiotas",
      "caraculo",
      "joputas",
      "gonorrea",
      "reputisima",
      "re putisima",
      "putas",
      "putos",
      "re mil puta",
      "coño",
      "putita",
      "putito",
      "inutil",
      "verga",
      "chupa pija",
      "puteadas",
      "culo roto",
      "aborto fallido",
      "maldito",
      "maldita",
      "aborto",
      "culoroto",
      "concha de tu madre",
      "pvto",
      "m1erda",
      "shit",
    ];
  }

  findWord(message) {
    let data = false;
    let regexMessage = message.content.match(/\w+/g);
    if (regexMessage != undefined) {
      for (let i = 0; i < regexMessage.length; i++) {
        for (let j = 0; j < this.words.length; j++) {
          if (regexMessage[i].toLowerCase() == this.words[j]) {
            data = true;
            break;
          }
        }
      }

      if (data && message.author != "736342162886623313") {
        message.author.send(
          "https://pbs.twimg.com/media/EZiN_NbX0AANLZG.jpg \n"
        );
        message.author.send(
          "escribiste: " +
            message.content +
            ". **usa buen vocabulario 7-7, tu mensaje fue borrado.**"
        );

        fs.appendFile(
          "./src/badWords/badWords.txt",
          `${message.author.username}: ${message.content}   ${
            message.channel.name
          }  ${new Date()} \n\n`,
          function (err) {
            if (err) {
              return console.log(err);
            }
            console.log(
              `${message.author.username}: ${message.content}   ${
                message.channel.name
              }  ${new Date()} \n\n`
            );
          }
        );

        message.delete();
      }
    }
  }
}

module.exports = BadWords;
