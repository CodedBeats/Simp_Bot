const Discord = require('discord.js');

module.exports = client => {
//==========================================   Velox Welcome   ==========================================//
/*
    //channel IDs
    const veloxWelcomeChannel = ""
	const veloxAboutUsChannel = "753614485960523876";	
	const veloxSantaRulesChannel = "678218715166146601";
	const veloxRoleClaimChannel = "764460926639276053";
    

	// Will need its own discord bot for a specialised welcome
	// this code is called when someone joins the server
	client.on("guildMemberAdd", member => {
		
		// define server's avatar as an icon
        const serverIcon = member.guild.iconURL();
        
		// construct embed	
        const welcomeEmbedPM = new Discord.MessageEmbed()
        .setAuthor("Mad Lab", serverIcon)
        .setColor("35363A")
        .setThumbnail(serverIcon)
        .setTitle(`Welcome To Velox!`)
        .setDescription(`Hey <@${member.id}>, Welcome To Velox \n 
                        Invite Your Friends https://discord.gg/YWjgyGrW`)
        // set content
        .addFields(
            {
                name: "Getting Started?",
                value: 
                `Familiarize yourself with 
                ${member.guild.channels.cache.get(veloxAboutUsChannel).toString()} & ${member.guild.channels.cache.get(veloxSantaRulesChannel).toString()}
                Once you have read through them, check out 
                ${member.guild.channels.cache.get(veloxRoleClaimChannel).toString()} to view & assign available roles, and to learn how to be notified for social media posts!`,
                iniline: false,
            },
            // {
            // 	name: "\u200B",
            // 	value: "\u200B"
            // },
            {
                name: "Velox Socials",
                value: `
                [Velox On Twitch](https://www.twitch.tv/wearevelox)
                [Velox On Instagram](https://www.instagram.com/wearevelox/)
                [Velox On Twitter](https://twitter.com/wearevelox)
                [Velox On YouTube](https://www.youtube.com/channel/UCqW_EYUJuHeiGRw4Y8WsEkw)`,
                iniline: false,
            },
            )
        // set banner
        .setImage("https://cdn.discordapp.com/attachments/717586690041970688/786177447901134878/VeloxBannerFINISHED.png")
        .setFooter("Footer Text", serverIcon)
        .setTimestamp()
        
        // private message the user
        member.send(welcomeEmbedPM)

        // log the sucessful command in the terminal
        console.log("Welcome Messsage Tested");

        // log all the information of the new user
        // console.log(message.member);			
    });
*/
}
