const fs = require("fs");

class BadWords {
  constructor() {
    this.counterWords = 0;

    this.change = {
      á: "a",
      é: "e",
      3: "e",
      í: "i",
      1: "i",
      0: "o",
      ö: "o",
      ò: "o",
      ú: "u",
    };
    this.words = [
      "imbecil",
      "krajo",
      "mierda",
      "estupido",
      "carajo",
      "pichurria",
      "Subnormal",
      "pendejo",
      "بزرگترین توهین",
      "estupido",
      "puta",
      "puto",
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
      "imbeciles",
      "caraculo ",
      "idiota",
      "idiotas",
      "joputas",
      "gonorrea",
      "reputisima",
      "putisima",
      "putas",
      "putos",
      "coño",
      "putita",
      "putito",
      "inutil",
      "verga",
      "puteadas",
      "maldito",
      "maldita",
      "aborto",
      "culoroto",
      "pvto",
      "mierda",
      "shit",
    ];
  }

  findWord(message) {
    let data = false;

    let regexMessage = message.content.match(/[[\wáéíöòú]+/g);
    if (regexMessage != undefined) {
      for (let i = 0; i < regexMessage.length; i++) {
        for (let j = 0; j < this.words.length; j++) {
          if (
            regexMessage[i]
              .toLowerCase()
              .replace(/[\dáéíöòú]/g, (m) => this.change[m]) == this.words[j]
          ) {
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

        return true;
      }
    }
  }
}

module.exports = BadWords;
