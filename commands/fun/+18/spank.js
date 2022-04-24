const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const neko = require('../../../exports/nekoExports/neko.js');

module.exports = async function (msg, args) {
  let keywords = 'spank';
  let url = `http://api.nekos.fun:8080/api/${keywords}`
  let response = await fetch(url);

  const json = [await response.json(), await neko.nsfw.spank()]
  json[0] = json[0].image;
  json[1] = json[1].url;

  random = Math.floor(Math.random() * 2);
  
  if(args.toString().charAt(1) === '@'){
    const embed = new MessageEmbed()
      .setDescription(`**${msg.author.username}** deu umas palmadinhas em ${args} (͡ ° ͜ʖ ͡ °)`)
      .setImage(json[random])
    msg.channel.send({ embeds: [embed] });
  }

  else{
    const embed = new MessageEmbed()
      .setDescription(`(¬‿¬)`)
      .setImage(json[random])
    msg.channel.send({ embeds: [embed] });
  }
  
}