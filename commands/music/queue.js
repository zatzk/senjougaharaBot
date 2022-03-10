module.exports = async function (msg, args, distube) {
  
  const userVoiceChannel = msg.member.voice;
  const botVoiceChannel = msg.guild.me.voice;
  const queue = distube.getQueue(msg);

  if (userVoiceChannel.channelId === botVoiceChannel.channelId) {
    if(queue){
      msg.channel.send(
        `Fila atual:\n${queue.songs
            .map(
                (song, id) =>
                    `**${id ? id : 'Tocando'}**. ${
                        song.name
                    } - \`${song.formattedDuration}\``,
            )
            .slice(0, 10)
            .join('\n')}`,
    )
    }else {
      msg.channel.send('Tem nada tocando (￣o￣) . z Z')
    }  
  }else {
    msg.channel.send('Você precisa estar no mesmo canal de voz do bot para usar este comando ( •̀ ω •́ )✧');
  }
}