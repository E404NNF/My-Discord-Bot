const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
const querystring = require("querystring");
const r2          = require("r2");
const superagent = require("superagent");
var prefix = "error$";
const devs = ["426260385411104768","406877114936197120","452292328569307137"];
const adminprefix = "botowner$"
const fs = require("fs-extra");
const child_process = require("child_process");
const figlet = require("figlet");
const moment = require("moment");
// Codes.set(تعريف الكلينت حقك)
const math = require("math-expression-evaluator");
const stripIndents = require("common-tags").stripIndents;
client.on("ready", () => {
  console.log("╔[════════════════════════════════════]╗");
  console.log("")
  console.log("            ╔[════════════]╗")
  console.log("              Bot Is Online")
  console.log("            ╚[════════════]╝")
  console.log("")
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("")
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log("")
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log("")
  console.log("╚[════════════════════════════════════]╝")
});
client.on("error", data => {
  console.log("error",data);
  // attempt reconnection x times, after x seconds, exponential backoff
});
client.on("ready", function(){
    client.user.setStatus("dnd");
    var ms = 100000 ;
    var setGame = [`${client.guilds.size} Servers`,`${client.users.size} Users`,`P... | error$help| error$invitebot | Error name found`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
	client.user.setActivity(setGame[i],{type: "WATCHING"});
    }, ms);100000

});

      client.on("message", message => {	
             if (message.content === "error$help") {	
			let embedMISC = new Discord.RichEmbed()
			.setTitle("Misc Commands")
			.setDescription("The command prefix is ${prefix}")
			.addField("**error$invite**","*Creates a 24H invite link to the current server*")
			.addField("**error$sendto [PERSONE] [MESSAGE]**","*Send's a [MESSAGE] to a [PERSONE]*")
			.addField("**error$serverrooms**","*Gives you information about the server roooms [Numbers and names]*")
			.addField("**error$status**","*Bot status*")
			.addField("**error$whohasmytag**","*Checks who have your #XXXX number in the server*")
			.addField("**error$invites**","*Checks how much you invited*")
			.addField("**error$membersmode**","*Checks how much you invied*")
			.addField("**error$membersmode**","*Checks All the server users status DND,Idle,Online,Offline*")
			.addField("**error$serverimage**","Gives you the current server icon*")
			.addField("**error$calc [MATH PROBLEM]**","*Solves the [MATH PROBLEM] for you*")
			.addField("**error$ping**","*Gives you the bot ping*")
			.addField("**error$roleperms [ROLE]**","*Gives you the perms of the role you have OR the perms of the [ROLE]*")
			.addField("**error$color**","*Give's you a color with the number [X] if availble in the server*")
			.addField("**error$avatar [ID]**","Gives you the selected [ID] of a persone IF EMPTY it will give you your avatar")
			.setFooter(new Date())
			let embedADMIN = new Discord.RichEmbed()
			.setTitle("**Admistration Commands**")
			.setDescription("The command prefix is ${prefix}")
			.addField("**error$createcolors [X]**","Creates some colored rules the [X] stands for how times")
			.addField("**error$bc [MESSAGE]**","*Sends a message to all the server members [MESSAGE] stands for the message*")
			.addField("**error$clear [X]**","*Clears the last [X] messages in the current channel*")
			.addField("**error$unban [PERSONE]**","*Unbans the [PERSONE]*")
			.setFooter(new Date())
			let embedFUN = new Discord.RichEmbed()
			.setTitle("**FUN Commands**")
			.setDescription("The command prefix is ${prefix}")
			.addField("**error$cat**","*UwU Cats*")
			.addField("**error$dog**","*UwU Dogs*")
			.addField("**error$meme**","*Gives you a random meme from r/memes*")
			.addField("**error$cursedminecraft**","*Gives you a random meme from r/cursedminecraft*")
			.addField("**error$yn**","*yes or no AKA. a basic 8ball*")
			.addField("**error$skin [NAME]**","*Gives you [NAME] minecraft skin*")
			.addField("**error$mcskindownload [NAME]**","*Gives you [NAME] minecraft skin*")
			.addField("**error$e [TEXT]**","*Converts [TEXT] to emojis*")
			.addField("**error$tag [TEXT]**","*Converts [TEXT] to tag*")
			.addField("**error$type**","*make the bot start typing for couple of seconds*")
			.setFooter(new Date())
  message.channel.send(embedMISC)
  message.channel.send(embedADMIN)
  message.channel.send(embedFUN)
			let embedINFO = new Discord.RichEmbed()
			.setTitle("**Bot INFO**")
			.addField("**BOT By: **","*@<426260385411104768>*")
			.addField("**Host: **","*https://dashboard.heroku.com/*")
			.addField("**Bot Type: **", "*Mostly for fun and misc*")
			.setFooter(new Date())
  message.channel.send(embedINFO)
			
	
      }
	   });
