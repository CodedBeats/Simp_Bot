module.exports = client => {
//==========================================   On Word Response   ==========================================//



    // Are you Cool?   Test
    const cool = ["Yes!", "No!"];
    const coolChoices = ["$am i cool", "$am i cool?"]

    client.on('message', message => {
        let chanceCool = cool[Math.floor(Math.random() * 2)];
        if (coolChoices.includes(message.content.toLocaleLowerCase())) {
            message.channel.send(chanceCool)
            console.log("isCool worked")
            console.log("we got " + chanceCool)
        }
    });




    // Tell me a secret   Test
    const secrets = [
        "Black people aren't coloured because black isn't a colour. They are just shady :smirk:",
        "The way blind people know if they've wiped enough is by taste test",
        "2040 is the same distance away as 2000",
        "'getting a tan' is the most accepted form of putting your body at risk to be attractive",
        "Anxiety is like when you hear battle music in a game but can't find any enemies",
        "if a pregnant woman goes swimming, the baby is driving a submarine",
        "would you rather reveal your search history or your calculator history?",
        "the fact that a sausage is meat inside intestines means that, after we eat it, it turns back into a sausage",
        "Cannonbolt, one of Ben Ten's pokemon can transform into a sphere where he can suck his own peen and use it as a 'joystick' to control his direction",
        "Do you know what BDSM stands for? Thats right, Buddhism"
    ];
    client.on('message', message => {
        let chanceSecret = secrets[Math.floor(Math.random() * secrets.length)];
        if (message.content.toLocaleLowerCase() === "$tell me a secret") {
            message.channel.send(`||${chanceSecret}||`)
            console.log("Secret Whispered")
        }
    });






    // Genji Meme   Test
    // "Open the image in a new tab"
    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === 'omae wa mou shindeiru') {
            message.channel.send("NANI?", {files: 
                ["https://thumbs.gfycat.com/AlarmingCreepyHeifer-size_restricted.gif"]})
            console.log("Nani Reply Successful")
        }
    });



    // Message Blacklist
    const blacklist = ["nigger", "nigga", "cook is a bad coder"]
    // Bad Words   Test
    client.on('message', message => {
        if (blacklist.includes(message.content.toLocaleLowerCase())) {
            message.channel.send("Say it again and you're banned :gun:")
            console.log("User Warned")
        }
    });





    //Giphs
    let gif1 = "https://blog-assets.hootsuite.com/wp-content/uploads/2018/04/Nyan-Cat-GIF-source.gif"
    let gif2 = "https://i.pinimg.com/originals/b5/5e/3b/b55e3bafe484a0ead34d5e3849bd1e11.gif"
    let gif3 = "https://media0.giphy.com/media/yr7n0u3qzO9nG/giphy.gif"
    let gif4 = "https://giphy.com/gifs/space-hello-LW5vBvAb48Oe9OoEKT"
    let gif5 = "https://wp-modula.com/wp-content/uploads/2018/12/giphy-3.gif"
    let gif6 = "https://thumbs.gfycat.com/FixedGivingFreshwatereel-size_restricted.gif"
    let gif7 = "https://media1.giphy.com/media/WsvoCfsyL1mFeMmmDc/giphy.gif"
    let gif8 = "https://www.retro-synthwave.com/wp-content/uploads/2016/10/retro-synthwave_GIF-01-32.gif"
    const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8]

    // Random Gif   Test
    client.on('message', message => {
        let chanceGif = gifs[Math.floor(Math.random() * 8)];
        if (message.content.toLocaleLowerCase() === '$gif') {
            message.channel.send(chanceGif)
            console.log("Random gif sent")
            console.log("We got " + chanceGif)
        }
    });



    // Be Annoying    Test
    const errors = [
        "Yes", "Fuck you, you condecending, AI racist Fuck", "Please check your spelling", "Are you sure you can spell?", "Fuck off cxnt", "7 x 6", "Fuck you bro", 
    ]
    client.on('message', message => {
        let chanceErrors = errors[Math.floor(Math.random() * errors.length)];
        if (message.content.toLocaleLowerCase() === '$meaning of life') {
            message.channel.send(chanceErrors)
            console.log("Meaning Of Life Sent")
        }
    });






    // Snipe User
    const insultsLevel1 = [
        "Is your ass jealous of the amount of shit that just came out of your mouth?",
        "If you were a vegtable, you'd be a cabbitch",
        "Calling you an idiot would be an insult to all the stupid people",
        "You are so fat you fall off both sides of the bed",
        "You are about as useful as a knitted condom",
        "I'd slap you but that would be animal abuse",
        "If I throw a stick, will you leave?",
        "Does it get annoying smelling shit in the morning with your head so far up your ass?",
        "You remind me of a penny, two-faced and not worth much",
        "If you ran like your mouth, maybe you wouldn't look like a tub of lard",
        "The last time I saw something like you, I flushed it",
        "I would unplug your life support to charge my phone",
        "If laughter is the best medicine, your face must be curing the world",
        "does your mum get a fine for littering when she drops you off at school?",
        "If i wanted to kill myself, I'd climb your ego and drop to your iq",
    ]
    const loveLevel1 = [
        "You mean the world to me",
        "you are way too ||sexy|| cool",
        ""
    ]

    client.on('message', message => {
        const cookID = "376933393822121996";
        const qookie = "395210449294983169";
        const holder = "000"
        let chanceInsults = insultsLevel1[Math.floor(Math.random() * insultsLevel1.length)];
        if (message.author.id === holder) {
            if (Math.random() < .25) {
                message.channel.send(chanceInsults);
                // message.channel.send("Im supposed to say something mean but i need suggestions");
                console.log("insult delivered")
            } else {
                console.log("struck out")	
            }
        }
    });






    // Bot sends quick message and then deletes it   Test
    const missionsImpossible = [
        "Good Day Agent A, your mission should you choose to accept it: **Retrieve The Crown**. This message will self destruct in 10 seconds",
        "Good Day Agent B, your mission should you choose to accept it: **Defeat The Ender Dragon**. This message will self destruct in 10 seconds",
        "Good Day Agent C, your mission should you choose to accept it: **Beat Vivian**. This message will self destruct in 10 seconds",
        "Good Day Agent D, your mission should you choose to accept it: **End World Hunger**. This message will self destruct in 10 seconds",
        "Good Day Agent E, your mission should you choose to accept it: **Graduate 6th Grade**. This message will self destruct in 10 seconds",
        // "Good Day Agent F, your mission should you choose to accept it: ** **. This message will self destruct in 10 seconds",
        // "Good Day Agent G, your mission should you choose to accept it: ** **. This message will self destruct in 10 seconds",
        // "Good Day Agent H, your mission should you choose to accept it: ** **. This message will self destruct in 10 seconds",
    ]


    client.on('message', async message => {
        const missionChances = missionsImpossible[Math.floor(Math.random() * missionsImpossible.length)];
        if (message.content === "$mission") {
            try {
                const sentMessage = await message.channel.send(`${missionChances}`);
                await sentMessage.delete({ timeout: 10000 });
                // success
                console.log("Mission Impossible")
            } catch (error) {
                // handle error
                console.log("Something Went Wrong")
            }
        }
    });




    // PM Me
    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === '$pm me') {
            message.author.send("I'm Watching you")
            console.log("Pm'd User")
        }
    });






    // Temp Use Insult
    client.on('message', message => {
        if (message.content.toLocaleLowerCase() === "x") {
            message.channel.send(`Me Too`)
        }
    });


//==========================================   On Word Response   ==========================================//
};
