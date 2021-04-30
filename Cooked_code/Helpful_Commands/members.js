const Discord = require('discord.js');

module.exports = client => {
    client.on("message", message => {
        if (message.content.toLowerCase() === "$member count") {
            let serverID = message.guild.id;
            let guild = client.guilds.cache.get(serverID)
            let members = guild.memberCount - 9
            // message.channel.send(`The ${message.guild.name} has ${members} members`)
            console.log("Server member count")

            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server's Member", '')
            .setDescription(`The ${message.guild.name} has ${members} members`)
            message.channel.send(embed);
        }
    })


    client.on("message", message => {
        if (message.content.toLowerCase() === "$bot servers") {
            
            let serverlist = ''
            client.guilds.cache.forEach((guild) => {
                serverlist = serverlist.concat(" - " + guild.name + ": Members: " + guild.memberCount + "\n")
            })
    
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Servers With Simp Bot", '')
            .setDescription(serverlist)
            message.channel.send(embed);
        }
    })

}