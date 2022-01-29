const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {

  const embed = new MessageEmbed()
    .setTitle('Lista de Comandos')
    .setDescription("```!help + [comando] para detalhes``` ```!baka``` ```!cry``` ```!cuddle```")
    .setColor("RANDOM")

  msg.channel.send({ embeds: [embed] });
}