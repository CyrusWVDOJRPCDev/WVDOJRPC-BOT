const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = '>'

client.once('ready', () => {
    console.log('WVDOJRPC Official Bot Is Online!')
    client.user.setActivity('Protect the Mountain State!', { type: "PLAYING"}).catch(console.error);
})

client.on('message', message=> {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){


            case 'version':
                message.channel.send("<:760857074753077298:761259642319011901> Hello, my current version is, **1.0.1**<:760857074753077298:761259642319011901>")
                break;

            case 'miniannouncement':
                message.channel.send(`Hey guys someone is hosting a mini tonight! Who all is going?\n <@&759848018983256075>`).then(messageReaction => {
                    messageReaction.react("✅");
                    messageReaction.react("❎");
                });

                break;

            case 'activitycheck':
                message.channel.send(`__Activity Check__\n San Andreas Finest Role-Play Community Activity Check!\n\n Please make sure you are attending every mandatory RP and training.\n **Please reat to the message below with the given reaction.**\n || @everyone || \nSincerly,\n SAFRPC Command Team.`)
                break;

            case 'spookyszn':
                const spoookyembed = new Discord.MessageEmbed()
                .setColor('#eb6123')
                .setTitle("Spoooooookyyyyy Szn!!")
                .addField("Happy Spooky Szn 2020!", `Happy christmas, I mean spooky szn! Possible purge on October 31st!(Optional To Go)`)
                message.channel.send(spoookyembed);
                break;


            case 'aopvote':
                const aopvote = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle('Area Of Patrol Vote.')
                .addField("City", "React with <:aop_city:751577720952979466> for city.")
                .addField("Sandy", "React with <:aop_sandy:751577720789532802> for Sandy Shores.")
                .addField("Paleto", "React with <:aop_paleto:751577721204637717> for Paleto Bay")
                .setDescription("If we have a ton of people in the RP and everyone votes either Paleto and or Sandy, we will do the whole County.")
                message.channel.send(aopvote);
                break;

            case 'poll':
                const pollembed = new Discord.MessageEmbed()
                .setColor(0xFFC300)
                .setTitle("How to Iititate a Poll!")
                .setDescription("Use: >poll to initiate a simple yes or no poll")
                .addField("Are you fucking dumb!", "Are you that fuckin' retarded you don't know how to start a poll!!")
                if(!args[1]){
                    message.channel.send(pollembed)
                }

                let msgArgs = args.slice(1).join(" ");

                message.channel.send(msgArgs).then(messageReaction => {
                    messageReaction.react("✅");
                    messageReaction.react("❎");
                });

                break;

                case 'Mandatorycheck':
                    message.channel.send(`__Mandatory Roleplay!__\n There is a Mandatory RP today! Please react with the given reaction if you are able to go!\n\n || @everyone ||`).then(messageReaction => {
                        messageReaction.react("✅");
                        messageReaction.react("❎");
                    });
                    break;
        case 'ping': {
            message.channel.send("Pinging...").then(m =>{
                var ping = m.createdTimestamp - message.createdTimestamp;
                var clientping = Math.round(client.pi);
    
                m.edit(`**:ping_pong: Pong! :ping_pong:**\n Bots ping is: __${ping}ms__`);
            });
        }
        break;






    case 'avatar':
        message.reply(message.author.displayAvatarURL())
        break;

case 'av':
    message.reply(message.author.displayAvatarURL())
        break;
        



                


                    }




})

client.login('NOT PUBLIC');
