const Discord = require('discord.js');

module.exports = client => {
//==========================================   Gulag Welcome   ==========================================//

    //channel IDs
	const suzuWelcomeChannel = "743060106996088843";

	
	// Will need its own discord bot for a specialised welcome
	client.on("guildMemberAdd", member => {
		
		const serverIcon = member.guild.iconURL();
		
		const welcomeEmbed = new Discord.MessageEmbed()
		.setAuthor("The Gulag", serverIcon)
		.setColor("EE1111")
		.setThumbnail(serverIcon)
		.addFields(
			{
				name: "The The Gulag",
				value: `Hey <@${member.id}>, Welcome To The Gulag! \n
				[Invite Your Friends](https://discord.gg/8GRd67Gd)`,
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
			)
		.setImage("https://cdn.discordapp.com/attachments/717586690041970688/802428011261460510/kpHvqo.gif")
		.setFooter("Be Wary Of The Cook", serverIcon)
		.setTimestamp()
				
				
		member.guild.channels.cache.get(suzuWelcomeChannel).send(welcomeEmbed);
		
		
		console.log("Welcomed Gulag User");
		
		// console.log(member);
				
				
	});
	
}