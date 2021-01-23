const Discord = require('discord.js');

module.exports = client => {
//==========================================   Testing   ==========================================//

	//channel IDs
	const cookWelcomeChannel = "762617904109060116"; 
	const cookRolesChannel = "762632379885158421";
	const suzuWelcomeChannel = "743060106996088843";	
	const veloxAboutUsChannel = "753614485960523876";	
	const veloxSantaRulesChannel = "678218715166146601";
	const veloxRoleClaimChannel = "764460926639276053";



	// Server Message Welcome Testing Grounds
	/*
	client.on('message', message => {
		if (message.content.toLocaleLowerCase() === "welcome me") {

			const serverIcon = message.guild.iconURL();
			
			const welcomeEmbed = new Discord.MessageEmbed()
			.setAuthor("Mad Lab", serverIcon)
			.setColor("35363A")
			.setThumbnail(serverIcon)
			.setTitle(`Welcome To Velox!`)
			.setDescription(`Hey <@${message.member.id}>, Welcome To Velox \n 
							Invite Your Friends https://discord.gg/YWjgyGrW`)
			.addFields(
				{
					name: "Getting Started?",
					value: 
					`Familiarize yourself with 
					${message.member.guild.channels.cache.get(veloxAboutUsChannel).toString()} & ${message.member.guild.channels.cache.get(veloxSantaRulesChannel).toString()}
					Once you have read through them, check out 
					${message.member.guild.channels.cache.get(veloxRoleClaimChannel).toString()} to view & assign available roles, and to learn how to be notified for social media posts!`,
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
			.setImage("https://cdn.discordapp.com/attachments/717586690041970688/786177447901134878/VeloxBannerFINISHED.png")
			.setFooter("Footer Text", serverIcon)
			.setTimestamp()
			

			message.channel.send(welcomeEmbed)


			console.log("Welcome Messsage Tested");
			
			// console.log(message.member);
		};
	});
	*/
	


	// Private Message Welcome Testing Grounds
	/*
	client.on('message', message => {
		if (message.content.toLocaleLowerCase() === "welcome pm") {

			const serverIcon = message.guild.iconURL();
			const discordIcon = "https://i.imgur.com/r3tHleF.jpg"
			const sooUbWay = "http://www.islandvisuals.com/images/products/display/12SB-7001-GRN.jpg"
			
			const welcomeEmbed = new Discord.MessageEmbed()
			.setAuthor("Mad Lab", serverIcon)
			.setColor("35363A")
			.setThumbnail(serverIcon)
			.setTitle(`Welcome To Velox!`)
			.setDescription(`Hey <@${message.member.id}>, Welcome To Velox \n 
							Invite Your Friends https://discord.gg/YWjgyGrW`)
			.addFields(
				{
					name: "Getting Started?",
					value: 
					`Familiarize yourself with 
					${message.member.guild.channels.cache.get(veloxAboutUsChannel).toString()} & ${message.member.guild.channels.cache.get(veloxSantaRulesChannel).toString()}
					Once you have read through them, check out 
					${message.member.guild.channels.cache.get(veloxRoleClaimChannel).toString()} to view & assign available roles, and to learn how to be notified for social media posts!`,
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
			.setImage("https://cdn.discordapp.com/attachments/717586690041970688/786177447901134878/VeloxBannerFINISHED.png")
			.setFooter("Footer Text", serverIcon)
			.setTimestamp()
			

			message.author.send(welcomeEmbed)


			console.log("Welcome PM Tested");
			
			// console.log(message.member);
		};
	});
	*/



	// Banner Test
	
	client.on('message', message => {
		if (message.content.toLocaleLowerCase() === "welcome pm") {

			const serverIcon = message.guild.iconURL();
			const discordIcon = "https://i.imgur.com/r3tHleF.jpg"
			const sooUbWay = "http://www.islandvisuals.com/images/products/display/12SB-7001-GRN.jpg"
			
			const welcomeEmbed = new Discord.MessageEmbed()
			.setAuthor("Mad Lab", serverIcon)
			.setColor("35363A")
			.setThumbnail("https://cdn.discordapp.com/attachments/717586690041970688/802439752417935370/AllJointHatchetfish-max-1mb.gif")
			.setTitle(`Welcome To Cook's Big And Still Yet Tiny Cock! :heart:`)
			.setDescription(`Hey <@${message.member.id}>....You're Cute :heart:`)
			.addFields(
				{
					name: "Filler Text",
					value: "Sup Buddy",
					iniline: false,
				},
				)
			.setImage("https://cdn.discordapp.com/attachments/717586690041970688/802428011261460510/kpHvqo.gif")
			.setFooter("Footer Text", serverIcon)
			.setTimestamp()
			

			message.author.send(welcomeEmbed)


			console.log("Welcome PM Tested");
			
			// console.log(message.member);
		};
	});
	
	

}
