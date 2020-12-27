module.exports = client => {
//==========================================   VC Stuff   ==========================================//

	// Complicated join channel   Test
	const suzuGeneralVC = "743057030100549707"
	client.on("message", message => {
		const channel = client.channels.cache.get(suzuGeneralVC);
		if (message.content.toLocaleLowerCase() === "$join") {
			if (!channel) return console.error("The channel does not exist!");
			channel.join().then(connection => {
				// Yay, it worked!
				console.log("Successfully connected to voice channel.");
			}).catch(e => {
				// Oh no, it errored! Let's log it to console :)
				console.error(e);
			});
		};
	});


	client.on("message", message => {
		const channel = client.channels.cache.get(suzuGeneralVC);
		if (message.content.toLocaleLowerCase() === "$leave") {
			if (message.guild.me.channel !== undefined) {
				message.guild.me.channel.leave();
				message.reply("I have successfully left the voice channel!");
			} else {
				message.reply("I'm not connected to a voice channel master");
			}
		};
	});
//==========================================   VC Stuff   ==========================================//
}
