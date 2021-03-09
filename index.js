//=========================================   Pre Load   =========================================//
// set max individual actions greater than default [10]
require('events').EventEmitter.defaultMaxListeners = 20;

// pre-load the apropriates
const Discord = require('discord.js');
require('dotenv').config(); 


// create a new Discord client
const client = new Discord.Client();


// import files
const fun = require("./Cooked_code/Fun/fun")
const embed1 = require("./Cooked_code/Fun/embed1")
const welcome = require("./Cooked_code/Welcome/welcome")
const gulagWelcome = require("./Cooked_code/Welcome/gulag_welcome")
const members = require("./Cooked_code/Helpful_Commands/members")
// const madlabWelcome = require("./Cooked_code/Welcome/madlab_welcome")
// const veloxWelcome = require("./Cooked_code/Welcome/velox_welcome")
// const vc = require("./Cooked_code/VC_stuff/vc")





//Alert users that bot is online
client.on('ready', () => {
	console.log("Ready For Some Fun")
	
	// Channel IDs
	const suzuGeneralChannel = client.channels.cache.get("743057030100549706");
	const cookGeneralChannel = client.channels.cache.get("764948972036554793");
	//cookGeneralChannel.send("I'm Online Sire")
	
	// initialize files
	fun(client)
	embed1(client)
	welcome(client)
	gulagWelcome(client)
	members(client)
	// vc(client)
	// madlabWelcome(client)
	// veloxWelcome(client)
});


//login using bot token from env
// client.login(process.env.TOKEN); 
client.login(process.env.DJS_TOKEN);




//========================================   Bug Fixing   ========================================//
// console.log(JSON.stringify(message))



//======================================   Initialize   ======================================//
// help
const functions = "Type: \n $Am I Cool - Return if you are cool \n $Tell Me A Secret: Lets you in on something juicy :smirk: \n Feel Free To Genji Ult (in 4 words) \n Say Something Bad \n $Meaning of life - Computes the meaning of your miserable life \n $mission - Assigns you a mission"


client.on('message', message => {
	if (message.content.toLocaleLowerCase() === "$help") {
		message.channel.send(functions)
		console.log("Options Previewed")
	}
});

