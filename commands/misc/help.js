const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {

  const embed = new MessageEmbed()
    .setTitle('🚩 Comandos 🚩')
    .addField('**🍕 Misc 🍕**', '`gif`')
    .addField('**✨ Fun ✨**', '`gatinho`, `cuddle`, `feed`, `baka`, `hug`, `cry`, `kiss`, `laugh`, `lick`, `pat`, `poke`, `slap`, `smug`, `tickle`')
    .addField('**🎵 Music 🎵**', '`--`')
    .setColor("RANDOM")

  msg.channel.send({ embeds: [embed] });
}