client.on("message", msg => {
if (msg.content.startsWith(prefix + "cal")) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(" ");
  if (args.length < 1) {
      msg.reply("**Write the math problem **.");
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail("https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg")
.setDescription(`**
 The math problem is :thinking:  : ${question}

 The Answer is :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});

client.on("message", message => {

     if (message.content.startsWith(prefix)){
           console.log(message.author.username + " executed: " + message.content + " in server " + message.guild.name)
     }
});

client.on("message", message => {
            if (message.content.startsWith("error$ping")) {
                if(!message.channel.guild) return;
            
            if (message.author.bot) return;
                message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
                }
            
            });
	  
  client.on("message", message => {
    if(message.content.startsWith(prefix + "roleperms")) {
            	var msg = message.content.toLowerCase();
            		var role2 = msg.split(" ").slice(1).join(" ").toLowerCase(); 
        		var role1 = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(role2)>-1 ).first(); 
        		     if(role1.hasPermissions("ADMINISTRATOR")) {
        		         var permadmin = ":white_check_mark:"
        		     } else {
        		         var permadmin=":x:"
        		     }
        		             		     if(role1.hasPermissions("VIEW_AUDIT_LOG")) {
        		         var permlog = ":white_check_mark:"
        		     } else {
        		         var permlog=":x:"
        		     }
        		             		     if(role1.hasPermissions("MANAGE_GUILD")) {
        		         var permserver = ":white_check_mark:"
        		     } else {
        		         var permserver=":x:"
        		     }
        		             		     if(role1.hasPermissions("MANAGE_ROLES")) {
        		         var permroles = ":white_check_mark:"
        		     } else {
        		         var permroles=":x:"
        		     }
        		             		     if(role1.hasPermissions("MANAGE_CHANNELS")) {
        		         var permchannel = ":white_check_mark:"
        		     } else {
        		         var permchannel=":x:"
        		     }
        		             		     if(role1.hasPermissions("KICK_MEMBERS")) {
        		         var permkick = ":white_check_mark:"
        		     } else {
        		         var permkick=":x:"
        		     }
        		             		     if(role1.hasPermissions("BAN_MEMBERS")) {
        		         var permban = ":white_check_mark:"
        		     } else {
        		         var permban=":x:"
        		     }
        		             		     if(role1.hasPermissions("CREATE_INSTANT_INVITE")) {
        		         var perminvites = ":white_check_mark:"
        		     } else {
        		         var perminvites=":x:"
        		     }
        		             		     if(role1.hasPermissions("CHANGE_NICKNAME")) {
        		         var permnick = ":white_check_mark:"
        		     } else {
        		         var permnick=":x:"
        		     }
        		             		     if(role1.hasPermissions("MANAGE_NICKNAMES")) {
        		         var permmanagenick = ":white_check_mark:"
        		     } else {
        		         var permmanagenick=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("MANAGE_EMOJIS")) {
        		         var permemojis = ":white_check_mark:"
        		     } else {
        		         var permemojis=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("MANAGE_WEBHOOKS")) {
        		         var permhook = ":white_check_mark:"
        		     } else {
        		         var permhook=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("SEND_MESSAGES")) {
        		         var permmessage = ":white_check_mark:"
        		     } else {
        		         var permmessage=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("SEND_TTS_MESSAGES")) {
        		         var permtts = ":white_check_mark:"
        		     } else {
        		         var permtts=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("MANAGE_MESSAGES")) {
        		         var permmanagemessages = ":white_check_mark:"
        		     } else {
        		         var permmanagemessages=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("EMBED_LINKS")) {
        		         var permembed = ":white_check_mark:"
        		     } else {
        		         var permembed=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("ATTACH_FILES")) {
        		         var permattach = ":white_check_mark:"
        		     } else {
        		         var permattach=":x:"
        		     }
        		             		             		     if(role1.hasPermissions("MENTION_EVERYONE")) {
        		         var permmention = ":white_check_mark:"
        		     } else {
        		         var permmention=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions("USE_EXTERNAL_EMOJIS")) {
        		         var permuseemojis = ":white_check_mark:"
        		     } else {
        		         var permuseemojis=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions("ADD_REACTIONS")) {
        		         var permreact = ":white_check_mark:"
        		     } else {
        		         var permreact=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions("CONNECT")) {
        		         var permconnect = ":white_check_mark:"
        		     } else {
        		         var permconnect=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions("SPEAK")) {
        		         var permspeak = ":white_check_mark:"
        		     } else {
        		         var permspeak=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions("MUTE_MEMBERS")) {
        		         var permmute = ":white_check_mark:"
        		     } else {
        		         var permmute=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions("DEAFEN_MEMBERS")) {
        		         var permdeafen = ":white_check_mark:"
        		     } else {
        		         var permdeafen=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions("MOVE_MEMBERS")) {
        		         var permmove = ":white_check_mark:"
        		     } else {
        		         var permmove=":x:"
        		     }
        		            		     let nat = new Discord.RichEmbed()
        		     .addField("ADMINISTRATOR",permadmin, true)
        		     .addField("VIEW_AUDIT_LOG",permlog, true)
        		     .addField("MANAGE_SERVER",permserver, true)
        		     .addField("MANAGE_ROLES",permroles, true)
        		     .addField("MANAGE_CHANNELS",permchannel, true)
        		     .addField("KICK_MEMBERS",permkick, true)
        		     .addField("BAN_MEMBERS",permban, true)
        		     .addField("CREATE_INSTANT_INVITE",perminvites, true)
        		     .addField("CHANGE_NICKNAME",permnick, true)
        		     .addField("MANAGE_NICKNAMES",permmanagenick, true)
        		     .addField("MANAGE_EMOJIS",permemojis, true)
        		     .addField("MANAGE_WEBHOOKS",permhook, true)
        		     .addField("SEND_MESSAGES",permmessage, true)
        		     .addField("SEND_TTS_MESSAGES",permtts, true)
        		     .addField("MANAGE_MESSAGES",permmanagemessages, true)
        		     .addField("EMBED_LINKS",permembed, true)
        		     .addField("ATTACH_FILES",permattach, true)
        		     .addField("MENTION_EVERYONE",permmention, true)
        		     .addField("USE_EXTERNAL_EMOJIS",permuseemojis, true)
        		     .addField("ADD_REACTIONS",permreact, true)
        		     .addField("CONNECT",permconnect, true)
        		     .addField("SPEAK",permspeak, true)
        		     .addField("MUTE_MEMBERS",permmute, true)
        		     .addField("DEAFEN_MEMBERS",permdeafen, true)
        		     .addField("MOVE_MEMBERS",permmove, true)
        		     message.channel.send(nat)
    }
});
	  



client.on("message", message => {
  
    if(message.content.split(" ")[0] == prefix + "contant"){
         if(message.channel.guild) return;
                            let args = message.content.split(" ").slice(1).join(" ");
    
                                                   client.guilds.get("456524658993528834").members.get("426260385411104768").sendMessage(message.author.tag+"\n Message : "+args)
                                                   message.author.sendMessage("Done! ✅ ")
                                                   //CopyRight Memo-Codes
                                                 
    }
    });
client.on("message", message => {
    if (message.content === "error$cat") {

        message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "cat.png")
    }
});
const DOG_API_URL   = "https://api.thedogapi.com/"
const DOG_API_KEY   = "b9217e7c-c03c-4dde-9c54-7faa0578be18"; // get a free key from - https://thedogapi.com/signup
client.on("message", message => {
    if (message.content === "error$dog") {
 messageRecieved(message);
    }
});

async function messageRecieved(message)
{
  try{
    // pass the name of the user who sent the message for stats later, expect an array of images to be returned.
    var images = await loadImage(message.author.username);

    // get the Image, and first Breed from the returned object.
    var image = images[0];
    var breed = image.breeds[0];

    console.log("message processed","showing",breed)
    // use the *** to make text bold, and * to make italic
    message.channel.send( "***"+breed.name + "*** \r *"+breed.temperament+"*", { files: [ image.url ] } );
    // if you didn"t want to see the text, just send the file

  }catch(error)
  {
    console.log(error)
  }
}
/**
 * Makes a request to theDogAPI.com for a random dog image with breed info attached.
 */
async function loadImage(sub_id)
{
  // you need an API key to get access to all the iamges, or see the requests you"ve made in the stats for your account
  var headers = {
      "X-API-KEY": DOG_API_KEY,
  }
  var query_params = {
    "has_breeds":true, // we only want images with at least one breed data object - name, temperament etc
    "mime_types":"jpg,png", // we only want static images as Discord doesn"t like gifs
    "size":"small",   // get the small images as the size is prefect for Discord"s 390x256 limit
    "sub_id": sub_id, // pass the message senders username so you can see how many images each user has asked for in the stats
    "limit" : 1       // only need one
  }
  // convert this obejc to query string 
  let queryString = querystring.stringify(query_params);

  try {
    // construct the API Get request url
    let _url = DOG_API_URL + `v1/images/search?${queryString}`;
    // make the request passing the url, and headers object which contains the API_KEY
    var response = await r2.get(_url , {headers} ).json
  } catch (e) {
      console.log(e)
  }
  return response;

}
client.on("message", function(msg) {
    if(msg.content.startsWith (prefix  + "serverinfo")) {
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField("🌐** ServerType **",`[** __${msg.guild.region}__ **]`,true)
      .addField("🏅** Roles **",`[** __${msg.guild.roles.size}__ **]`,true)
      .addField("🔴** Members Numbers **",`[** __${msg.guild.memberCount}__ **]`,true)
      .addField("🔵** ONLINE **",`[** __${msg.guild.members.filter(m=>m.presence.status == "online").size}__ **]`,true)
      .addField("📝** Channels **",`[** __${msg.guild.channels.filter(m => m.type === "text").size}__** ]`,true)
      .addField("🎤** Voice Channels**",`[** __${msg.guild.channels.filter(m => m.type === "voice").size}__ **]`,true)
      .addField("👑** Creator **",`**${msg.guild.owner}**`,true)
      .addField("🆔** Server ID **",`**${msg.guild.id}**`,true)
      .addField("📅** Server created in **",msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



client.on("message", message => {
      if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + "bcbot")) {
    if (!devs.includes(message.author.id)) return; 
let args = message.content.split(" ").slice(1).join(" ");

message.channel.sendMessage("جار ارسال الرسالة |:white_check_mark:")
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on("message", message => {
    if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");


}
});      
client.on("message", message => {
  const aa = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "skin")){
    if(!aa) return message.reply(`:x:  -  **${prefix}skin <name>**`);
    var ss = new Discord.RichEmbed()
    .setTitle(`${aa}"s Skin!`)
    .setURL(`https://minotar.net/armor/body/${aa}/100.png`)
    .setThumbnail(`https://minotar.net/avatar/${aa}`)
    .setImage(`https://minotar.net/armor/body/${aa}/100.png`)
    .setFooter(`${aa}`, `https://minotar.net/cube/${aa}/100.png`)
    message.channel.send(ss);
  }
});
    client.on("message", message => {
        if (!message.content.startsWith(prefix)) return;
          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
            if(command === "botinvitemaker") {
                    const args = message.content.split(" ").slice(1).join(" ")
            if (!args) return message.channel.send("** Write The Bot ID **");
            message.author.sendMessage(`**https://discordapp.com/oauth2/authorize?client_id=${args}&permissions=20803749758&scope=bot**`);
            message.channel.send("**Check Your DM :white_check_mark:**");
            }
        }); 
      
    client.on("message", message => {
        if (!message.content.startsWith(prefix)) return;
          let command = message.content.split(" ")[0];
          command = command.slice(prefix.length);
            if(command === "mcskindownload") {
                    const args = message.content.split(" ").slice(1).join(" ")
            if (!args) return message.channel.send("** Type your skin name **");
            const image = new Discord.Attachment(`https://minotar.net/skin/${args}`, "skin.png");
        message.channel.send(image)
            }
        });



      
let codes = {
    a: "🇦", b: "🇧", c: "🇨", d: "🇩",
    e: "🇪", f: "🇫", g: "🇬", h: "🇭",
    i: "🇮", j: "🇯", k: "🇰", l: "🇱",
    m: "🇲", n: "🇳", o: "🇴", p: "🇵",
    q: "🇶", r: "🇷", s: "🇸", t: "🇹",
    u: "🇺", v: "🇻", w: "🇼", x: "🇽",
    y: "🇾", z: "🇿", 0: "0⃣", 1: "1⃣",
    2: "2⃣", 3: "3⃣", 4: "4⃣", 5: "5⃣",
    6: "6⃣", 7: "7⃣", 8: "8⃣", 9: "9⃣",
    10: "🔟", "#": "#⃣", "*": "*⃣",
    "!": "❗", "?": "❓", " ": "",
};
      
      "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
        codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
      });
      
      
      client.on("message" , async message => {
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
          
        if(command === "e"){
                let args = message.content.split(" ").slice(1);
        if (args.length < 1) {
          message.channel.send("You must provide some text to emojify!");
      }
      
      message.channel.send(
          args.join(" ")
              .split("")
              .map(c => codes[c] || c)
              .join("")
      );
      };
      });
	 
	  
        client.on("message", message => {
            if (!message.guild) return; 
            if (message.content === "error$invite") {
        
                message.channel.createInvite({
                thing: true,
                maxUses: 100,
                maxAge: 86400
            }).then(invite =>
              message.author.sendMessage(invite.url)
            )
          message.channel.send(`** The Invite Has Benn Sendted To You DM **`)
        
              message.author.send(`**That Invite For 24 Hours And For 100 People**`)
            }
        });

        client.on("message", message => {
            if (message.content.startsWith(prefix + "addrole")) {
                         if(!message.channel.guild) return message.reply("**Commands in the server**");
                    if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("⚠ **You do not have permissions**");
                    let args = message.content.split(" ").slice(1);
                        message.guild.createRole({
                            name : args.join(" "),
                            permissions : [1]
                        }).then(function(role){
                    return message.reply("✅ **Added a Role**");
                            message.addRole(role)
                        })
            
            }
            });

            client.on("message", ra3d => {
                                        let args = ra3d.content.split(" ").slice(1).join(" ")
                if(ra3d.content.startsWith(prefix + "createcolors")) {
                    if(!args) return ra3d.channel.send("` enter how much colors `");
                             if (!ra3d.member.hasPermission("MANAGE_ROLES")) return ra3d.channel.sendMessage("`**⚠ | `[MANAGE_ROLES]` PERMISSION NEEDED**"); 
                              ra3d.channel.send(`**✅ |Creating __${args}__ Colors**`);
                                  setInterval(function(){})
                                    let count = 0;
                                    let ecount = 0;
                          for(let x = 1; x < `${parseInt(args)+1}`; x++){
                            ra3d.guild.createRole({name:x,
                              color: "RANDOM"})
                              }
                            }
                       });



        client.on("guildCreate", guild => {
            let embed = new Discord.RichEmbed () 
            .setTitle("Bot Logs")
            .addField(" ***Bot joined to :***[" + `${guild.name}` + "]   **By : **" + `${guild.owner.user.username}` + "")
            .setFooter("The bot is happy")
            .setTimestamp()
            client.channels.get("578584446626824192").send(embed)
          });
        
          client.on("guildDelete", guild => {
          let embed = new Discord.RichEmbed ()
          .setTitle("Bot Logs")
          .addField(" ***Bot left from :***[" + `${guild.name}` + "]     **By : **" + `${guild.owner.user.username}` +  " ")
          .setFooter("The bot is crying")
          .setTimestamp()
          client.channels.get("578584446626824192").send(embed)
        });



