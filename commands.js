//Command Handler

const gif = require('./commands/gif.js');
const pat = require('./commands/pat.js');
const lick = require('./commands/lick.js');
const kiss = require('./commands/kiss.js');
const hug = require('./commands/hug.js');
const baka = require('./commands/baka.js');
const cry = require('./commands/cry.js');
const poke = require('./commands/poke.js');

const commands = {gif, pat, lick, kiss, hug, baka, cry, poke};

module.exports = async function(msg) {

  let tokens = msg.content.split(' ');
  let command = tokens.shift();
  

  if(command.charAt(0) ==='!') {
    command = command.substring(1);
    

    if (command in commands){
      commands[command](msg, tokens);
    }        
  }
}