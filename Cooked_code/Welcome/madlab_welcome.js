const Discord = require('discord.js');

module.exports = client => {
//==========================================   Mad Lab Welcome   ==========================================//

    //channel IDs
    const cookWelcomeChannel = "762617904109060116"; 
    const cookRolesChannel = "762632379885158421";


    /*
    // Will need its own discord bot for a specialised welcome
    client.on("guildMemberAdd", member => {
        
        const serverIcon = member.guild.iconURL();
        
        const welcomeEmbed = new Discord.MessageEmbed()
        .setAuthor("Mad Lab", serverIcon)
        .setColor("35363A")
        .setThumbnail(serverIcon)
        .addFields(
            {
                name: "The Mad Lab",
                value: `Hey <@${member.id}>, Welcome To The Mad Lab! \n
                Invite Your Friends: https://discord.gg/YWjgyGrW`,
                iniline: false,
            },
            // {
            // 	name: "\u200B",
            // 	value: "\u200B"
            // },
            {
                name: "Getting Started?",
                value: `Please Check Out ${member.guild.channels.cache.get(cookRolesChannel).toString()} To Assign Yourself A Role In Our SAFE Server`,
                iniline: false,
            },
            {
                name: "Mad Lab Socials",
                value: `Facebook - [Elon Musk](https://www.facebook.com/TheElonmusk/)`,
                // "[Velox On Twitter](https://twitter.com/wearevelox?s=09)"
                iniline: false,
            },
            )
        .setImage("https://cdn.discordapp.com/attachments/717586690041970688/778782948337123338/Honkai_banner_WIP.png")
        .setFooter("Footer Text", serverIcon)
        .setTimestamp()
                
                
        member.guild.channels.cache.get(cookWelcomeChannel).send(welcomeEmbed);
        
        
        console.log("Welcomed Mad Lab User");
        
        // console.log(member);
                
                
    });
    */  
}