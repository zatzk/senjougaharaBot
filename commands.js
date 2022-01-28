//Command Handler

const gif = require('./commands/gif.js');
const pat = require('./commands/pat.js');
const lick = require('./commands/lick.js');
const kiss = require('./commands/kiss.js');
const hug = require('./commands/hug.js');

const commands = {gif, pat, lick, kiss, hug};

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