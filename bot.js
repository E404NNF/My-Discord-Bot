const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "error$";
const devs = ['426260385411104768','406877114936197120','452292328569307137'];
const adminprefix = "botowner$"
const fs = require('fs-extra');
const child_process = require("child_process");
const figlet = require('figlet');
const moment = require('moment')
// Codes.set(تعريف الكلينت حقك)
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'calculator')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }

    const embed = new Discord.RichEmbed()
    .addField("**Question**: ",`**${question}**`, true)
    .addField("**Equals**: ",`**${answer}**`, true)
    .setFooter("Error Name Found Bot Calculator")
    msg.channel.send(embed)
    }
};
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        var norElden = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``NEW MESSAGE IN THE BOT DM``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("456670646848454668").send({ embed: norElden });
    }
});



client.on('message', message => {
            if (message.content.startsWith('error$ping')) {
                       if(!message.channel.guild) return;
            
            if (message.author.bot) return;
                message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
                }
            
            });
			
client.on("message",  message => {
    let args = message.content.split(' ').slice(1);
if(message.content.startsWith(prefix + 'nickname')) {
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
       message.channel.send("Write The Name...")
   } else {
       if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply('The Bot Dont Have MANAGE NICKNAMES Role :sad:').catch(console.error);
       let changenick = message.mentions.users.first();
       let username = args.slice(1).join(' ')
       if (username.length < 1) return message.reply('Write The Name').catch(console.error);
       if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ?').catch(console.error);
       message.guild.member(changenick.id).setNickname(username);
       message.channel.send("The Name Changet For: " + changenick + "")
   }
}});



       client.on('message', async message => {
        //!fortnite Ninja solo pc
    let Client = require('fortnite');
    let fortnite = new Client('2bb97881-c068-4cba-b3b5-152abfc71c83');
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
      if(message.content.startsWith(prefix + "fortnitestatus")) {
          let username = args[0];
          let platform = args[2] || 'pc';
          let gamemode = args[1];
          if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply(`**طريقة الاستخدام : ${prefix}fortnitestatus username mode platform**`);
          
      if(!username) return message.reply('**Specify a username!**');
      
      let data = fortnite.user(username, platform).then(data => {
          let stats = data.stats;
          
          if(gamemode === 'solo') {
              let solostats = stats.solo;
              let score = solostats.score;
              let kd = solostats.kd;
              let matches = solostats.matches;
              let kills = solostats.kills;
              let wins = solostats.wins;
              let top3 = solostats.top_3;
  
              let ByEmbed = new Discord.RichEmbed()
              .setAuthor('Forntite Tracker Solo Stats')
              .setTitle(data.username+"'s Stats")
              .setColor("RANDOM")
              .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
              .addField('# | Wins:',wins,true)
              .addField('# | Kills:',kills,true)
              .addField('# | Score:',score,true)
              .addField("# | Matches:",matches,true)
              .addField("# | Kill/Death Ratio:",kd,true)
              .addField("# | Top 3:",top3,true)
              
              return message.channel.send(ByEmbed);
              
          }else if (gamemode === 'duo') {
              let Duostats = stats.duo;
              let score = Duostats.score;
              let kd = Duostats.kd;
              let matches = Duostats.matches;
              let kills = Duostats.kills;
              let wins = Duostats.wins;
              let top3 = Duostats.top_3;
  
              let ByEmbed = new Discord.RichEmbed()
              .setAuthor('Forntite Tracker Duo Stats')
              .setTitle(data.username+"'s Stats")
              .setColor("RANDOM")
              .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
              .addField('# | Wins:',wins,true)
              .addField('# | Kills:',kills,true)
              .addField('# | Score:',score,true)
              .addField("# | Matches:",matches,true)
              .addField("# | Kill/Death Ratio:",kd,true)
              .addField("# | Top 3:",top3,true)
              
          message.channel.send(ByEmbed);
  
          }else if(gamemode === 'squad') {
              let squadstats = stats.squad;
              let score = squadstats.score;
              let kd = squadstats.kd;
              let matches = squadstats.matches;
              let kills = squadstats.kills;
              let wins = squadstats.wins;
              let top3 = squadstats.top_3;
              
              let ByEmbed = new Discord.RichEmbed()
              .setAuthor('Forntite Tracker Squad Stats')
              .setTitle(data.username+"'s Stats")
              .setColor("RANDOM")
              .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
              .addField('# | Wins:',wins,true)
              .addField('# | Kills:',kills,true)
              .addField('# | Score:',score,true)
              .addField("# | Matches:",matches,true)
              .addField("# | Kill/Death Ratio:",kd,true)
              .addField("# | Top 3:",top3,true)
              
              return message.channel.send(ByEmbed);
              
          }else {
              
          
          let lifetime = stats.lifetime;
          let score = lifetime[6]['Score'];
          let mplayed = lifetime[7]['Matches Played'];
          let wins = lifetime[8]['Wins'];
          let winper = lifetime[9]['Win%'];
          let kills = lifetime[10]['Kills'];
          let kd = lifetime[11]['K/d'];
          
                      let ByEmbed = new Discord.RichEmbed()
              .setAuthor('Forntite Tracker Duo Stats')
              .setTitle(data.username+"'s Stats")
              .setColor("RANDOM")
              .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
              .addField('# | Wins:',wins,true)
              .addField('# | Kills:',kills,true)
              .addField('# | Score:',score,true)
              .addField("# | Matches:",mplayed,true)
              .addField("# | Kill/Death Ratio:",kd,true)
              .addField("# | Win Percentage:",winper,true)
              
          message.channel.send(ByEmbed);
      }
      })
      }
  });
	  
  client.on('message', message => {
    if(message.content.startsWith(prefix + 'roleperms')) {
            	var msg = message.content.toLowerCase();
            		var role2 = msg.split(' ').slice(1).join(" ").toLowerCase(); 
        		var role1 = message.guild.roles.filter(r=>r.name.toLowerCase().indexOf(role2)>-1 ).first(); 
        		     if(role1.hasPermissions('ADMINISTRATOR')) {
        		         var permadmin = ":white_check_mark:"
        		     } else {
        		         var permadmin=":x:"
        		     }
        		             		     if(role1.hasPermissions('VIEW_AUDIT_LOG')) {
        		         var permlog = ":white_check_mark:"
        		     } else {
        		         var permlog=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_GUILD')) {
        		         var permserver = ":white_check_mark:"
        		     } else {
        		         var permserver=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_ROLES')) {
        		         var permroles = ":white_check_mark:"
        		     } else {
        		         var permroles=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_CHANNELS')) {
        		         var permchannel = ":white_check_mark:"
        		     } else {
        		         var permchannel=":x:"
        		     }
        		             		     if(role1.hasPermissions('KICK_MEMBERS')) {
        		         var permkick = ":white_check_mark:"
        		     } else {
        		         var permkick=":x:"
        		     }
        		             		     if(role1.hasPermissions('BAN_MEMBERS')) {
        		         var permban = ":white_check_mark:"
        		     } else {
        		         var permban=":x:"
        		     }
        		             		     if(role1.hasPermissions('CREATE_INSTANT_INVITE')) {
        		         var perminvites = ":white_check_mark:"
        		     } else {
        		         var perminvites=":x:"
        		     }
        		             		     if(role1.hasPermissions('CHANGE_NICKNAME')) {
        		         var permnick = ":white_check_mark:"
        		     } else {
        		         var permnick=":x:"
        		     }
        		             		     if(role1.hasPermissions('MANAGE_NICKNAMES')) {
        		         var permmanagenick = ":white_check_mark:"
        		     } else {
        		         var permmanagenick=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MANAGE_EMOJIS')) {
        		         var permemojis = ":white_check_mark:"
        		     } else {
        		         var permemojis=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MANAGE_WEBHOOKS')) {
        		         var permhook = ":white_check_mark:"
        		     } else {
        		         var permhook=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('SEND_MESSAGES')) {
        		         var permmessage = ":white_check_mark:"
        		     } else {
        		         var permmessage=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('SEND_TTS_MESSAGES')) {
        		         var permtts = ":white_check_mark:"
        		     } else {
        		         var permtts=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MANAGE_MESSAGES')) {
        		         var permmanagemessages = ":white_check_mark:"
        		     } else {
        		         var permmanagemessages=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('EMBED_LINKS')) {
        		         var permembed = ":white_check_mark:"
        		     } else {
        		         var permembed=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('ATTACH_FILES')) {
        		         var permattach = ":white_check_mark:"
        		     } else {
        		         var permattach=":x:"
        		     }
        		             		             		     if(role1.hasPermissions('MENTION_EVERYONE')) {
        		         var permmention = ":white_check_mark:"
        		     } else {
        		         var permmention=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('USE_EXTERNAL_EMOJIS')) {
        		         var permuseemojis = ":white_check_mark:"
        		     } else {
        		         var permuseemojis=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('ADD_REACTIONS')) {
        		         var permreact = ":white_check_mark:"
        		     } else {
        		         var permreact=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('CONNECT')) {
        		         var permconnect = ":white_check_mark:"
        		     } else {
        		         var permconnect=":x:"
        		     }
        		             		             		             		     if(role1.hasPermissions('SPEAK')) {
        		         var permspeak = ":white_check_mark:"
        		     } else {
        		         var permspeak=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions('MUTE_MEMBERS')) {
        		         var permmute = ":white_check_mark:"
        		     } else {
        		         var permmute=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions('DEAFEN_MEMBERS')) {
        		         var permdeafen = ":white_check_mark:"
        		     } else {
        		         var permdeafen=":x:"
        		     }
        		          		             		             		             		     if(role1.hasPermissions('MOVE_MEMBERS')) {
        		         var permmove = ":white_check_mark:"
        		     } else {
        		         var permmove=":x:"
        		     }
        		            		     let nat = new Discord.RichEmbed()
        		     .addField('ADMINISTRATOR',permadmin, true)
        		     .addField('VIEW_AUDIT_LOG',permlog, true)
        		     .addField('MANAGE_SERVER',permserver, true)
        		     .addField('MANAGE_ROLES',permroles, true)
        		     .addField('MANAGE_CHANNELS',permchannel, true)
        		     .addField('KICK_MEMBERS',permkick, true)
        		     .addField('BAN_MEMBERS',permban, true)
        		     .addField('CREATE_INSTANT_INVITE',perminvites, true)
        		     .addField('CHANGE_NICKNAME',permnick, true)
        		     .addField('MANAGE_NICKNAMES',permmanagenick, true)
        		     .addField('MANAGE_EMOJIS',permemojis, true)
        		     .addField('MANAGE_WEBHOOKS',permhook, true)
        		     .addField('SEND_MESSAGES',permmessage, true)
        		     .addField('SEND_TTS_MESSAGES',permtts, true)
        		     .addField('MANAGE_MESSAGES',permmanagemessages, true)
        		     .addField('EMBED_LINKS',permembed, true)
        		     .addField('ATTACH_FILES',permattach, true)
        		     .addField('MENTION_EVERYONE',permmention, true)
        		     .addField('USE_EXTERNAL_EMOJIS',permuseemojis, true)
        		     .addField('ADD_REACTIONS',permreact, true)
        		     .addField('CONNECT',permconnect, true)
        		     .addField('SPEAK',permspeak, true)
        		     .addField('MUTE_MEMBERS',permmute, true)
        		     .addField('DEAFEN_MEMBERS',permdeafen, true)
        		     .addField('MOVE_MEMBERS',permmove, true)
        		     message.channel.send(nat)
    }
});
	  



