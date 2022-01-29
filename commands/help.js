const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {

  const embed = new MessageEmbed()
    .setTitle('Lista de Comandos')
    .setDescription("```_help + [comando]``` ```_gif + [search]``` ```_baka``` ```_cry``` ```_cuddle``` ```_feed``` ```_hug``` ```_kiss``` ```_laugh``` ```_lick``` ```_pat``` ```_poke``` ```_slap``` ```_smug``` ```_tickle```")
    .setColor("RANDOM")

  msg.channel.send({ embeds: [embed] });
}