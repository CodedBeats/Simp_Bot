module.exports = client => {
//==========================================   Giphy   ==========================================//

    /* url: https://stackoverflow.com/questions/58455729/how-do-i-let-a-bot-send-a-gif-via-giphy-api-correctly
    const GphApiClient = require("giphy-js-sdk-core");
    let giphyToken = "YeCXHkRCS7XDA0kjNWpViT83LXdzphCX";
    let giphy = GphApiClient + giphyToken;

    client.on("message", message => {
    if (message.content.includes("gif")) {
        giphy.search('gifs', {"q": "punch, anime"})
            .then((response) => {
                let totalResponses = response.data.length;
                let responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;
                let responseFinal = response.data[responseIndex]

            message.channel.send({
            files: [responseFinal.images.fixed_height.url]
            })
        });
    }
    })
    */

    /* url: https://support.glitch.com/t/using-giphy-for-my-discord-bot/12357/21
    const giphy = require("giphy-api")();

    client.on('message', async (message) => {

        //gifs
        if (message.content.includes("!gif")){
            const args = message.content.slice().trim().split(/ +/g);
            const command = args.shift().toLowerCase(); 
            let converts = args.join(" ");  

            if (converts =="") {converts = "random"}  
            message.delete(1)
            giphy.search({q: converts,rating: 'g'}, function (err, response) {


            if (response.data.length == 0) {
                let embed2 = new Discord.RichEmbed()
                .setColor(0x00ae86)
                .setDescription(`🎬 Sorry I Can't find a gif related with your words.`)
                message.channel.send({embed:embed2})   
                return;
            }

            var totalResponses = response.data.length;
            var responseIndex = Math.floor((Math.random() * 10) + 1) % totalResponses;

            let embed = new Discord.RichEmbed()
            .setColor(0x00ae86)
            .setDescription(`🎬**Name:** "${response.data[responseIndex].title}".`)
            .setImage(response.data[responseIndex].images.original.url)
            message.channel.send({embed:embed}).then(embedMessage => {
                embedMessage.react("👍")
                embedMessage.react("👎")
                .catch(() => console.error("One of the emojis failed to react."));
                embedMessage.delete(15000)
                }); 
            });

        };
    

    });
    */
//==========================================   Giphy   ==========================================//
};