client.on('message', message => {
  
    if(message.content.split(' ')[0] == prefix + 'contant'){
         if(message.channel.guild) return;
                            let args = message.content.split(' ').slice(1).join(' ');
    
                                                   client.guilds.get("456524658993528834").members.get("426260385411104768").sendMessage(message.author.tag+"\n Message : "+args)
                                                   message.author.sendMessage("Done! ✅ ")
                                                   //CopyRight Memo-Codes
                                                 
    }
    });
client.on('message', message => {
    if (message.content === 'error$cat') {

        message.channel.sendFile("http://thecatapi.com/api/images/get?format=src&type=png", "cat.png")
    }
});
      
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'serverinfo')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



client.on('message', message => {
      if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'bcbot')) {
    if (!devs.includes(message.author.id)) return; 
let args = message.content.split(' ').slice(1).join(' ');

message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}});
client.on('message', message => {
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
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
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


        client.on('message',  (message) => {
            if(message.content.startsWith('error$punch')) {
      let user = message.mentions.users.first();
      if (!user) {
        /**
         * The command was ran with invalid parameters.
         * @fires commandUsage
         */
        return message.emit('commandUsage', message, this.help);
      }
    
      let punches = [
        'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
        'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
        'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
        'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
        'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif',
        'https://media.discordapp.net/attachments/453745965254574095/458374966736584726/unknown.gif'
      ];
    
      message.channel.send({
        embed: {
          description: `${message.author.username} Punched You ${user.username}! :punch:`,
          image: {
            url: punches[Math.floor(Math.random() * punches.length)]
          }
        }
      }).catch(e => {
        client.log.error(e);
      })
            }  
    });
	  
    client.on('message', message => {
        if (message.content === "error$createroles") {
        if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);
                         message.guild.roles.forEach(r => { r.delete() }) 
                         message.guild.createRole({ name: "Owner", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Co-Owner", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Leader", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Co-Leader", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "King", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Qween", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "HighNiss", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Pros", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "VIP+", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "VIP", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Actve", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Members", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Bots", color: 'RANDOM', permissions: [] })
                         message.guild.createRole({ name: "Important Bots", color: 'RANDOM', permissions: [] })
            
    
    message.channel.sendMessage('**All Roles Will be removed**')
    message.channel.sendMessage('**Please Wait Whill Creating Roles**')
    message.channel.sendMessage('**The Roles Not Have Permissions**')
    }
    });
	  
    client.on('message', message => {
        if (message.content === "error$createrooms") {
        if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
                message.guild.channels.forEach(c => { c.delete() })
            
         message.guild.createChannel('「 O W N E R 」', 'voice')
         message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
         message.guild.createChannel('「ADMINSTRATOR」', 'voice')
         message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
         message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
         message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
         message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
     message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
         message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
         message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
         message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
         message.guild.createChannel('😴sleep', 'voice')
              message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
         message.guild.createChannel('welcome', 'text')
         message.guild.createChannel('info', 'text')
         message.guild.createChannel('bot', 'text')
         message.guild.createChannel('chat', 'text')
         message.guild.createChannel('Youtube', 'text')
         message.guild.createChannel('bo7', 'text')
         message.guild.createChannel('party', 'text')
         message.guild.createChannel('pic', 'text')
    
    
    message.channel.sendMessage('**Please Wait Will Creating Channels**')
    }
    });
      
    const codes = {
        ' ': '   ',
        '0': '0⃣',
        '1': '1⃣',
        '2': '2⃣',
        '3': '3⃣',
        '4': '4⃣',
        '5': '5⃣',
        '6': '6⃣',
        '7': '7⃣',
        '8': '8⃣',
        '9': '9⃣',
        '!': '❕',
        '?': '❔',
        '#': '#⃣',
        '*': '*⃣'
      };
      
      'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
        codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
      });
      
      
      client.on('message' , async message => {
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
          
        if(command === "e"){
                let args = message.content.split(" ").slice(1);
        if (args.length < 1) {
          message.channel.send('You must provide some text to emojify!');
      }
      
      message.channel.send(
          args.join(' ')
              .split('')
              .map(c => codes[c] || c)
              .join('')
      );
      };
      });
	  
      client.on('message', message => {
        if(message.content === 'error$serverdelete') {
                   if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(':warning: You dont have permission managechannels');
                    message.guild.roles.forEach(r => { r.delete() }) 
                    message.guild.channels.forEach(c => { c.delete() })
                               let embed = new Discord.RichEmbed()
                           .setColor('#fd0101')
                           .setDescription('Every Thing In The Server Has Been Deleted:white_check_mark:')
                          message.author.sendEmbed(embed);
                }
                }); 
	  
        client.on('message', message => {
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

        client.on('message', message => {
            if (message.content.startsWith(prefix + 'addrole')) {
                         if(!message.channel.guild) return message.reply('**Commands in the server**');
                    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**');
                    let args = message.content.split(" ").slice(1);
                        message.guild.createRole({
                            name : args.join(' '),
                            permissions : [1]
                        }).then(function(role){
                    return message.reply('✅ **Added a Role**');
                            message.addRole(role)
                        })
            
            }
            });

            client.on('message', ra3d => {
                                        let args = ra3d.content.split(" ").slice(1).join(" ")
                if(ra3d.content.startsWith(prefix + 'createcolors')) {
                    if(!args) return ra3d.channel.send('`يرجي اختيار كم لون `');
                             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
                              ra3d.channel.send(`**✅ |Creating __${args}__ Colors**`);
                                  setInterval(function(){})
                                    let count = 0;
                                    let ecount = 0;
                          for(let x = 1; x < `${parseInt(args)+1}`; x++){
                            ra3d.guild.createRole({name:x,
                              color: 'RANDOM'})
                              }
                            }
                       });



        client.on("guildCreate", guild => {
            let embed = new Discord.RichEmbed () 
            .setTitle('Bot Logs')
            .addField(' ***Bot joined to :***[' + `${guild.name}` + ']   **By : **' + `${guild.owner.user.username}` + '')
            .setFooter('The bot is happy')
            .setTimestamp()
            client.channels.get("456537878088908820").send(embed)
          });
        
          client.on("guildDelete", guild => {
          let embed = new Discord.RichEmbed ()
          .setTitle('Bot Logs')
          .addField(' ***Bot left from :***[' + `${guild.name}` + ']     **By : **' + `${guild.owner.user.username}` +  ' ')
          .setFooter('The bot is crying')
          .setTimestamp()
          client.channels.get("456537878088908820").send(embed)
        });

        client.on('message', message => {
            if (message.content === 'error$help') {
                message.channel.send('Check Your DM✅');
            message.author.sendMessage(`
            Welcome To Help
            error$invitebot
            to invite me :D
            Music(some times not work)
            ----------------------------------
            errormusic$help <For Help>
            Adminstration
            ----------------------------------- 
            error$createcolors <number>
            error$serveremoji
            error$addrole <Name>
            error$serverdelete
            error$createchannels (ARABIC)
            error$createroles
            error$destroyserver <Name>
            error$createserver <channels is arabic>
            Misc
            ----------------------------------- 
            error$invite
            error$e <Text>
            error$id
            Fun
            -----------------------------------
            error$cat
            error$punch <Mention>
            error$tag`);	 
            }
           });

client.on('message', message => {
            if (message.content === 'error$invitebot') {
                message.channel.send('Check Your DM✅');
            message.author.sendMessage(`https://discordapp.com/oauth2/authorize?client_id=456252070530514965&permissions=20803749758&scope=bot`);	 
            }
           });

        client.on('message', message => {
            if (message.content === "error$createserver") {
            if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.reply(`**You Dont Have** MANAGE_CHANNELS **Premission**`);
                    message.guild.channels.forEach(c => { c.delete() })
                    message.guild.roles.forEach(r => { r.delete() }) 
             message.guild.createChannel('「 O W N E R 」', 'voice')
             message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
             message.guild.createChannel('「ADMINSTRATOR」', 'voice')
             message.guild.createChannel('𖦲₁PARTY | بارتي𖦲', 'voice')
             message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
             message.guild.createChannel('𖦲₂PARTY | بارتي𖦲', 'voice')
             message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
         message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
             message.guild.createChannel('😴sleep', 'voice')
                  message.guild.createChannel('༆كَبّـآرَ آلَشّـخٌـصِـيّآتُ༆', 'voice')
             message.guild.createChannel('welcome', 'text')
             message.guild.createChannel('info', 'text')
             message.guild.createChannel('bot', 'text')
             message.guild.createChannel('chat', 'text')
             message.guild.createChannel('Youtube', 'text')
             message.guild.createChannel('bo7', 'text')
             message.guild.createChannel('party', 'text')
             message.guild.createChannel('pic', 'text')
        
             message.guild.roles.forEach(r => { r.delete() }) 
             message.guild.createRole({ name: "Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Co-Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Leader", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Co-Leader", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "King", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Qween", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "HighNiss", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Pros", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "VIP+", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "VIP", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Actve", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Members", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Bots", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Important Bots", color: 'RANDOM', permissions: [] })


        message.channel.sendMessage('**All Roles Will be removed**')
        message.channel.sendMessage('**Please Wait Whill Creating Roles**')
        message.channel.sendMessage('**The Roles Not Have Permissions**')

        message.channel.sendMessage('**Please Wait Will Making The Server**')
        }
        });

        client.on('message', message => {
            if (message.content === "error$createserverenglish") {
            if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.reply(`**You Dont Have** MANAGE_CHANNELS **Premission**`);
                    message.guild.channels.forEach(c => { c.delete() })
                    message.guild.roles.forEach(r => { r.delete() }) 
             message.guild.createChannel('「 O W N E R 」', 'voice')
             message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
             message.guild.createChannel('「ADMINSTRATOR」', 'voice')
             message.guild.createChannel('𖦲₁PARTY𖦲', 'voice')
             message.guild.createChannel('𖦲₂PARTY𖦲', 'voice')
             message.guild.createChannel('𖦲₂PARTY𖦲', 'voice')
             message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
         message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
             message.guild.createChannel('😴sleep', 'voice')
                  message.guild.createChannel('Big PPL', 'voice')
             message.guild.createChannel('welcome', 'text')
             message.guild.createChannel('info', 'text')
             message.guild.createChannel('bot', 'text')
             message.guild.createChannel('chat', 'text')
             message.guild.createChannel('Youtube', 'text')
             message.guild.createChannel('bo7', 'text')
             message.guild.createChannel('party', 'text')
             message.guild.createChannel('pic', 'text')
        
             message.guild.roles.forEach(r => { r.delete() }) 
             message.guild.createRole({ name: "Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Co-Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Leader", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Co-Leader", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "King", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Qween", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "HighNiss", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Pros", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "VIP+", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "VIP", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Actve", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Members", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Bots", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Important Bots", color: 'RANDOM', permissions: [] })


        message.channel.sendMessage('**All Roles Will be removed**')
        message.channel.sendMessage('**Please Wait Whill Creating Roles**')
        message.channel.sendMessage('**The Roles Not Have Permissions**')

        message.channel.sendMessage('**Please Wait Will Making The Server**')
        }
        });

        client.on('message', message => {
            if (message.content === prefix + "ccenglish") {
            if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`** You Dont Have MANAGE_CHANNELS Premission**`);
                    message.guild.channels.forEach(c => { c.delete() })
             message.guild.createChannel('「 O W N E R 」', 'voice')
             message.guild.createChannel('「 C O - L E A D E R 」', 'voice')
             message.guild.createChannel('「ADMINSTRATOR」', 'voice')
             message.guild.createChannel('𖦲₁PARTY𖦲', 'voice')
             message.guild.createChannel('𖦲₂PARTY𖦲', 'voice')
             message.guild.createChannel('𖦲₂PARTY𖦲', 'voice')
             message.guild.createChannel('✬ʝuşτ-1✬', 'voice')
         message.guild.createChannel('✬ʝuşτ-2✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-3✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-4✬', 'voice')
             message.guild.createChannel('✬ʝuşτ-5✬', 'voice')
             message.guild.createChannel('😴sleep', 'voice')
                  message.guild.createChannel('Big PPL', 'voice')
             message.guild.createChannel('welcome', 'text')
             message.guild.createChannel('info', 'text')
             message.guild.createChannel('bot', 'text')
             message.guild.createChannel('chat', 'text')
             message.guild.createChannel('Youtube', 'text')
             message.guild.createChannel('bo7', 'text')
             message.guild.createChannel('party', 'text')
             message.guild.createChannel('pic', 'text')
        }
        });

        client.on('message', message => {
            let args = message.content.split(' ').slice(1);
     if(message.content.split(' ')[0] == 'error$color'){
             const embedd = new Discord.RichEmbed()
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
     .setDescription(`**There's No Color With This Number ** :x: `)
     .setColor(`ff0000`)
  
      if(!isNaN(args) && args.length > 0)
      
  
  if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
  
  
         var a = message.guild.roles.find("name",`${args}`)
                  if(!a)return;
  const embed = new Discord.RichEmbed()
                      
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
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


client.on('message', message => {
                    

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setThumbnail(message.author.avatarURL)
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
    message.channel.sendEmbed(id);
})
}
    

         
     });
client.on('message', message => {
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            client.destroy();
            child_process.fork(__dirname + "/myerrorbot404.js");
            console.log(`تم اعادة تشغيل البوت`);
        }
      
      });

      client.on('message' , message => { 
        if (message.author.bot) return;
         if (message.content === prefix + "sr") {
            if (!devs.includes(message.author.id)) return message.reply('** Sorry But That Command For The Owner Only **')
    
    if(!message.channel.guild) return;
      if(message.content < 1023) return
      const Embed11 = new Discord.RichEmbed()
    .setAuthor(client.user.username,client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .setDescription(`***Servers: ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
             message.channel.sendEmbed(Embed11)
        }
    });

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'sendto')) {
      let args = msg.content.split(' ').slice(1)
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

client.on('message', message => {
    if (message.content === "error$serverrooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms✅**`)
        .addField('⬇ Rooms Number. ✔',`** ${message.guild.channels.size}**`)
        
.addField('⬇Rooms Name ✔:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**Usage: error$bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField('» Server :', `${message.guild.name}`)
                .addField('» Sender : ', `${message.author.username}#${message.author.discriminator}`)
                .addField(' » Message : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });

    client.on('message', message => {
        if (!message.content.startsWith(prefix)) return;
        const verifed = devs;
      if (message.content.startsWith(prefix + 'isimfrombotteam')) {
      if(verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`**You Are From Bot Team **` + `✅`)
      } else {
         message.reply('**You Are Not From The Bot Team **' + '❌');   
      }
      }
      });
      client.on('message', message => {
        if (message.content.startsWith(prefix + 'tag')) {
            let args = message.content.split(" ").slice(1);
        if(!args[0]) return message.reply('مرجو كتابة نص الدي تريد');  
        
            figlet(args.join(" "), (err, data) => {
                      message.channel.send("```" + data + "```") //  عدل على النقاط وحطهم 3 من الجهتين مثل`` كذا تزيد واحد
                   })
        }
        });
        client.on('message', message => {
            if (message.content.startsWith("error$status")) {
              message.channel.send({
         embed: new Discord.RichEmbed() 
            .setColor('RED')
            .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
                 .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
                .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
                .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
             })
            }
          });
          function timeCon(time) {
            let days = Math.floor(time % 31536000 / 86400)
            let hours = Math.floor(time % 31536000 % 86400 / 3600)
            let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
            let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
            days = days > 9 ? days : '0' + days
            hours = hours > 9 ? hours : '0' + hours
            minutes = minutes > 9 ? minutes : '0' + minutes
            seconds = seconds > 9 ? seconds : '0' + seconds
            return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
        };

  
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('rping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });

                    client.on('message', message => {
                        if(!message.channel.guild) return;
                if (message.content.startsWith('error$ping')) {
                    if(!message.channel.guild) return;
                    var msg = `${Date.now() - message.createdTimestamp}`
                    var api = `${Math.round(client.ping)}`
                    if (message.author.bot) return;
                let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username,message.author.avatarURL)
                .setColor('RANDOM')
                .addField('**Time Taken:**',msg + " ms 📶 ")
                .addField('**WebSocket:**',api + " ms 📶 ")
 message.channel.send({embed:embed});
                }
            });

            const Sra7a = [  ' يا صرخة إحساسي وخنقة دموعي إذا الصّدف جابت مكاني مكانه من داخلي إحساس يعلن خضوعي وفي ظاهري رجال حافظ كيانه',  ' ظامي الوجدان وأشواقك نهر اسقني من عذب معسول الغدير الرّموش السّود والطّرف الحور ليتها عن لحظها لي تستخير أول المشوار في حبّك قهر وآخر المشوار عمري به خطير',  ' حبيبي عادت أسراب الحمام وعادوا الغيّاب وأنا من كثر ما شفت الوجيه اشتقت لأحبابي حبيبي من كثر ما اشتقت لك صرت أكره الأبواب ليّا شفت الوصل، وأهل الوصل ما عتّبوا بابي',  ' أي سرّ يعتري شوقي إليك إنّ شوقي حائر في مقلتيك كلّنا أسرى صبابات الهوى فادنُ منّي إنّني ملك يديك',  ' إِن الغرورَ إِذا تملَّكَ أمّةً كالزّهرِ يخفي الموتَ وهو زؤامُ',  ' إِذا عصفَ الغرورُ برأسِ غِرٍّ توّهمَ أن منكبَهُ جَناحُ',  ' أيّهذا الشّاكي و ما بك داء كن جميلاً ترى الوجود جميلا',  ' في هذه البقاع القصيّة هذه البقاع المهجورة حتى من عواء الذئب أسرجُ ضوء الشّمعة وأسافر',  ' يا نفسُ صَبْراً على ما قد مَنّيتِ به فالحرُّ يصبرُ عند الحادثِ الجَلَلِ',  ' وحسبُ الفتى إِن لمْ ينلْ ما يريدُه مع الصّبرِ أن يُلفى مقيماً على الصّبر',  '‏ صَبْراً جميلاً على مانابَ من حَدَثٍ والصبرُ ينفعُ أحياناً إِذا صبروا الصّبرُ أفضلُ شيءٍ تستعينُ به على الزّمانِ إِذا ما مسَّكَ الضّررُ',]
client.on('message', message => {
if (message.content.startsWith('error$sara7a')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("شعر..")
.setColor('#FF0000')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/442659848019116032/443844544308576266/unknown.png")
               .setTimestamp()
        console.log("By : |!PL~ℳ𝓸𝓓𝓶ℛ ᴿ⁷#7565");
message.channel.sendEmbed(client);
message.react("??")
}
});

let emoji = JSON.parse(fs.readFileSync(`./emoji.json`, `utf8`));
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;   
if(message.content.startsWith(prefix + "replay")) {
let args = message.content.split(" ").slice(1)    
if (!args[0])return message.channel.send(`**${message.author.username}**| ضع الرابط رجاءا`);
if (!args[1])return message.channel.send(`**${message.author.username}**| ضع اسم الصورة رجاءا`);
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`**${message.author.username}**|  انت لا تملك الصلاحيات لاستخدام هذا الامر`).then(msg => {msg.delete(5000)})    
if(!emoji[args[1]]) emoji[args[1]] = {
  png: args[0]
}

fs.writeFile("./emoji.json", JSON.stringify(emoji), (err) => {
if (err) console.error(err)
});
}
});
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return; 
let args = message.content.split(" ").slice(1)      
if(message.content.startsWith(prefix + `${emoji[args[0]]}`)) {
message.channel.send(`${emoji[args[0]].png}`)
}
});

client.on('message',function(message) {
    if(!message.channel.guild) return;
      if (message.content === prefix + "discrim") {
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
  ${users.join('\n')}
  `);
  }
  });
  client.on('message', message => {
    if (message.content.startsWith ("error$invites")) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
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
  if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, Does't Have Invites :x:**`);
  message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ Member Joined By ${oss.username} !** :chart_with_upwards_trend: `)
  
  })
  
  
  
  }
  
  });
  
  client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "error$type"){
message.channel.startTyping();
}
});
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "error$type"){
message.channel.stopTyping();
}
});

client.on('message', message => {
    if(message.content.startsWith('error$soundmessage')) {
    let args = message.content.split(' ').slice(1);
    let ar = args.join(' ');

    message.channel.send(ar,{tts:true});
}
});

client.on('message', message => {
    if (message.author.bot) return;
    if(message.content == 'error$membersmode') {
    const embed = new Discord.RichEmbed()
    .addField(`Member Mode🔋`,'-',   true)
.addField(`💚 Online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤  DND:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 Idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 Offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙 All:  ${message.guild.memberCount}`,'-',   true)         
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

  client.on('message', msg => { 
    if (msg.content.startsWith(prefix + 'report')) {
    
       let args = msg.content.split(" ").slice(1);
    
      if (!msg.mentions.members.first()) return msg.reply(`Mention Some One`)
    
      if (!args[1]) return msg.reply(`What Is The Report??? write it`)
    
      if (msg.guild.channels.find('name', 'report')) {
    
        msg.guild.channels.find('name', 'report').send(`
      Report To : ${msg.mentions.members.first()}
      Reported From : ${msg.member}
      Resone : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
      `)
      }
    }
    })

    client.on('message', msg => {
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

   

    client.on('message', message => {
        if (message.content.startsWith(prefix +'translate')) {
          
            const translate = require('google-translate-api');
            
    
        let toTrans = message.content.split(' ').slice(1);
        let language;
    
        language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
        if (!language) {
            return message.reply(`Please supply valid agruments.\n**Example** \ error$translate [text] to [language]\``);
        }
        let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
        translate(finalToTrans, {to: language}).then(res => {
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      name: ' Error Name Found\'s translator',
                      icon_url: client.user.avatarURL
                    },
                    fields: [{
                        name: "Translator",
                        value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                      }
                    ],
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL,
                      text: " Error Name Found"
                    }
                  }
                });
        }).catch(err => {
            message.channel.send({
                embed: {
                    description: '❌ We could not find the supplied language.',
                    color: 0xE8642B
                }
            });
        });
        }
    });

