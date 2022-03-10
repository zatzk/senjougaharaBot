const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {
  let keywords = 'laugh';
  let url = `http://api.nekos.fun:8080/api/${keywords}`
  let response = await fetch(url);
  let json = await response.json();
  

  if(args.toString().charAt(1) === '@'){
    const embed = new MessageEmbed()
      .setDescription(`**${msg.author.username}** soltou gargalhadinha pra ${args}`)
      .setImage(json.image)
    msg.channel.send({ embeds: [embed] });
  }
  else{
    const embed = new MessageEmbed()
      .setDescription(`KLAJSKLJDAUSHAUSAKJAS (≧▽≦)`)
      .setImage(json.image)
    msg.channel.send({ embeds: [embed] });
  }
  
}