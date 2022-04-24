const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {
  const embed = new MessageEmbed()
    .setTitle('🚩 Comandos 🚩')
    .addField('**🍕 Misc 🍕**', '`help`,`gif`,`tr`')
    .addField('**✨ Fun ✨**', '`gatinho`, `cuddle`, `feed`, `baka`, `hug`, `cry`, `kiss`, `laugh`, `lick`, `pat`, `poke`, `slap`, `smug`, `tickle`')
    .addField('**🎵 Music 🎵**', '`play`, `pause`, `queue`, `resume`, `skip`, `stop`, `leave`')
    .setColor("#FF7F30")
    .setFooter({text:` Página com todos os comandos em breve 🚧 `})

  msg.channel.send({ embeds: [embed] });
}