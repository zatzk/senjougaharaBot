module.exports = async function (msg, args, distube) {
  const voiceChannel = msg.member?.voice?.channel
  if (voiceChannel) {
    distube.play(voiceChannel, args.join(' '), {
        msg,
        textChannel: msg.channel,
        member: msg.member,
    })
  }else {
    msg.channel.send('Você precisa estar no mesmo canal de voz do bot para usar este comando ( •̀ ω •́ )✧.')
  }
}