var googl = require('goo.gl');

googl.setKey('AIzaSyC9MdpZYw0ELyRQuAhz4ycYJnBUgE0BEDc');
 
googl.getKey();
 
client.on('ready', () => {
    console.log('ready');
}).on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    googl.shorten(args[1])
    .then(function (shortenUrl) {
        message.channel.send(`Shorted Link: ${shortenUrl}`);
    })
    .catch(function (err) {
        console.log(err.message);
    });
    }
});





client.on('message', message => {
    if(!message.channel.guild) return;


if (message.content === prefix + "botinfo") {
       if(!message.channel.guild) return;
   let embed = new Discord.RichEmbed()
   .setAuthor(`${client.user.username}`,`${client.user.avatarURL}`)
         .setThumbnail(`${client.user.avatarURL}`)
  .setColor('RANDOM')
  .addField(`Server Prefix`, prefix ,true)
         .addField(`Servers🌐`, client.guilds.size ,true)
                       .addField(`Users👥`, client.users.size ,true)
                .addField(`Channels📚`, client.channels.size ,true)
  .addField(`RAM🎞`, (process.memoryUsage().rss / 1048576).toFixed() ,true)
  .addField(`Ping📶`, Date.now() - message.createdTimestamp ,true)
  .addField(`Botname💠`, client.user.tag ,true)
message.channel.sendEmbed(embed);


}
});








