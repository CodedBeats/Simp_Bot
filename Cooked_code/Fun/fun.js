module.exports = client => {
//==========================================   On Word Response   ==========================================//



    // Are you Cool?   
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




    // Tell me a secret   
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






    // Genji Meme   
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




    // Meaning Of Life
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






    
    
    
    
    
    
    // Bot sends mission and then deletes it   
    const missionsImpossible = [
        "Good Day Agent A, your mission should you choose to accept it: **Retrieve The Crown**. This message will self destruct in 10 seconds",
        "Good Day Agent B, your mission should you choose to accept it: **Defeat The Ender Dragon**. This message will self destruct in 10 seconds",
        "Good Day Agent C, your mission should you choose to accept it: **Beat Vivian**. This message will self destruct in 10 seconds",
        "Good Day Agent D, your mission should you choose to accept it: **End World Hunger**. This message will self destruct in 10 seconds",
        "Good Day Agent E, your mission should you choose to accept it: **Graduate 6th Grade**. This message will self destruct in 10 seconds",
        "Good Day Agent F, your mission should you choose to accept it: **Learn English, Sheesh**. This message will self destruct in 10 seconds",
        "Good Day Agent G, your mission should you choose to accept it: **Get Good**. This message will self destruct in 10 seconds",
        "Good Day Agent H, your mission should you choose to accept it: **||Fuck Hoes||**. This message will self destruct in 10 seconds",
        // "Good Day Agent I, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent J, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent K, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent L, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent M, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent N, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent O, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent P, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent Q, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent R, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent S, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent T, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent U, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent V, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent W, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent X, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent Y, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
        // "Good Day Agent Z, your mission should you choose to accept it: ****. This message will self destruct in 10 seconds",
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
    



    // Insult Cook To Remind People I'm Alive
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
        "Why play so hard to get when you're already so hard to want?",
        "You look like a before picture",
        "You're impossible to underestimate",
        "You are the human equivalent of a participation award",
        "You're not pretty enough to be this stupid",
        "You look like a visible fart",
        "I have neither the time nor the crayons to explain it to you",
        "You haven't been yourself lately. We've all noticed the improvement",
        "Honey, you couldn't pour water out of a boot if the instructions were on the bottom",
        "As an outsider, what is your perspective on intelligence?",
        "Stupid people can believe in anything, so you can believe in yourself",
        "I think we’ve all got something to bring to this discussion, and from now on I think the thing you should bring is silence",
        "You are more disappointing than an unsalted pretzel",
        "Somewhere in France, a cathedral is missing a gargoyle",
        "You’re less a person and more a loose collection of personality flaws",
        "Apologize to that tree over there for wasting the oxygen that it worked so hard to make",
        "I hope you get run over by a parked car",
        "Bob Ross would call you a mistake",
    ]
    const loveLevel1 = [
        "You mean the world to me",
        "you are way too ||sexy|| cool",
        "If I know what love is, it is because of you",
        "Pleasure of love lasts but a moment. Pain of love lasts a lifetime",
        "Being alone is kind of nice. Being alone with you is better",
        "Looking like a complete idiot with you is really fun",
        "I would hang out with you even if you hadn’t showered for a month",
        "I bet that sometimes you actually wake up flawless",
        "You’re so hot, you make a dragon want to retire",
        "If you cooked something really gross, I like you enough that I would tell you instead of politely eating it and hating everything",
        "You have the face that I make on the Sims",
        "It's so unfair! No matter how much I work out, I'll never have ankles as nice as yours! Fuck you!",
        "You're the perfect amount of muscle covered in fat to be a really effective heat source",
        "My gynecologist told me that I have a 'very pretty cervix",
        "You're so cute. If we weren't dating other people, I'd be on you like flies on shit",
        "Your aura is really strong...what did you do today",
        "You're cute, but not in the attractive way",
        "Wow, you have news anchor eyebrows",
        "You always smell like fresh laundry",
        "You're someone I'd want to see right before I die",
        "You look like you're going to be a hot older woman",
        "You're actually quite handsome, but I really don't know why",
    ]

    client.on('message', message => {
        const cookID = "376933393822121996";
        const qookie = "395210449294983169";
        const holder = "000"
        // let chanceInsults = insultsLevel1[Math.floor(Math.random() * insultsLevel1.length)];
        let chanceLove = loveLevel1[Math.floor(Math.random() * loveLevel1.length)];
        if (message.author.id === holder) {
            if (Math.random() < 0.02) {
                message.channel.send(chanceLove);
                // message.channel.send("Im supposed to say something mean but i need suggestions");
                console.log(``)
            }
        }
    });
    //==========================================   On Word Response   ==========================================//
};
