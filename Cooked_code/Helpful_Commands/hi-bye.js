module.exports = client => {
    const hiBye = "824272001064632391"
    client.on("guildMemberAdd", (member) => { 
        console.log("New User")
        client.channels.cache.get(hiBye).send(`<@${member.id}> has joined ${member.guild.name}`)
            
    });

    client.on("guildMemberRemove", (member) => {
        console.log("User Left")
        client.channels.cache.get(hiBye).send(`<@${member.id}> has left ${member.guild.name}`)
    });
}