//=========================================   Pre Load   =========================================//
// set max individual actions greater than default [10]
require('events').EventEmitter.defaultMaxListeners = 25;

// pre-load the apropriates
const Discord = require('discord.js');
require('dotenv').config(); 


// create a new Discord client
const client = new Discord.Client();


// import files
const fun = require("./Cooked_code/Fun/fun")
const welcome = require("./Cooked_code/Welcome/welcome")
const gulagWelcome = require("./Cooked_code/Welcome/gulag_welcome")
const findUsers = require("./Cooked_code/Helpful_Commands/find-user")
const hiBye = require("./Cooked_code/Helpful_Commands/hi-bye")
const members = require("./Cooked_code/Helpful_Commands/members")
const userInformation = require("./Cooked_code/Helpful_Commands/user-information")
const messageManipulation = require("./Cooked_code/Helpful_Commands/message-manipulation")
const ping = require("./Cooked_code/Helpful_Commands/ping")
// const embed1 = require("./Cooked_code/Fun/embed1")
// const madlabWelcome = require("./Cooked_code/Welcome/madlab_welcome")
// const veloxWelcome = require("./Cooked_code/Welcome/velox_welcome")
// const vc = require("./Cooked_code/VC_stuff/vc")





//-----Initialize bot-----//
client.on('ready', () => {
	console.log("Ready For Some Fun")
	
	//cookGeneralChannel.send("I'm Online Sire")



	//-----initialize live member count channel-----//
    let myGuid = client.guilds.cache.get("743057030100549702")
	let myMemberCount = myGuid.memberCount
	myMemberCount = myMemberCount - 10;
    // console.log(myMemberCount)
    let memberCountChannel = myGuid.channels.cache.get("819021393810817024")
    // console.log(memberCountChannel.name)
    memberCountChannel.setName("Gulag Members: " + myMemberCount)
    .then(result => console.log("Guild Mmembers Channel Is Live"))
	.catch(error => console.log(error))
	


	//-----initialize files-----//
	fun(client)
	welcome(client)
	gulagWelcome(client)
	findUsers(client)
	hiBye(client)
	members(client)
	userInformation(client)
	messageManipulation(client)
	ping(client)
	// embed1(client)
	// vc(client)
	// madlabWelcome(client)
	// veloxWelcome(client)
});


// login using bot token from env
// client.login(process.env.TOKEN); 
client.login(process.env.DJS_TOKEN);




//========================================   Member Count Channel   ========================================//
client.on("guildMemberAdd", member => {
    let myGuid = client.guilds.cache.get("743057030100549702")
	let myMemberCount = myGuid.memberCount
	myMemberCount = myMemberCount - 10;
    let memberCountChannel = myGuid.channels.cache.get("819021393810817024")
    memberCountChannel.setName("Gulag Members: " + myMemberCount)
    .then(result => console.log("Gained a guild member"))
    .catch(error => console.log(error))
})

client.on("guildMemberRemove", member => {
    let myGuid = client.guilds.cache.get("743057030100549702")
	let myMemberCount = myGuid.memberCount
	myMemberCount = myMemberCount - 10;
    let memberCountChannel = myGuid.channels.cache.get("819021393810817024")
    memberCountChannel.setName("Gulag Members: " + myMemberCount)
    .then(result => console.log("Lost a guild member"))
    .catch(error => console.log(error))
})


//======================================   Initialize   ======================================//
//-----help-----//
const commands = "$Am I Cool - Returns if you are cool \n $Tell Me A Secret: Lets you in on something juicy :smirk: \n $Meaning of life - Computes the meaning of your miserable life \n $mission - Assigns you a mission \n $ping - Time in milliseconds for your computer to send a signal \n $avatar @user - Displays the image/gif the user has displayed \n $member count - Displays how many members in this server \n $bot servers - Displays what servers the bot is in \n $prune `int` - Delete messages between 2 and 100 (Only for Admins)"


client.on('message', message => {
	if (message.content.toLocaleLowerCase() === "$help") {
		message.channel.send(commands)
		console.log("Commands Previewed")
	}
});