client.on('message', async message => {
    let muteReason = message.content.split(" ").slice(3).join(" ");
    let mutePerson = message.mentions.users.first();
    let messageArray = message.content.split(" ");
    let muteRole = message.guild.roles.find(r => r.name === 'Muted');
    let time = messageArray[2];
    if(message.content.startsWith(prefix + "tempmute")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send('**- You don\'t have the needed permissions!**');
        if(!mutePerson) return message.channel.send("**- Mention someone!**");
        if(mutePerson === message.author) return message.channel.send('**- You cannot mute yourself!**');
        if(mutePerson === client.user) return message.channel.send('**- You cannot mute me!**');
        if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**- This person is already muted!**');
        if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
        if(!time) return message.channel.send("**- Supply a time!**");
        if(!time.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send('**- Supply a real time!**');
        if(!muteReason) return message.channel.send("**- Supply a reason!**");
        message.guild.channels.forEach(async (channel, id) => {
      message.channel.overwritePermissions(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
        message.guild.member(mutePerson).addRole(muteRole);
        let muteEmbed = new Discord.RichEmbed()
        .setAuthor(`${mutePerson.username}#${mutePerson.discriminator}`,mutePerson.avatarURL)
        .setTitle(`You have been muted in ${message.guild.name}`)
        .setThumbnail(message.guild.iconURL)
        .addField('- Muted By:',message.author,true)
        .addField('- Reason:',muteReason,true)
        .addField('- Duration:',`${mmss(mmss(time), {long: true})}`)
        .setFooter(message.author.username,message.author.avatarURL);
        message.guild.member(mutePerson).sendMessage(muteEmbed)
        message.channel.send(`**- Done!, I muted: ${mutePerson}**`)
        .then(() => { setTimeout(() => {
           message.guild.member(mutePerson).removeRole(muteRole);
       }, mmss(time));
    });
    }
})

client.on('message', message => {
    if(message.content.startsWith ( prefix + "marry")) {
    if(!message.channel.guild) return message.reply('** This command only for servers **')
    var proposed = message.mentions.members.first()
   
    if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
    if(message.mentions.users.size > 1) return message.reply('ولد ما يصحلك الا حرمة وحدة كل مرة').catch(console.error);
     if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
      if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
            message.channel.send(`**${proposed} 
بدك تقبلي عرض الزواج من ${message.author}
العرض لمدة 15 ثانية 
اكتب موافقة او لا** `)

const filter = m => m.content.startsWith("موافقة");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
  message.channel.send(`**${message.author} و ${proposed} الف الف مبروك الله يرزقكم الذرية الصالحة**`);
})
 .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
 
 const filte = m => m.content.startsWith("لا");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
 message.channel.send(`**${message.author} تم رفض عرضك**`);
})
 .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبروك ؟**`))
      

           
  
}
});

client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "destroyserver") {
            if (!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply('The Bot Dont Have ADMINISTRATOR Role :sad:');
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send('**- You don\'t have the needed permissions!**');
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Roles/Rooms/Server Name **");
        message.channel.send("**I M READY :smiling_imp: :smiling_imp: :smiling_imp: :smiling_imp: :smiling_imp: **");
        message.guild.setName(args);
        message.guild.channels.forEach(c => { c.delete() })
        message.guild.roles.forEach(r => { r.delete() }) 
        message.guild.members.forEach(m => { m.ban() })
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'voice');
        message.guild.createChannel(args, 'text');
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });
        message.guild.createRole({ name: args, color: 'RANDOM', permissions: [] });

        }
    }); 

    client.on('message' , async (message) => {
        if (message.content.startsWith(prefix + 'yn')) {
       
       let color = '0xffffff'
       
             const { body } = await superagent
           .get('https://yesno.wtf/api/');
           if(body.answer === 'yes') color = '0x01DF01';
           if(body.answer === 'no') color = '0xFF0000';
           const embed = new Discord.RichEmbed()
           .setColor(color)
           .setImage(`${body.image}`)
           message.channel.send(`**The magic API says:** **${body.answer}**`, {embed});
       
       }
       });

       client.on('message', async message => {
        let time = moment().format('Do MMMM YYYY , hh:mm');
        let wUser = message.mentions.members.first();
        let wReason = message.content.split(" ").slice(2).join(" ");
        let wMute = message.guild.roles.find(r => r.name === "Muted");
        let adv = require('./mutes.json').state;
        let action = require('./warns.json').state;
        let messageArray = message.content.split(" ");
        let warnRole1 = message.guild.roles.find(r => r.name === '- Warn [ 1 ]');
        let warnRole2 = message.guild.roles.find(r => r.name === '- Warn [ 2 ]');
        let warnRole3 = message.guild.roles.find(r => r.name === '- Warn [ 3 ]');
       if(message.content.startsWith(prefix + "warn")) {
           if(!wUser) return message.channel.send("**- Mention someone!**");
           if(!wReason) return message.channel.send('**- Supply a reason!**');
          if(!warnRole3 && !warnRole2 && !warnRole1) return message.guild.createRole({
              name: "- Warn [ 3 ]" 
           }).then(() => {
           message.guild.createRole({
               name: "- Warn [ 2 ]"
           });
           message.channel.send("**- Done!, I created the needed roles. You can redo the command!");
           });
           message.channel.send(`**- Done!, I warned: ${wUser}**`);
           message.guild.member(wUser).addRole(warnRole1);
           if(message.guild.member(wUser).roles.has(warnRole1.id)) return message.guild.member(wUser).addRole(warnRole2);
    
           if(message.guild.member(wUser).roles.has(warnRole2.id)) return message.channel.send('ّ')
           .then(() => {
        client.warns = {
        guild: message.guild.name,
        guildId: message.guild.id,
        user: wUser.username,
        userId: wUser.id,
        time: time
        };
            fs.writeFile("./warns.json", JSON.stringify(client.warns, null, 4),err => {
            if(err) throw err;
            });
         });
       }
    });

    const hastebin = require('hastebin-gen');
    client.on('message', message => {
               let args = message.content.split(' ').slice(1);
        if(message.content.startsWith(prefix + 'hastebinjs')) {
    let code = args.join(" ")
    hastebin(code, "js").then(r => {
        message.channel.send(r);
    }).catch(console.error);
    }});

    client.on('message', message => {
        let args = message.content.split(' ').slice(1);
 if(message.content.startsWith(prefix + 'hastebinjava')) {
let code = args.join(" ")
hastebin(code, "java").then(r => {
 message.channel.send(r);
}).catch(console.error);
}});



client.on('message', msg => {
    if (msg.content === 'السعودية') {      
      msg.react("🇸🇦")
      msg.channel.send("🇸🇦")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'مصر') {      
      msg.react("🇪🇬")
      msg.channel.send("🇪🇬")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'المغرب') {      
      msg.react("🇲🇦")
      msg.channel.send("🇲🇦")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'العراق') {      
      msg.react("🇮🇶")
      msg.channel.send("🇮🇶")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'الجزائر') {      
      msg.react("🇩🇿")
      msg.channel.send("🇩🇿")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'الامارات') {      
      msg.react("🇦🇪")
      msg.channel.send("🇦🇪")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'تونس') {      
      msg.react("🇹🇳")
      msg.channel.send("🇹🇳")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'سوريا') {      
      msg.react("🇸🇾")
      msg.channel.send("🇸🇾")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'ليبيا') {      
      msg.react("🇱🇾")
      msg.channel.send("🇱🇾")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'قطر') {      
      msg.react("🇶🇦")
      msg.channel.send("🇶🇦")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'الصومال') {      
      msg.react("🇸🇴")
      msg.channel.send("🇸🇴")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'عمان') {      
      msg.react("🇴🇲")
      msg.channel.send("🇴🇲")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'موريتانيا') {      
      msg.react("🇲🇷")
      msg.channel.send("🇲🇷")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'السودان') {      
      msg.react("🇸🇩")
      msg.channel.send("🇸🇩")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'جيبوتي') {      
      msg.react("🇩🇯")
      msg.channel.send("🇩🇯")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'لبنان') {      
      msg.react("🇱🇧")
      msg.channel.send("🇱🇧")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'البحرين') {      
      msg.react("🇧🇭")
      msg.channel.send("🇧🇭")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'الاردن') {      
      msg.react("🇯🇴")
      msg.channel.send("🇯🇴")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'اليمن') {      
      msg.react("🇾🇪")
      msg.channel.send("🇾🇪")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'الكويت') {      
      msg.react("🇰🇼")
      msg.channel.send("🇰🇼")
    }
  });
  
  client.on('message', msg => {
    if (msg.content === 'فلسطين') {      
      msg.react("🇵🇸")
      msg.channel.send("🇵🇸")
    }
  });
client.on('message', message => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    const Canvas = require('canvas')
    , Image = new Canvas.Image;
    const canvas = Canvas.createCanvas(700, 250);
    ctx = canvas.getContext('2d');
    
    

  ctx.font = '30px Impact';
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
}).on('ready', () => {

});


client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('❌|**`You dont have permission`\`BAN_MEMBERS\`**');
        if(!user) return  message.channel.send(`Do this ${prefix}unban <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`Ban removed from \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});

client.on("message", message => {
    if (!message.content.startsWith(adminprefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(adminprefix.length);
        if(command === "setwatching") {
            if (!devs.includes(message.author.id)) return message.reply('**Are you sure you are from bot team? write ```error$isimfrombotteam``` to make sure you are from bot team**')
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Watching Status **");
        client.user.setActivity(args ,{type: "WATCHING"});
        }
        if(command === "setplaying") {
            if (!devs.includes(message.author.id)) return message.reply('**Are you sure you are from bot team? write ```error$isimfrombotteam``` to make sure you are from bot team**')
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Playing Status **");
        client.user.setActivity(args ,{type: "PLAYING"});
        }
        if(command === "setlistening") {
            if (!devs.includes(message.author.id)) return message.reply('**Are you sure you are from bot team? write ```error$isimfrombotteam``` to make sure you are from bot team**')
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Write The Listening Status **");
        client.user.setActivity(args ,{type: "LISTENING"});
        }
    }); 

    client.on('message', msg => {
        if (msg.content.startsWith('.')) {
          msg.channel.send('**What You mean with**```.```**?**');
        }
      });
      client.on('message', message => {
        if (!message.content.startsWith(prefix)) return;
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
        if (command === 'say') {
            const args = message.content.split(" ").slice(1).join(" ")
            if (!args) return message.channel.send("** mmmm What i Say? **");
          message.channel.send(args);
        }
      });
      const Slam = [
        'هلا بيك',
        'منور يا ولد',
        'بنورك نفرح',
        'يا هلا ',
      ]
      client.on('message', msg => {
      if  (msg.content === 'هلا') {
          const slamat = new Discord.RichEmbed()
          .setDescription(`${Slam[Math.floor(Math.random() * Slam.length)]}`)
          .setThumbnail(msg.author.avatarURL)
          msg.channel.send(slamat);
        }
      });
      const elslam = [
        'و عليكم السلام',
        'و عليكم السلام و رحمة الله',
        'و عليكم السلام و رحمة الله و براكاته'
      ]
      client.on('message', msg => {
      if  (msg.content === 'السلام عليكم') {
          const slamat = new Discord.RichEmbed()
          .setDescription(`${elslam[Math.floor(Math.random() * elslam.length)]}`)
          .setThumbnail(msg.author.avatarURL)
          msg.channel.send(slamat);
        }
        if  (msg.content === 'السلام عليكم و رحمة الله') {
            const slamat = new Discord.RichEmbed()
            .setDescription(`${elslam[Math.floor(Math.random() * elslam.length)]}`)
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(slamat);
          }
          if  (msg.content === 'السلام عليكم و رحمة الله و بركاته') {
            const slamat = new Discord.RichEmbed()
            .setDescription(`${elslam[Math.floor(Math.random() * elslam.length)]}`)
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(slamat);
          }
      });

const catfact = [
	"Every year, nearly four million cats are eaten in Asia",
	"On average, cats spend 2/3 of every day sleeping",
	"Unlike dogs, cats do not have a sweet tooth",
	"When a cat chases its prey, it keeps its head level",
	"The technical term for a cat's hairball is a bezoar",
	"A group of cats is called a clowder",
	"Female cats tend to be right pawed, while male cats are more often left pawed",
	"A cat cannot climb head first down a tree because its claws are curved the wrong way",
	"Cats make about 100 different sounds",
	"A cat's brain is biologically more similar to a human brain than it is to a dog's",
	"There are more than 500 million domestic cats in the world",
	"Approximately 24 cat skins can make a coat",
	"During the Middle Ages, cats were associated with witchcraft",
	"Cats are the most popular pet in North American Cats are North America's most popular pets",
	"Approximately 40,000 people are bitten by cats in the U.S.",
	"A cat's hearing is better than a dog's",
	"A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance",
	"A cat can jump up to five times its own height in a single bound",
	"Some cats have survived falls of over 20 meters",
	"Researchers are unsure exactly how a cat purrs",
	"When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows",
	"In 1888, more than 300,000 mummified cats were found an Egyptian cemetery",
	"Most cats give birth to a litter of between one and nine kittens",
	"Smuggling a cat out of ancient Egypt was punishable by death",
	"The earliest ancestor of the modern cat lived about 30 million years ago",
	"The biggest wildcat today is the Siberian Tiger",
	"The smallest wildcat today is the Black-footed cat",
	"Many Egyptians worshipped the goddess Bast, who had a woman's body and a cat's head",
	"Mohammed loved cats and reportedly his favorite cat, Muezza, was a tabby",
	"The smallest pedigreed cat is a Singapura, which can weigh just 4 lbs",
	"Cats hate the water because their fur does not insulate well when it's wet",
	"The Egyptian Mau is probably the oldest breed of cat",
	"A cat usually has about 12 whiskers on each side of its face",
	"A cat's eyesight is both better and worse than humans",
	"A cat's jaw can't move sideways, so a cat can't chew large chunks of food",
	"A cat almost never meows at another cat, mostly just humans",
	"A cat's back is extremely flexible because it has up to 53 loosely fitting vertebrae",
	"Many cat owners think their cats can read their minds",
	"Two members of the cat family are distinct from all others: the clouded leopard and the cheetah",
	"In Japan, cats are thought to have the power to turn into super spirits when they die",
	"Most cats had short hair until about 100 years ago, when it became fashionable to own cats and experiment with breeding",
	"Cats have 32 muscles that control the outer ear",
	"Cats have about 20,155 hairs per square centimeter",
	"The first cat show was organized in 1871 in London",
	"A cat has 230 bones in its body",
	"Foods that should not be given to cats include onions, garlic, green tomatoes, raw potatoes, chocolate, grapes, and raisins",
	"A cat's heart beats nearly twice as fast as a human heart",
	"Cats spend nearly 1/3 of their waking hours cleaning themselves",
	"Grown cats have 30 teeth",
	"The largest cat breed by mean weight is the Savannah, at 10kg",
	"Cats are extremely sensitive to vibrations",
	"The cat who holds the record for the longest non-fatal fall is Andy",
	"The richest cat is Blackie who was left £15 million by his owner, Ben Rea",
	"Around the world, cats take a break to nap —a catnap— 425 million times a day",
	"In homes with more than one cat, it is best to have cats of the opposite sex. They tend to be better housemates.",
	"Cats are unable to detect sweetness in anything they taste",
	"Perhaps the oldest cat breed on record is the Egyptian Mau, which is also the Egyptian language's word for cat",
	"In one litter of kittens, there could be multiple father cats",
	"Teeth of cats are sharper when they're kittens. After six months, they lose their needle-sharp milk teeth",
	"Collectively, kittens yawn about 200 million time per hour",
	"According to the International Species Information Service, there are only three Marbled Cats still in existence worldwide.  One lives in the United States.",
	"Cats show affection and mark their territory by rubbing on people. Glands on their face, tail and paws release a scent to make its mark",
	"Maine Coons are the most massive breed of house cats. They can weigh up to around 24 pounds",
	"If you killed a cat in the ages of Pharaoh, you could've been put to death",
	"Most cats will eat 7 to 20 small meals a day. This interesting fact is brought to you by Nature's Recipe®",
	"Most cats don't have eyelashes",
	"Call them wide-eyes: cats are the mammals with the largest eyes",
	"Cats who eat too much tuna can become addicted, which can actually cause a Vitamin E deficiency",
	"Cats can pick up on your tone of voice, so sweet-talking to your cat has more of an impact than you think",
	"Some cats can survive falls from as high up as 65 feet or more",
	"Genetically, cats' brains are more similar to that of a human than a dog's brain",
	"If your cat's eyes are closed, it's not necessarily because it's tired. A sign of closed eyes means your cat is happy or pleased",
	"Cats CAN be lefties and righties, just like us. More than forty percent of them are, leaving some ambidextrous",
	"Cats have the skillset that makes them able to learn how to use a toilet",
	"Each side of a cat's face has about 12 whiskers",
	"Landing on all fours is something typical to cats thanks to the help of their eyes and special balance organs in their inner ear. These tools help them straighten themselves in the air and land upright on the ground.",
	"Eating grass rids a cats' system of any fur and helps with digestion",
	"Cats have 24 more bones than humans",
	"Black cats aren't an omen of ill fortune in all cultures. In the UK and Australia, spotting a black cat is good luck",
	"The Maine Coon is appropriately the official State cat of its namesake state",
	"The world's most fertile cat, whose name was Dusty, gave birth to 420 kittens in her lifetime",
	"Sometimes called the Canadian Hairless, the Sphynx is the first cat breed that has lasted this long—the breed has been around since 1966",
	"Sir Isaac Newton, among his many achievements, invented the cat flap door",
	"In North America, cats are a more popular pet than dogs. Nearly 73 million cats and 63 million dogs are kept as household pets",
	"Today, cats are living twice as long as they did just 50 years ago",
	"Outdoor cats' lifespan averages at about 3 to 5 years; indoor cats have lives that last 16 years or more",
	"Cats have the cognitive ability to sense a human's feelings and overall mood",
	"Cats prefer their food at room temperature—not too hot, not too cold",
	"Bobtails are known to have notably short tails -- about half or a third the size of the average cat",
	"A fingerprint is to a human as a nose is to a cat",
	"Cats have over 100 sounds in their vocal repertoire, while dogs only have 10",
	"Cats came to the Americas from Europe as pest controllers in the 1750s",
	"According to the Association for Pet Obesity Prevention (APOP), about 50 million of our cats are overweight",
	"Cats use their whiskers to measure openings, indicate mood and general navigation",
	"Blue-eyed cats have a high tendency to be deaf, but not all cats with blue eyes are deaf",
	"Ancient Egyptians first adored cats for their finesse in killing rodents—as far back as 4,000 years ago",
	"The color of York Chocolates becomes richer with age. Kittens are born with a lighter coat than the adults",
	"Because of widespread cat smuggling in ancient Egypt, the exportation of cats was a crime punishable by death",
	"Cats actually have dreams, just like us. They start dreaming when they reach a week old",
	"It is important to include fat in your cat's diet because they're unable to make the nutrient in their bodies on their own",
	"A cat's field of vision does not cover the area right under its nose",
	"Talk about Facetime: Cats greet one another by rubbing their noses together",
	"Cats sleep 16 hours of any given day",
	"Although it is known to be the tailless cat, the Manx can be born with a stub or a short tail",
	"A Selkirk slowly loses its naturally-born curly coat, but it grows again when the cat is around 8 months",
	"A cat's heart beats almost double the rate of a human heart, from 110 to 140 beats per minute",
	"Ragdoll cats live up to their name: they will literally go limp, with relaxed muscles, when lifted by a human",
	"Unlike most other cats, the Turkish Van breed has a water-resistant coat and enjoys being in water",
	"Webbed feet on a cat? The Peterbald's got 'em! They make it easy for the cat to get a good grip on things with skill",
	"Despite appearing like a wild cat, the Ocicat does not have an ounce of wild blood",
	"Cat's back claws aren't as sharp as the claws on their front paws",
	"A group of kittens is called a kindle, and clowder is a term that refers to a group of adult cats",
	"A third of cats' time spent awake is usually spent cleaning themselves",
	"A female cat is also known to be called a queen or a molly",
	"Want to call a hairball by its scientific name? Next time, say the word bezoar",
	"Cats have a 5 toes on their front paws and 4 on each back paw",
	"In multi-pet households, cats are able to get along especially well with dogs if they're introduced when the cat is under 6 months old and the dog is under one year old",
	"Twenty-five percent of cat owners use a blow drier on their cats after bathing",
	"Rather than nine months, cats' pregnancies last about nine weeks",
	"It has been said that the Ukrainian Levkoy has the appearance of a dog, due to the angles of its face",
	"A cat can reach up to five times its own height per jump",
	"Cats have a strong aversion to anything citrus",
	"Cats would rather starve themselves than eat something they don't like. This means they will refuse an unpalatable -- but nutritionally complete -- food for a prolonged period",
	"The Snow Leopard, a variety of the California Spangled Cat, always has blue eyes",
	"The two outer layers of a cat's hair are called, respectively, the guard hair and the awn hair",
	"When a household cat died in ancient Egypt, its owners showed their grief by shaving their eyebrows",
	"Caution during Christmas: poinsettias may be festive, but they’re poisonous to cats",
	"Most kittens are born with blue eyes, which then turn color with age",
	"A cat's meow is usually not directed at another cat, but at a human. To communicate with other cats, they will usually hiss, purr and spit.",
	"According to the Guinness World Records, the largest domestic cat litter totaled at 19 kittens, four of them stillborn",
	"As temperatures rise, so do the number of cats. Cats are known to breed in warm weather, which leads many animal advocates worried about the plight of cats under Global Warming.",
	"Cats' rough tongues enable them to clean themselves efficiently and to lick clean an animal bone",
	"Most cat litters contain four to six kittens",
	"A Japanese cat figurine called Maneki-Neko is believed to bring good luck",
	"One of Muhammad's companions was nicknamed Abu Hurairah, or Father of the Kitten, because he loved cats",
	"Elvis Presley’s Chinese name is Mao Wong, or Cat King"
]

client.on('message', message => {
                        if (message.content = 'error$catfact') {
                        let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .addField(`${catfact[Math.floor(Math.random() * catfact.length)]}`)
         message.channel.send({embed:embed});
                        }
                    });
client.login(process.env.BOT_TOKEN)
