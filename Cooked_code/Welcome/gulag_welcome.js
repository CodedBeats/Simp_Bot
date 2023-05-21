const Discord = require('discord.js');

module.exports = client => {
//==========================================   Gulag Welcome   ==========================================//

    //channel IDs
	const gulagWelcomeChannel = "743060106996088843";
	
	// Will need its own discord bot for a specialised welcome
	client.on("guildMemberAdd", (member) => {
		
		const serverIcon = member.guild.iconURL();
		
		const welcomeEmbed = new Discord.MessageEmbed()
		.setColor("EE1111")
		.setThumbnail("https://cdn.discordapp.com/attachments/717586690041970688/802439752417935370/AllJointHatchetfish-max-1mb.gif")
		.setTitle(`Welcome To The Gulag!`)
        .setDescription(`Hey <@${member.id}>, Welcome To The Gulag \n 
						[Invite Your Friends](https://discord.gg/2WBDtQFYtW)`)
		.setImage("https://cdn.discordapp.com/attachments/717586690041970688/802428011261460510/kpHvqo.gif")
		.setFooter("Be Wary Of The Cook", serverIcon)
		.setTimestamp()
				
		member.guild.channels.cache.get(gulagWelcomeChannel).send(welcomeEmbed);
		console.log("Welcomed Gulag User");
		// console.log(member);
	});
}