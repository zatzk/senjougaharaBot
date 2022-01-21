import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
import fetch from "node-fetch";


const client = new Client({ intents: [Intents.FLAGS.GUILDS, 
                                      Intents.FLAGS.DIRECT_MESSAGES,
                                      Intents.FLAGS.GUILD_MESSAGES],
                                      partials: ['MESSAGE', 'CHANNEL'] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}💖`)
  })

const replies = ["não", "pong", "UwU"]

client.on('messageCreate', gotMessage);

async function gotMessage(msg) {

  let tokens = msg.content.split(' ')

  if(tokens[0] === 'ping') {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
  }
  else if(tokens[0] === '!gif') {

    let keywords = 'coding train'
    if(tokens.length > 1){
      keywords = tokens.slice(1, tokens.length).join(" ")
    }
    
    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&limit=8`
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    const index = Math.floor(Math.random() * json.results.length);

    msg.channel.send(json.results[index].url);
  }
  else if(tokens[0] === '!baka') {
    let keywords = 'baka'
    let url = `http://api.nekos.fun:8080/api/${keywords}`
    let response = await fetch(url);
    let json = await response.json();
    console.log(json.image);

    msg.channel.send(json.image);
  }
} 

client.login(process.env.BOT_TOKEN);

