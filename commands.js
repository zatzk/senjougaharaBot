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


const commands = {gif, pat, lick, kiss, hug, baka, cry, poke, 
                  smug, slap, tickle, laugh, feed, cuddle, 
                  help, gatinho, play, stop, queue, leave, resume, skip, pause};



const client = require('./client');
const { DisTube } = require('distube');

const prefix = '_';
const distube = new DisTube(client, {searchSongs: 5,
                                    searchCooldown: 30,
                                    leaveOnEmpty: true,
                                    leaveOnFinish: true,
                                    leaveOnStop: true,
                                    });



module.exports = async function(msg) {
  
      
  const args = msg.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g)
  const command = args.shift().toLowerCase();
  
  if(!args.join(' ').startsWith('http')){
    if (command in commands){
      commands[command](msg, args, distube);
    }
  }else {
    msg.channel.send('Por favorzinho, não use URLs X﹏X');
  }
  
}



// DisTube event listeners
distube
    .on('playSong', (queue, song) =>
        queue.textChannel?.send(
            `Tocando \`${song.name}\` - \`${
                song.formattedDuration
            }\`\nSelecionada por: ${song.user}`,
        ),
    )
    .on('addSong', (queue, song) =>
        queue.textChannel?.send(
            `Adicionou ${song.name} - \`${song.formattedDuration}\``,
        ),
    )
    .on('addList', (queue, playlist) =>
        queue.textChannel?.send(
            `Adicionou \`${playlist.name}\` playlist (${
                playlist.songs.length
            } songs) a fila`,
        ),
    )
    .on('error', (textChannel, e) => {
        console.error(e)
        textChannel.send(
            `An error encountered: ${e.message.slice(0, 2000)}`,
        )
    })
    .on('finish', queue => queue.textChannel?.send('Cabô as musicas <(＿　＿)>'))
    .on('disconnect', queue =>
        queue.textChannel?.send('Desconectei ＞︿＜'),
    )
    .on('empty', queue =>
        queue.textChannel?.send(
            'O canal está vazio (┬┬﹏┬┬) Saindo do canal...',
        ),
    )


