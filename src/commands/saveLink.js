const Command = require("./command");
const Discord = require("discord.js");
const chooseColor = require("../chooseColor");
const fs = require("fs");
const file = "./src/saveLink/saveLink.json";

//solo para admi
//esperar para updatear

class SaveLink extends Command {
  constructor(name, description) {
    super(name, description);
    this.list = [];
  }


  read(){
    fs.readFile(file, "utf8",(err,data)=>{
      if(err){
        console.log(err);
      } else {
        this.list = JSON.parse(data);      
      }
    });
  }

  update(message){
      
    const self = this;

    message.channel.messages.fetch()
      .then(function(list){
        message.channel.bulkDelete(list);
        }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})    

    for (let i = 0; i < self.list.length; i++) {
      message.channel.send(`👇 ${self.list[i].id} 👇`);
      message.channel.send(self.list[i].link);
    }
       
  }

  delete(message,toDelete){
    this.read();
    
    let index = this.list.findIndex((data) => {
      return data.id == toDelete;
    })

    if(index != -1){
      console.log(index);
      this.list.splice(index,1);
      fs.writeFile(file, JSON.stringify(this.list), 'utf8', (err,data)=>{
        if(err){
          console.log(err);
        }
      });
      message.channel.send("Borrado.");
      this.read();

      setTimeout(()=>{   
        this.update(message);
      },4000)
      
      
    } else {
      message.channel.send("no encontre el ID para borrar ;-;");
    }
  }


  append(toJSON){
    
    this.read();

    let disponibleID = 0;
    
    for(let i = 0; i < this.list.length; i++){
      if(this.list[i].id == "0"){
        disponibleID += this.list[i].id + 1;
      } else {
        disponibleID += this.list[i].id;
      }
      
    }

    this.list.push({
      id: disponibleID,
      link: toJSON,
    });

    fs.writeFile(file, JSON.stringify(this.list), 'utf8', (err,data)=>{
      if(err){
        console.log(err);
      }
    });
   
  }

  on(message, client) {

    this.read();
    const self = this;

    let link = message.content.match(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g);

    try{
      link = link[0];
    } catch {
      link = false;
    }

    if(link == false){
      this.read();
      
      if(message.content.slice(13) == "show"){
        if(message.member.roles.cache.some(r => r.id === "699392792346230785"))
        {
          this.read();

          if(message.channel.id == "743289894721552445"){
           this.update(message)
          } else {
            message.channel.send("no puedo hacerlo en este canal.");
          }
        } else {
          message.channel.send("no eres admi 7-7.");
        }

        

      } else if(message.content.slice(13,19) == "delete"){
        console.log("ok");
          this.delete(message, message.content.slice(20));
      } else {
        message.channel.send("Porfavor ingresa un link ;-; upf!saveLink link");
      }

    } else {
      this.append(link);
    }
    
    
    
  }
}

module.exports = SaveLink;