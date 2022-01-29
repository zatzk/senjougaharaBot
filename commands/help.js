const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {

  const embed = new MessageEmbed()
    .setTitle('Lista de Comandos')
    .setDescription("```!help + [comando] para detalhes``` ```!gif + [search]``` ```!baka``` ```!cry``` ```!cuddle``` ```!feed``` ```!hug``` ```!kiss``` ```!laugh``` ```!lick``` ```!pat``` ```!poke``` ```!slap``` ```!smug``` ```!tickle```")
    .setColor("RANDOM")

  msg.channel.send({ embeds: [embed] });
}