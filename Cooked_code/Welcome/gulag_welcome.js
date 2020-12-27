const Discord = require('discord.js');

module.exports = client => {
//==========================================   Gulag Welcome   ==========================================//

    //channel IDs
	const suzuWelcomeChannel = "743060106996088843";


	/*
	// Will need its own discord bot for a specialised welcome
	client.on("guildMemberAdd", member => {
		
		const serverIcon = member.guild.iconURL();
		
		const welcomeEmbed = new Discord.MessageEmbed()
		.setAuthor("Gulag", serverIcon)
		.setColor("35363A")
		.setThumbnail(serverIcon)
		.addFields(
			{
				name: "The The Gulag",
				value: `Hey <@${member.id}>, Welcome To The Gulag! \n
				Invite Your Friends: *Gulag Invite Here*`,
				iniline: false,
			},
			// {
			// 	name: "\u200B",
			// 	value: "\u200B"
			// },
			{
				name: "Getting Started?",
				value: `Please Check Out Nothing Cause This Is The Gulag, You Will Find Out The Rules On Your Own`,
				iniline: false,
			},
			{
				name: "Gulag Socials",
				value: `Facebook - [Elon Musk](https://www.facebook.com/TheElonmusk/)`,
				iniline: false,
			},
			)
		.setImage("https://cdn.discordapp.com/attachments/717586690041970688/778782948337123338/Honkai_banner_WIP.png")
		.setFooter("Footer Text", serverIcon)
		.setTimestamp()
				
				
		member.guild.channels.cache.get(suzuWelcomeChannel).send(welcomeEmbed);
		
		
		console.log("Welcomed Gulag User");
		
		// console.log(member);
				
				
	});
	*/
}