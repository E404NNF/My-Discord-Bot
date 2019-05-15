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
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on('ready', function(){
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


client.on('message', msg => {
if (msg.content.startsWith(prefix + 'cal')) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**Write the math problem **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 The math problem is :thinking:  : ${question}

 The Answer is :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
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
      
client.on('message', message => {
    if (message.content === 'error$dog') {

        message.channel.sendFile("http://thedogapi.com/api/images/get?format=src&type=png", "dog.png")
    }
});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'serverinfo')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** ServerType **',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** Roles **',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴** Members Numbers **',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵** ONLINE **',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝** Channels **',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤** Voice Channels**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑** Creator **',`**${msg.guild.owner}**`,true)
      .addField('🆔** Server ID **',`**${msg.guild.id}**`,true)
      .addField('📅** Server created in **',msg.guild.createdAt.toLocaleString())
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
                    if(!args) return ra3d.channel.send('` enter how much colors `');
                             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` PERMISSION NEEDED**'); 
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
            **The help is not complete sorry the creator too lazy to add all the commands xDDD try find the commands with ur self**
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
            error$fortnite
            Fun
            -----------------------------------
            error$cat
            error$punch <Mention>
            error$tag
            Economy
            -----------------------------------
            error$daily
            error$send <Mention> <Numbers>
            error$credits`);	 
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
             message.guild.createChannel('welcome', 'text')
             message.guild.createChannel('info', 'text')
             message.guild.createChannel('bot', 'text')
             message.guild.createChannel('chat', 'text')
             message.guild.createChannel('Youtube', 'text')
             message.guild.createChannel('party', 'text')
             message.guild.createChannel('pic', 'text')
        
             message.guild.roles.forEach(r => { r.delete() }) 
             message.guild.createRole({ name: "Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Co-Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Admin", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Moderator", color: 'RANDOM', permissions: [] })
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
             message.guild.createChannel('welcome', 'text')
             message.guild.createChannel('info', 'text')
             message.guild.createChannel('bot', 'text')
             message.guild.createChannel('chat', 'text')
             message.guild.createChannel('Youtube', 'text')
             message.guild.createChannel('party', 'text')
             message.guild.createChannel('pic', 'text')
        
             message.guild.roles.forEach(r => { r.delete() }) 
             message.guild.createRole({ name: "Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Co-Owner", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Admin", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: "Moderator", color: 'RANDOM', permissions: [] })
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
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }
      
      });

client.on('message', message => {
    if(message.content === adminprefix + "shutdown") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **Who OOOFFFFFFFED the bot is ${message.author.username}**`);
            console.log(`⚠️OOOFFFFFFF⚠️`);
            client.destroy();
            console.log(`oof`);
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

    if (message.content.startsWith(prefix + 'tierlist')) {
        let q
        rea = message.content.substring(10)
        re = /\|/i
        if (re.test(rea)==false) {
            message.channel.send("Seperate your inputs with `|`s")
            return;
        }
        re = / *\| */i
        rea = rea.replace("\`", "")
        rea = rea.split(re)
        let tiers = ['', '', '', '', '', '', '']
        console.log(rea)
        for (let i = 0; i<rea.length; i++) {
            q = Math.floor(Math.random()*7)
            if(tiers[q]=="") {
                tiers[q] = rea[i]
            } else {
                tiers[q] = tiers[q] + ", " + rea[i]
            }
        }
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

let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {
  if (message.author.bot) return;
 if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'Bot User',
    rep: 0,
   reps: 'NOT YET',
   lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
client.on("message", (message) => {
  let men = message.mentions.users.first()
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credits')) {
  if(men) {
  if (!profile[men.id]) profile[men.id] = {
   lastDaily:'Not Collected',
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


  if(profile[message.author.id].lastDaily != moment().format('hour')) {
   profile[message.author.id].lastDaily = moment().format('hour')
   profile[message.author.id].credits += 5
    message.channel.send(`**${message.author.username} you collect your \`5\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('hour').fromNow()}**`)
}
}
let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(2);
let sender = message.author
if(message.content.startsWith(prefix + 'send')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}send @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}send @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
             if(profile[message.author.id].credits < args[0]) return message.channel.send("**Your Credits is not enough  that**")
if(args[0].startsWith("-")) return  message.channel.send('**!! I Cant Do it**');
				 let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            if(defineduser.id === message.author.id) return message.channel.send("***Transfering to your self hah ?!***")
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 310;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
var x = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
var x2 = ['5587' ,' 9978' , '3785' , '7734' , '9864' , '7681' , '3758' , '7834' , '3489' , '1382' , '7389' , '8762' , '0889' , '0388' , '3316' , '0976' , '8603' , '1842' , '4565' , '9524' , '9524' , '0964' , '5930' , '5678' , '9567' , '6099' , '7058' , '0001' , '1324' , '9834' , '7668' , '0378' , '7055' , '9733' , '9876' , '9846' , '9685' , '8574' , '8975' , '9845' , '9862' , '0069' , '0807' , '0673' , '0813' , '1235' , '6879'];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` \`${args}\`** : Amount **  \n \`${x[x3]}\` ** : Write the next number to do the transfare **`).then(msg1=> { 
        var r = message.channel.awaitMessages(msg => msg.content == x2[x3], { maxMatches : 1, time : 60000, errors : ['time'] })
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
               message.channel.sendEmbed(embed)
        })
        })
        
		




}

      });

client.login(process.env.BOT_TOKEN)
