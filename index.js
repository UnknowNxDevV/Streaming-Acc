const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
const dotenv = require('dotenv');
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("CLIENT_ID", "IMAGE_NAME")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("twitch")
        .setUrl("twitch Link")
        .setType("STREAMING")
        .setApplicationId("CLIENT_ID")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("Youtube Link")
        .setDetails("Subscribe!")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Successfully Logged in!`)
})

//Coded By Unknown
client.login("Your Acc Token")
