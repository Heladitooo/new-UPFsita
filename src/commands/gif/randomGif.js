const random = require("../../random");

function randomGif(categorie, user, user2){
    let gifList = {
      hug: [
        "https://media1.tenor.com/images/1d94b18b89f600cbb420cce85558b493/tenor.gif",
        "https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif",
        "https://media1.tenor.com/images/ee3c3831a62667dc84ec4149a1651d8b/tenor.gif",
        "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif",
        "https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif",
        "https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif",
        "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif",
        "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif",
        "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif",
        "https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif",
        "https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif",
        "https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif",
        "https://media1.tenor.com/images/3ee30e7a472efe430502d08b993dc79b/tenor.gif",
        "https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif",
        "https://media1.tenor.com/images/3c83525781dc1732171d414077114bc8/tenor.gif",
        "https://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif",
        "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif",
        "https://media1.tenor.com/images/aeb42019b0409b98aed663f35b613828/tenor.gif",
        "https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif",
        "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif",
        "https://media1.tenor.com/images/81f693db5e5265c9ae21052d55ab7b3d/tenor.gif",
        "https://media1.tenor.com/images/f2805f274471676c96aff2bc9fbedd70/tenor.gif",
        "https://media1.tenor.com/images/7536f7c7d03a8be55b25b4a60a07af41/tenor.gif",
        "https://media1.tenor.com/images/df8b87203442db2c2af2a806eb7153d4/tenor.gif",
        "https://media1.tenor.com/images/8a4bee08487ba219fdadeee531e67c97/tenor.gif",
        "https://media1.tenor.com/images/79c461726e53ee8f9a5a36521f69d737/tenor.gif",
        "https://media1.tenor.com/images/83b732c53bfdd1409aec0553f9bfacfd/tenor.gif",
        "https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif",
        "https://media1.tenor.com/images/d7529f6003b20f3b21f1c992dffb8617/tenor.gif",
        "https://media1.tenor.com/images/68f16d787c2dfbf23a4783d4d048c78f/tenor.gif",
        "https://media1.tenor.com/images/32ca1fae18c11323a58aace17c51a21d/tenor.gif",
        "https://media1.tenor.com/images/13fd8042af77b8fb106fc90e676d5c72/tenor.gif",
        "https://media1.tenor.com/images/11b756289eec236b3cd8522986bc23dd/tenor.gif",
        "https://media1.tenor.com/images/221d033046ce00e616666183cc6b867c/tenor.gif",
        "https://media1.tenor.com/images/fe8ebb590e8eb5b76ae59e5d56dbf7f2/tenor.gif",
        "https://media1.tenor.com/images/0a7849c351e3588112d20d6ddc06f36c/tenor.gif",
        "https://media1.tenor.com/images/b616d0dd849542b165ee7426f4cc32eb/tenor.gif",
        "https://media1.tenor.com/images/4c050b61abb46c8bc1fea2ecff97dc9f/tenor.gif",
      ],
      kiss: [
        "https://media1.tenor.com/images/ad514e809adc14f0b7722a324c2eb36e/tenor.gif",
        "https://media1.tenor.com/images/bde466ffd976d08f14782192f85044d6/tenor.gif",
        "https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif",
        "https://media1.tenor.com/images/693602b39a071644cebebdce7c459142/tenor.gif",
        "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif",
        "https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif",
        "https://media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif",
        "https://media1.tenor.com/images/558f63303a303abfdddaa71dc7b3d6ae/tenor.gif",
        "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif",
        "https://media1.tenor.com/images/e858678426357728038c277598871d6d/tenor.gif",
        "https://media1.tenor.com/images/d9115cb8f24162cf70428d8cb8d96558/tenor.gif",
      ],
      happy: [
        "https://media1.tenor.com/images/0887e034e8edc65a8eb94e68d376292e/tenor.gif",
        "https://media1.tenor.com/images/daa0ab8fb837c37a1431b5d9019375be/tenor.gif",
        "https://media1.tenor.com/images/fa971efb20734de1e2a6d6e1f41413db/tenor.gif",
        "https://media1.tenor.com/images/6eb8e7f92a64ab6b6b28f0d1026dfeb0/tenor.gif",
        "https://media1.tenor.com/images/b67fc226c4d2403423a3dc6cb95eb128/tenor.gif",
        "https://media1.tenor.com/images/b1052a52e02d5bbe3177822aae20e314/tenor.gif",
        "https://media1.tenor.com/images/27becfcc6289a7585bf7578b923b898d/tenor.gif",
        "https://media1.tenor.com/images/6ad6f333a7ddc45a3bd71aa2071f06e0/tenor.gif",
        "https://media1.tenor.com/images/806ddaa461856f130dc637bd9bd76a5d/tenor.gif",
        "https://media1.tenor.com/images/09e7bcd394a78468bbec9784a323e6c4/tenor.gif",
        "https://media1.tenor.com/images/7715fb026b821e2f539518be57be573c/tenor.gif",
        "https://media1.tenor.com/images/4d89c26b38b42d6290e94ae08664b76d/tenor.gif",
        "https://media1.tenor.com/images/b16d09d12bea2d68e0da365aae8b0828/tenor.gif",
        "https://media1.tenor.com/images/b16d09d12bea2d68e0da365aae8b0828/tenor.gif",
        "https://media1.tenor.com/images/9ea711a05dd11d40e8fbdd28b545c3f5/tenor.gif",
        "https://media1.tenor.com/images/27c371498dd65526fd32a224c595df60/tenor.gif",
        "https://media1.tenor.com/images/2d3d5af985372e114686f01191c0354c/tenor.gif",
        "https://media1.tenor.com/images/bcf7c8a8080e05f68f80ed110fdc3503/tenor.gif",
        "https://media1.tenor.com/images/23a5d916103e9127b9ef7a71b15c54de/tenor.gif",
        "https://media1.tenor.com/images/0cca874255b4b2d0bd3eb228f7edb356/tenor.gif",
        "https://media1.tenor.com/images/75c1c3ad08074b50219ddb4637befe06/tenor.gif",
        "https://media1.tenor.com/images/75c1c3ad08074b50219ddb4637befe06/tenor.gif",
        "https://images7.memedroid.com/images/UPLOADED754/5e4b834b5b487.jpeg",
      ],
      kill: [
        "https: //media1.tenor.com/images/0a14155abb57a006877f73870896dabe/tenor.gif",
        "https://media1.tenor.com/images/cf4b874a22b949ea8645f511b0403e85/tenor.gif",
        "https://media1.tenor.com/images/a0caaaec7f3f48fbcf037dd9e6a89c51/tenor.gif",
        "https://media1.tenor.com/images/8dd6705544a90c5a8a4b246adb40d44b/tenor.gif",
        "https://media1.tenor.com/images/8ad05184fa318d0978dd4b6659744053/tenor.gif",
        "https://media1.tenor.com/images/cf4345b405e0cff774d88d9d383e9caf/tenor.gif",
        "https://media1.tenor.com/images/6cf356dd7c2281510675e7cceca97ef3/tenor.gif",
        "https://media1.tenor.com/images/bd25bc68109b934f924ea46c96449653/tenor.gif",
        "https://media1.tenor.com/images/ca6f8dfe735642cd872662c1bf0e91e9/tenor.gif",
        "https://media1.tenor.com/images/91c19627d0cf9e7e4d0497eddba40f54/tenor.gif",
        "https://media1.tenor.com/images/251103b679e9d4544b8d061fb59697a4/tenor.gif",
        "https://media1.tenor.com/images/2dd012fee6c74b24baee7d4e990cffc6/tenor.gif",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7Vyr3pqw_-OtFFYdkuXq6Ooy2T_aOfYZRJQ&usqp=CAU",
      ],
      sleep: [
        "https://media1.tenor.com/images/7175fe4b5e789b94b41a793e2fd4db3d/tenor.gif",
        "https://media1.tenor.com/images/c08efe7356f36e19ee3e2489c10d31f3/tenor.gif",
        "https://media1.tenor.com/images/84d907b9ce470d7237d8222deb8ef209/tenor.gif",
        "https://media1.tenor.com/images/1cdece239ec7d0fb33d2976d623f5e77/tenor.gif",
        "https://media1.tenor.com/images/a7e8e8f9fd0a8784012d8f14b09da4a8/tenor.gif",
        "https://media1.tenor.com/images/9650b39d78fd6b91456924ad51f79de2/tenor.gif",
        "https://media1.tenor.com/images/b0daf8299389bf3fa4260a91690f0e12/tenor.gif",
        "https://media1.tenor.com/images/6fe5f3efe7de5355acdbd7af9114c6be/tenor.gif",
        "https://media1.tenor.com/images/81c648515ea1180e4eed59b6134ed64d/tenor.gif",
        "https://media1.tenor.com/images/5ec9e445aeb6fe23b5f6df7a4b837874/tenor.gif",
        "https://media1.tenor.com/images/6cce96d9d71a4d37f9240d8b7445a5d8/tenor.gif",
        "https://media1.tenor.com/images/e35738edcf70fa24976fa862d0a9e32a/tenor.gif",
      ],
      hi: [
        "https://media1.tenor.com/images/fcc3854ad5ee2c22eb0189998be4c8f8/tenor.gif",
        "https://media1.tenor.com/images/1bc74d686385dabe1e2076d5ace587fd/tenor.gif",
        "https://media1.tenor.com/images/72c9b849aa10b222371ebb99a6b1896a/tenor.gif",
        "https://media1.tenor.com/images/056c584d9335fcabf080ca43e583e3c4/tenor.gif",
        "https://media1.tenor.com/images/c2e21a9d8e17c1d335166dbcbe0bd1bf/tenor.gif",
        "https://media1.tenor.com/images/f971528ed28f4572309beef00d20c30d/tenor.gif",
        "https://media1.tenor.com/images/79f33c2f524cbfed4ef6896b39e67663/tenor.gif",
        "https://media1.tenor.com/images/d10c3d213be6893235d97ae768db8c07/tenor.gif",
        "https://media1.tenor.com/images/972424767943ed34a19f6ff2a9cbe976/tenor.gif",
        "https://media1.tenor.com/images/fb3b2782cd2a57694fb02e97b38f37b2/tenor.gif",
        "https://media1.tenor.com/images/a7bd6b94430c1e66148d580209e377c5/tenor.gif",
        "https://media.tenor.com/images/ab278d1f75ef1bbc6e620537b05e975e/tenor.gif",
        "https://media1.tenor.com/images/56285784be190747c000e7f88ed61561/tenor.gif",
      ],
      angry: [
        "https://pbs.twimg.com/profile_images/1244814310783803392/AQwKbfqy.jpg",
        "https://media1.tenor.com/images/a4d2739a53704d796920f67ddaef14df/tenor.gif",
        "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif",
        "https://media1.tenor.com/images/3c33fd5e05efb71bd6dd9109d15b60d8/tenor.gif",
        "https://media1.tenor.com/images/82a8b54bfa4bcc3e1209f50caf4b5835/tenor.gif",
        "https://media1.tenor.com/images/f202e1d56b31f7177af9ea295fad3628/tenor.gif",
        "https://media1.tenor.com/images/8c253fc5ed5d27303823cbcb2122c428/tenor.gif",
        "https://media1.tenor.com/images/52a09999db271d1a8ed6ee4dbb3fbb0d/tenor.gif",
        "https://media1.tenor.com/images/68a9ecc60d595ae1b9849a83333459fe/tenor.gif",
        "https://media1.tenor.com/images/fe5299eba79e3e3acca5c45e27cf72c6/tenor.gif",
        "https://media1.tenor.com/images/4429d3d8c8b8764755a5f3f35f62249b/tenor.gif",
        "https://media1.tenor.com/images/2385c27b67deb86dee20511f687af774/tenor.gif",
        "https://media1.tenor.com/images/1b1bba27568b351073de75de3dab4fb7/tenor.gif",
        "https://media1.tenor.com/images/0d381b17db2523b863bdaff9e24b3ee2/tenor.gif",
        "https://media1.tenor.com/images/8ce9cdc7e239710b182b3814d5dee461/tenor.gif",
        "https://media1.tenor.com/images/e8129cd0b722f3a446f28ac45ceafc8e/tenor.gif",
        "https://media1.tenor.com/images/b20ef7b6a55d8ee2b5c3f65c829be424/tenor.gif",
        "https://media1.tenor.com/images/4c28c5dc1f53f67c812cf64513221b69/tenor.gif",
        "https://media1.tenor.com/images/400256b8f601c7aafde2f4ef4e629a18/tenor.gif",
        "https://media1.tenor.com/images/d09374e6f14d4c886ace658e19a03354/tenor.gif",
        "https://media1.tenor.com/images/23eb1fde21627ed071f59bb27261b0c3/tenor.gif",
        "https://media1.tenor.com/images/2f198dc24f638fc9f16776c8ebd183fd/tenor.gif",
        "https://media1.tenor.com/images/0e091a4895308fa0d2c7940ec2ad21ed/tenor.gif",
        "https://media1.tenor.com/images/0e091a4895308fa0d2c7940ec2ad21ed/tenor.gif",
      ],
      sad: [
        "https://media1.tenor.com/images/1d85e1d25ca4f8da6dd6ec7e66b684a0/tenor.gif",
        "https://media1.tenor.com/images/bd900a9a994238168c8e843cc3a575a6/tenor.gif",
        "https://media1.tenor.com/images/76d6d1ab30252270844689d3e9dc3214/tenor.gif",
        "https://media1.tenor.com/images/97a0ceefeacc6760878ebf73af7fbf4a/tenor.gif",
        "https://media1.tenor.com/images/93398357a449dad11335242bd48dd4a4/tenor.gif",
        "https://media1.tenor.com/images/efca6ac695440470c306e6ea127d783a/tenor.gif",
        "https://media1.tenor.com/images/9e49b5a5f97d1a91733f38404eff8303/tenor.gif",
        "https://media1.tenor.com/images/9cbeebd1e7cc941e6a3f468bae756547/tenor.gif",
      ],
      bye: [
        "https://media1.tenor.com/images/a5644e4f73314edf63146f3b0771fe01/tenor.gif",
        "https://media1.tenor.com/images/085549bc07267c5d73a44d5f4e5087d7/tenor.gif",
        "https://media1.tenor.com/images/a8d83fe94552385e903d80ef3347f3a7/tenor.gif",
        "https://media1.tenor.com/images/8a87452b39aa0a394f19b42d8d2e790d/tenor.gif",
        "https://media1.tenor.com/images/43b26f57280c43f77e87a546bf6c6011/tenor.gif",
        "https://media1.tenor.com/images/33fdd8dc7564b56d5905428484f5aee4/tenor.gif",
        "https://media1.tenor.com/images/2f7df460196625edc45b8380d158e5ee/tenor.gif",
        "https://media1.tenor.com/images/17c977bb6585d853971cda6d27f1f834/tenor.gif",
        "https://media1.tenor.com/images/7928ea12327afc2442bce9b18a6b3f0a/tenor.gif",
        "https://media1.tenor.com/images/bf7f5103da5b74ed58d8799990f7b62e/tenor.gif",
        "https://media1.tenor.com/images/34657995bdac0aa521277ecc21c4e4a0/tenor.gif",
        "https://media1.tenor.com/images/51c5c144c04874dc2e071b966b2dda6c/tenor.gif",

      ],
      dance: [
        "https://media.discordapp.net/attachments/301161155831922688/733111096004575292/Fernan_capo.gif",
        "https://media1.tenor.com/images/fbf9160aaf0140037000f926737f4746/tenor.gif",
        "https://media1.tenor.com/images/8df28ac0b72e04b6f464759d909a160f/tenor.gif",
        "https://media1.tenor.com/images/6ce5b343132056d16ceba80452b2db2c/tenor.gif",
        "https://media1.tenor.com/images/40859995268c1f5465ab2fbcde560d24/tenor.gif",
        "https://media.discordapp.net/attachments/270670070248636417/722144588264898641/image0-1-1.gif",
        "https://media1.tenor.com/images/b503b4f6389fc18bc58ea1d4c98aca7c/tenor.gif",
        "https://media.discordapp.net/attachments/270670070248636417/732781417976823849/image0.gif",
        "https://media1.tenor.com/images/603297e43546f61fe87e6f9095f8382a/tenor.gif",
        "https://media1.tenor.com/images/e6a032ab0c391d1f14cd6768775ab46a/tenor.gif",
        "https://media.discordapp.net/attachments/690564212891582518/733094747857616957/sans_estudiando_xd_1.gif",
        "https://media1.tenor.com/images/9c4f39ada9d7dc5d4c3216f1c4d2c068/tenor.gif",
        "https://media.discordapp.net/attachments/399448944889036801/570373865008660540/chikadance5.gif",
        "https://media.discordapp.net/attachments/564064651399397407/731543902581948526/image0.gif",
        "https://media1.tenor.com/images/924836b2a053619bbd216cd5d1494faa/tenor.gif",
        "https://media1.tenor.com/images/d5bd643d52fd0d22922964d0b2838c1b/tenor.gif",
        "https://media1.tenor.com/images/8fdcda26512797826631511017a11f93/tenor.gif",
        "https://media1.tenor.com/images/ef5b04b011af9abbd070f2772b3edf2d/tenor.gif",
        "https://media1.tenor.com/images/751469ca5bf52e595b14910532a171fa/tenor.gif",
        "https://media1.tenor.com/images/aa9374ef547c871d4626a22d24042d1f/tenor.gif",
        "https://media1.tenor.com/images/c516ca70e76578431857f15f880a93f2/tenor.gif",
      ]
    };

    if(categorie == "kiss"){
        return {
          gif: gifList.kiss[random(0, 10)],
          works: user + " beso a " + user2 + "  OWO",
          doesWork: {
            showGif: true,
            alone: user + " ta bien te beso UwU",
          },
        };
    }

    if (categorie == "happy") {
        return {
          gif: gifList.happy[random(0, 21)],
          works: user + " esta feliz por " + user2 + "  nwn",
          doesWork: {
            showGif: true,
            alone: user + " esta feliz :D",
          },
        };
    }

    if (categorie == "kill") {
      return {
        gif: gifList.kill[random(0, 11)],
        works: user + " mato a " + user2 + "  xd",
        doesWork: {
          showGif: false,
          alone: user + " intento matar a alguien, pero no pudo 😂",
        },
      };
    }

    if (categorie == "hug") {
      return {
        gif: gifList.hug[random(0, 37)],
        works: user + " le da un abrazo a " + user2 + "  UwU",
        doesWork: {
          showGif: true,
          alone: user + " toma tu abrazo nwn",
        },
      };
    }

    if (categorie == "sleep") {
      return {
        gif: gifList.sleep[random(0, 11)],
        works: user + " se duerme pensando en " + user2,
        doesWork: {
          showGif: true,
          alone: user + " se duerme --- zzz",
        },
      };
    }

    if (categorie == "hi") {
      return {
        gif: gifList.hi[random(0,12)],
        works: user + " saluda a " + user2,
        doesWork: {
          showGif: true,
          alone: user + " os saluda! devuelvele el saludo",
        },
      };
    }

    if (categorie == "angry") {
      return {
        gif: gifList.angry[random(0, 13)],
        works: user + " se enoja con " + user2 + ">:c",
        doesWork: {
          showGif: true,
          alone: user + " se enoja  !.!",
        },
      };
    }

  if (categorie == "sad") {
    return {
      gif: gifList.sad[random(0, 7)],
      works: user + " entristece por " + user2 + " unu",
      doesWork: {
        showGif: true,
        alone: user + " se entristece  unu",
      },
    };
  }
    
  if (categorie == "bye") {
    return {
      gif: gifList.bye[random(0, 11)],
      works: user + " se despide de " + user2,
      doesWork: {
        showGif: true,
        alone: user + " se tiene que ir, se despide",
      },
    };
  }

  if (categorie == "dance") {
    return {
      gif: gifList.dance[random(0, 20)],
      works: user + " baila con " + user2 + " [MUSICA]",
      doesWork: {
        showGif: true,
        alone: user + " baila :D" + " [MUSICA]",
      },
    };
  }

}

module.exports = randomGif;