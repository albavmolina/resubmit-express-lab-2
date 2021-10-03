// // MAGIC 8 BALL 

// const express = require('express');
// const app = express();
// app.listen(3000);

// app.get('/greeting/:name', (req, res) => {
//     res.send(`Wow! Hello there, ${req.params.name}, it's great to see you!`)
// });

// app.get('/tip/:total/:tipPercentage', (req, res) => {
//     res.send(`Total tip: ${req.params.total * req.params.tipPercentage/100}$`);
// });

// //Magic 8 Ball

// const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

// function getMagicResponse () {
//     return magicBall[Math.floor(Math.random() * magicBall.length)]
// }

// app.get('/magic/:question', (req, res) => {
//     res.send(`
//     <h1>Question: ${req.params.question} </h1>
//     <h1>Magic 8 Ball Says: ${getMagicResponse()}</h1>`)
// })


// 99 BOTTLES ON THE WALL
// Require Dependencies
const express = require('express');
// Initialize the Express Application
const app = express();
const port = 3000;
//Setting up our Routes
app.get("/", (req, res) => {
    res.send("99 Bottles of Beer on the wall " + `<a href = "/98">take all down , pass it around</a>`);
});
app.get("/:number_of_bottles", (req, res) => {
   const parsedParameter =  parseInt(req.params.number_of_bottles);
   console.log("parsed variable", parsedParameter);
            if (parsedParameter === 0) {
                res.send(`<a href = "/">start over</a>`);
            } else {
                res.send(req.params.number_of_bottles + ` Bottles of Beer on the wall <a href = ${req.params.number_of_bottles - 1}>take one down, pass it around</a>`)
 }
});
// Open a connection on host machine to listen for requests
app.listen(port, function () {
    console.log("The server is listening for port 3000")
});