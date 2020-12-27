const Discord = require('discord.js');

module.exports = client => {
//==========================================   Embed 1   ==========================================//

    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === "example embed") {
            
            const embed1 = new Discord.MessageEmbed()
            .setColor("4ECFE6")
            .setTitle("Stuff To Know")
            .addFields(
                {
                    name: "(1) IMPORTANT!",
                    value: `Warning you now, if you say anything about cook being a bad coder. 
                    We will run you into the ground, ruin your life and make sure no server ever wants you ever again`,
                    iniline: false,
                },
                {
                    name: "(2) People We Love",
                    value: `
                    George Clooooooooney
                    Benedict Cucumber
                    Martini Freeman
                    Morioriorioriarty
                    That dude from that one comercial`,
                    iniline: false,
                },
                {
                    name: "(3) Artwork",
                    value: `Wanna go look at this thing I made, its so cool...What do you think, do you like it? I have no idea why you are here but i gotta say, I didn't actually make anything, I'm just creepy as hell.....Why the fuck are you still here dude, I have a carving knife i use to slice up Tucans. You are about to die and all you are doing is reading this, sitting down, questioning why you are still here. Leave. NOW!`,
                    inline: false,
                },
                {
                    name: "(4) Proffesional Colors",
                    value: `
                    Blue-Glue
                    Grey-Led
                    Blue-Tac`,
                    inline: false,
                },
                {
                    name: "(5) English Words That Don't Have A Name And Suck",
                    value: `
                    Can & Can
                    Match & Match
                    Left & Left
                    *Continue It For Us*`,
                    inline: false,
                },
                )
            
            message.channel.send(embed1)
            console.log("Update Sent");
            
            // console.log(message.member);
        };
    });
};
