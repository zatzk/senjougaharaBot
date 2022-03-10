module.exports = async function (msg, args, distube) {
  
  const userVoiceChannel = msg.member.voice;
  const botVoiceChannel = msg.guild.me.voice;

  if (userVoiceChannel.channelId === botVoiceChannel.channelId) {
    distube.voices.get(msg)?.leave()
    msg.channel.send('Deixou o canal de voz (っ °Д °;)っ') 
  }else {
    msg.channel.send('Você precisa estar no mesmo canal de voz do bot para usar este comando ( •̀ ω •́ )✧.');
  }
}