client.on("message", message => {
            if (message.content === "error$invitebot") {
                message.channel.send("Check Your DM✅");
            message.author.sendMessage(`https://discordapp.com/oauth2/authorize?client_id=456252070530514965&permissions=20803749758&scope=bot`);	 
            }
           });

       

        client.on("message", message => {
            let args = message.content.split(" ").slice(1);
     if(message.content.split(" ")[0] == "error$color"){
             const embedd = new Discord.RichEmbed()
       .setFooter("Requested by "+message.author.username, message.author.avatarURL)
     .setDescription(`**There"s No Color With This Number ** :x: `)
     .setColor(`ff0000`)
  
      if(!isNaN(args) && args.length > 0)
      
  
  if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
  
  
         var a = message.guild.roles.find("name",`${args}`)
                  if(!a)return;
  const embed = new Discord.RichEmbed()
                      
       .setFooter("Requested by "+message.author.username, message.author.avatarURL)
     .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
   
     .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
            if (!args)return;
  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 201; x++){
             
              message.member.removeRole(message.guild.roles.find("name",`${x}`))
            
              }
                  message.member.addRole(message.guild.roles.find("name",`${args}`));
          
              
      }
  });

client.on("message", message => {
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            client.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }
      
      });

client.on("message", message => {
    if(message.content === adminprefix + "shutdown") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **Who OOOFFFFFFFED the bot is ${message.author.username}**`);
            console.log(`⚠️OOOFFFFFFF⚠️`);
            client.destroy();
            console.log(`oof`);
        }
      
      });

      client.on("message" , message => { 
        if (message.author.bot) return;
         if (message.content === adminprefix + "sr") {
            if (!devs.includes(message.author.id)) return message.reply("** Sorry But That Command For The Owner Only **")
    
    if(!message.channel.guild) return;
      if(message.content < 1023) return
      const Embed11 = new Discord.RichEmbed()
    .setAuthor(client.user.username,client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription(`***Servers: ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join("\n")}***`)
             message.channel.sendEmbed(Embed11)
        }
    });

client.on("message", msg => {
 if (msg.content.startsWith(prefix + "sendto")) {
      let args = msg.content.split(" ").slice(1)
      if (!args[0]) return msg.reply(`**Mention The Persone First**`)
      if (!args[1]) return msg.reply(`**What Is The Message???? WRITE IT**`)
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**Select The Persone**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**A Message from @someone**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**Message Sended**`)
    }
});

