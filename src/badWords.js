class BadWords {
  constructor() {
    this.counterWords = 0;
    this.words = [
      "mierda",
      "estupido",
      "carajo",
      "pichurria",
      "pendejo",
      "بزرگترین توهین",
      "estupido",
      "puta",
      "puto",
      "perra",
      "recontrachanfles",
      "zorra",
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

  findWord(message, cb) {
    for (let i = 0; i < this.words.length; i++) {
      if (message.content.toLowerCase().includes(this.words[i])) {
        cb(true);
        break;
      }
    }
    this.words.map((data) => {
      return data;
    });
  }
}

module.exports = BadWords;