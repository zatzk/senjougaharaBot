const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {
  const embed = new MessageEmbed()
    .setTitle('π© Comandos π©')
    .addField('**π Misc π**', '`help`,`gif`,`tr`')
    .addField('**β¨ Fun β¨**', '`gatinho`, `cuddle`, `feed`, `baka`, `hug`, `cry`, `kiss`, `laugh`, `lick`, `pat`, `poke`, `slap`, `smug`, `tickle`')
    .addField('**π΅ Music π΅**', '`play`, `pause`, `queue`, `resume`, `skip`, `stop`, `leave`')
    .setColor("#FF7F30")
    .setFooter({text:` PΓ‘gina com todos os comandos em breve π§ `})

  msg.channel.send({ embeds: [embed] });
}