client.on("message", message => {
    if (message.content === "error$serverrooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(" ")
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField(`${message.guild.name}`,`**Rooms✅**`)
        .addField("⬇ Rooms Number. ✔",`** ${message.guild.channels.size}**`)
        
.addField("⬇Rooms Name ✔:",`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    };
});

client.on("message", message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.split(" ")[0] == prefix + "bc") {
        if (!args[1]) {
    message.channel.send("**Usage: error$bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission("ADMINISTRATOR")) return;
                var bc = new Discord.RichEmbed()
                .addField("» Server :", `${message.guild.name}`)
                .addField("» Sender : ", `${message.author.username}#${message.author.discriminator}`)
                .addField(" » Message : ", args)
                .setColor("#ff0000")
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });

    client.on("message", message => {
        if (!message.content.startsWith(prefix)) return;
        const verifed = devs;
      if (message.content.startsWith(prefix + "isimfrombotteam")) {
      if(verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**You Are From Bot Team **` + `✅`)
      } else {
         message.reply("**You Are Not From The Bot Team **" + "❌");   
      }
      }
      });
      client.on("message", message => {
        if (message.content.startsWith(prefix + "tag")) {
            let args = message.content.split(" ").slice(1);
        if(!args[0]) return message.reply("Type the phrase please");  
        
            figlet(args.join(" "), (err, data) => {
                      message.channel.send("```" + data + "```") //  عدل على النقاط وحطهم 3 من الجهتين مثل`` كذا تزيد واحد
                   })
        }
        });
        client.on("message", message => {
            if (message.content.startsWith("error$status")) {
              message.channel.send({
         embed: new Discord.RichEmbed() 
            .setColor("RED")
            .addField("**Used RAM 💾**", `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
                 .addField("**Ping📡**" , `${Date.now() - message.createdTimestamp}` + " ms")
                .addField("**Up time⌚**", timeCon(process.uptime()), true)
                .addField("**CPU Usage💿**", `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
             })
            }
          });
          function timeCon(time) {
            let days = Math.floor(time % 31536000 / 86400)
            let hours = Math.floor(time % 31536000 % 86400 / 3600)
            let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
            let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
            days = days > 9 ? days : "0" + days
            hours = hours > 9 ? hours : "0" + hours
            minutes = minutes > 9 ? minutes : "0" + minutes
            seconds = seconds > 9 ? seconds : "0" + seconds
            return `${days > 0 ? `${days}:` : ""}${(hours || days) > 0 ? `${hours}:` : ""}${minutes}:${seconds}`
        };

  

                    client.on("message", message => {
                        if(!message.channel.guild) return;
                if (message.content.startsWith("error$ping")) {
                    if(!message.channel.guild) return;
                    var msg = `${Date.now() - message.createdTimestamp}`
                    var api = `${Math.round(client.ping)}`
                    if (message.author.bot) return;
                let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username,message.author.avatarURL)
                .setColor("RANDOM")
                .addField("**Time Taken:**",msg + " ms 📶 ")
                .addField("**WebSocket:**",api + " ms 📶 ")
 message.channel.send({embed:embed});
                }
            });
client.on("message",function(message) {
    if(!message.channel.guild) return;
      if (message.content === prefix + "whohasmytag") {
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  
  if (message.author.bot) return;
  
  var discri = args[0]
  let discrim
  if(discri){
  discrim = discri;
  }else{
  discrim = message.author.discriminator;
  }
  if(discrim.length == 1){
  discrim = "000"+discrim
  }
  if(discrim.length == 2){
  discrim = "00"+discrim
  }
  if(discrim.length == 3){
  discrim = "0"+discrim
  }
  
  const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
  return message.channel.send(`
  **Found ${users.length} users with the discriminator #${discrim}**
  ${users.join("\n")}
  `);
  }
  });
  client.on("message", message => {
    if (message.content.startsWith ("error$invites")) {
     if(!message.channel.guild) return message.reply("** This command only for servers **");
         var mentionned = message.mentions.users.first();
        var os;
      if(mentionned){
          var os = mentionned.id;
      } else {
          var os = message.author.id;
          
      }
          var oss;
      if(mentionned){
          var oss = mentionned;
      } else {
          var oss = message.author;
          
      }
  message.guild.fetchInvites()
  .then(invites =>{
  if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, Does"t Have Invites :x:**`);
  message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ Member Joined By ${oss.username} !** :chart_with_upwards_trend: `)
  
  })
  
  
  
  }
  
  });
  
  client.on("message", message =>{
    if (message.author.bot) return;
    if(message.content == "error$type"){
message.channel.startTyping();
}
});
client.on("message", message =>{
    if (message.author.bot) return;
    if(message.content == "error$type"){
message.channel.stopTyping();
}
});

client.on("message", message => {
    if(message.content.startsWith("error$soundmessage")) {
    let args = message.content.split(" ").slice(1);
    let ar = args.join(" ");

    message.channel.send(ar,{tts:true});
};
});

client.on("message", message => {
    if (message.author.bot) return;
    if(message.content == "error$membersmode") {
    const embed = new Discord.RichEmbed()
    .addField(`Member Mode🔋`,"-",   true)
.addField(`💚 Online:   ${message.guild.members.filter(m=>m.presence.status == "online").size}`,"-",   true)
.addField(`❤  DND:     ${message.guild.members.filter(m=>m.presence.status == "dnd").size}`,"-",   true)
.addField(`💛 Idle:      ${message.guild.members.filter(m=>m.presence.status == "idle").size}`,"-",   true)   
.addField(`🖤 Offline:   ${message.guild.members.filter(m=>m.presence.status == "offline").size}`,"-",  true) 
.addField(`💙 All:  ${message.guild.memberCount}`,"-",   true)         
         message.channel.send({embed});

    }
  });

  client.on("message", message => {
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "serverimage"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

    client.on("message", msg => {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;
        let command = msg.content.split(" ")[0];
        command = command.slice(prefix.length);
        let args = msg.content.split(" ").slice(1);
      
          if(command === "clear") {
              const emoji = client.emojis.find("name", "wastebasket")
          let textxt = args.slice(0).join("");
          if(msg.member.hasPermission("MANAGE_MESSAGES")) {
          if (textxt == "") {
              msg.delete().then
          msg.channel.send("***``Set The Number For clear 👌``***").then(m => m.delete(3000));
      } else {
          msg.delete().then
          msg.delete().then
          msg.channel.bulkDelete(textxt);
              msg.channel.send("``\n Number of Messages Has Been cleared: " + textxt + "\n``").then(m => m.delete(3000));
              }    
          }
      }
      });

client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}"s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`Error bot.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
}; // Julian
}); // Codes - Toxic Codes

    client.on("message" , async (message) => {
        if (message.content.startsWith(prefix + "yn")) {
       
       let color = "0xffffff"
       
             let { body } = await superagent
           .get("https://yesno.wtf/api/");
           if(body.answer === "yes") color = "0x01DF01";
           if(body.answer === "no") color = "0xFF0000";
           const embed = new Discord.RichEmbed()
           .setColor(color)
           .setImage(`${body.image}`)
           message.channel.send(`**The magic API says:** **${body.answer}**`, {embed});
       
       };
       });

    client.on("message" , async (message) => {
        if (message.content === "error$password") {
       
       let color = "0x01DF01"
       
             let { body } = await superagent
           .get("https://www.passwordrandom.com/query?command=password&format=json&count=1");
           const embed = new Discord.RichEmbed()
           .setColor(color).setDescription(`**Password boi:** **${body.char}**`)
	   message.channel.send(`check your dms`)
           message.author.sendMessage(``, {embed});
       
       };
       });

    client.on("message" , async (message) => {
        if (message.content === "error$meme") {
       
       let color = "0x01DF01"
       
             let { body } = await superagent
           .get("https://meme-api.herokuapp.com/gimme/memes");
	   message.channel.send(`Subredit: r/${body.subreddit}`)
	   message.channel.send(`Title: ${body.title}`)
		message.channel.sendFile(`${body.url}`)
       
       };
       });

    client.on("message" , async (message) => {
        if (message.content === "error$cursedminecraft") {
       
       let color = "0x01DF01"
       
             let { body } = await superagent
           .get("https://meme-api.herokuapp.com/gimme/CursedMinecraft");
	   message.channel.send(`Subredit: r/${body.subreddit}`)
	   message.channel.send(`Title: ${body.title}`)
		message.channel.sendFile(`${body.url}`)
       
       };
       });
client.on("message", message => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    const Canvas = require("canvas")
    , Image = new Canvas.Image;
    const canvas = Canvas.createCanvas(700, 250);
    ctx = canvas.getContext("2d");
    
    

  ctx.font = "30px Impact";
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on("ready", () => {

});


client.on("message" , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(" ")[1])
    if(message.content.startsWith(prefix + "unban")) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("❌|**`You dont have permission`\`BAN_MEMBERS\`**");
        if(!user) return  message.channel.send(`Do this ${prefix}unban <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`Ban removed from \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle("**●Unban** !")
        .addField("**●User Unban :** ", `${user}` , true)
        .addField("**●By :**" ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    };
});

client.on("message", message => {

    if (message.content.startsWith(prefix + "tierlist")) {
        let q
        rea = message.content.substring(15)
        re = /\|/i
        if (re.test(rea)==false) {
            message.channel.send("Seperate your inputs with `|`s")
            return;
        }
        re = / *\| */i
        rea = rea.replace("\`", "")
        rea = rea.split(re)
        message.channel.send("Text to work with:" + rea)
        let tiers = ["", "", "", "", "", "", ""]
        console.log(rea)
        for (let i = 0; i<rea.length; i++) {
            q = Math.floor(Math.random()*7)
            if(tiers[q]=="") {
                tiers[q] = rea[i]
            } else {
                tiers[q] = tiers[q] + ", " + rea[i]
            }
        };
        q = "```S: " + tiers[0] + "\n"
        q = q + "A: " + tiers[1] + "\n"
        q = q + "B: " + tiers[2] + "\n"
        q = q + "C: " + tiers[3] + "\n"
        q = q + "D: " + tiers[4] + "\n"
        q = q + "E: " + tiers[5] + "\n"
        q = q + "F: " + tiers[6] + "```"
        message.channel.send(q)
    }

});

client.on("message", message => {
    if (!message.content.startsWith(adminprefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(adminprefix.length);
        if(command === "setwatching") {
            if (!devs.includes(message.author.id)) return message.reply("**Are you sure you are from bot team? write ```error$isimfrombotteam``` to make sure you are from bot team**")
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Watching Status **");
        client.user.setActivity(args ,{type: "WATCHING"});
        };
        if(command === "setplaying") {
            if (!devs.includes(message.author.id)) return message.reply("**Are you sure you are from bot team? write ```error$isimfrombotteam``` to make sure you are from bot team**")
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Playing Status **");
        client.user.setActivity(args ,{type: "PLAYING"});
        };
        if(command === "setlistening") {
            if (!devs.includes(message.author.id)) return message.reply("**Are you sure you are from bot team? write ```error$isimfrombotteam``` to make sure you are from bot team**")
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Listening Status **");
        client.user.setActivity(args ,{type: "LISTENING"});
        };
    }); 

      client.on("message", message => {
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        if (command === "say") {
            const args = message.content.split(" ").slice(1).join(" ")
            if (!args) return message.channel.send("** mmmm What i Say? **");
          message.channel.send(args);
        }
      });

let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: "Bot User",
    rep: 0,
   reps: "NOT YET",
   lastDaily:"Not Collected",
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile("./profile.json", JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "credits")) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:"Not Collected",
   credits: 1,
 };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
 message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
if(message.content.startsWith(prefix + "daily")) {


  if(profile[message.author.id].lastDaily != moment().format("hour")) {
   profile[message.author.id].lastDaily = moment().format("hour")
   profile[message.author.id].credits += 5
    message.channel.send(`**${message.author.username} you collect your \`5\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf("hour").fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + "send")) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}send @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}send @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn"t run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send("**!! I Cant Do it**");
				 let defineduser = "";
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile("./profile.json", JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ["5587" ," 9978" , "3785" , "7734" , "9864" , "7681" , "3758" , "7834" , "3489" , "1382" , "7389" , "8762" , "0889" , "0388" , "3316" , "0976" , "8603" , "1842" , "4565" , "9524" , "9524" , "0964" , "5930" , "5678" , "9567" , "6099" , "7058" , "0001" , "1324" , "9834" , "7668" , "0378" , "7055" , "9733" , "9876" , "9846" , "9685" , "8574" , "8975" , "9845" , "9862" , "0069" , "0807" , "0673" , "0813" , "1235" , "6879"];
var x2 = ["5587" ," 9978" , "3785" , "7734" , "9864" , "7681" , "3758" , "7834" , "3489" , "1382" , "7389" , "8762" , "0889" , "0388" , "3316" , "0976" , "8603" , "1842" , "4565" , "9524" , "9524" , "0964" , "5930" , "5678" , "9567" , "6099" , "7058" , "0001" , "1324" , "9834" , "7668" , "0378" , "7055" , "9733" , "9876" , "9846" , "9685" , "8574" , "8975" , "9845" , "9862" , "0069" , "0807" , "0673" , "0813" , "1235" , "6879"];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : Amount **  \n \`${x[x3]}\` ** : Write the next number to do the transfare **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ["time"] })
        r.catch(() => {
            message.delete()
            r.delete()
            msg.delete()
            message.channel.sendEmbed(embed)
        })
        r.then(s=> {
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
mentionned.send(` :credit_card: | Transfer Receipt \`\`\`You have received ${args[0]} from user ${message.author.username} ; (ID (${message.author.id})\`\`\``);
               message.channel.sendEmbed({embed})
        })
        })
        
		




}
      });	
