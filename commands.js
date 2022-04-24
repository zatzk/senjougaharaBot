//Command Handler
const gif = require('./commands/misc/gif.js');
const pat = require('./commands/fun/pat.js');
const lick = require('./commands/fun/lick.js');
const kiss = require('./commands/fun/kiss.js');
const hug = require('./commands/fun/hug.js');
const baka = require('./commands/fun/baka.js');
const cry = require('./commands/fun/cry.js');
const poke = require('./commands/fun/poke.js');
const smug = require('./commands//fun/smug.js');
const slap = require('./commands/fun/slap.js');
const tickle = require('./commands/fun/tickle.js');
const laugh = require('./commands/fun/laugh.js');
const feed = require('./commands/fun/feed.js');
const cuddle = require('./commands/fun/cuddle.js');
const help = require('./commands/misc/help.js');
const gatinho = require('./commands/fun/gatinho.js');
const play = require('./commands/music/play.js');
const stop = require('./commands/music/stop.js');
const queue = require('./commands/music/queue.js');
const leave = require('./commands/music/leave.js');
const resume = require('./commands/music/resume.js');
const skip = require('./commands/music/skip.js');
const pause = require('./commands/music/pause.js');
const glub = require('./commands/fun/+18/glub.js');


const commands = {gif, pat, lick, kiss, hug, baka, cry, poke, 
                  smug, slap, tickle, laugh, feed, cuddle, 
                  help, gatinho, play, stop, queue, leave, resume, skip, pause,
                  glub};



const distube = require('./exports/distubeExports/distubeCreate');
const listeners = require('./exports/distubeExports/distubeListeners');



const prefix = '_';
module.exports = async function(msg) {
      
  if(msg.content.startsWith(prefix)){
    const args = msg.content
          .slice(prefix.length)
          .trim()
          .split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if (command in commands){
      commands[command](msg, args, distube);
    }
  }
}