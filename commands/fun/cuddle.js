const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');


module.exports = async function (msg, args) {
  let keywords = 'cuddle';
  let url = `http://api.nekos.fun:8080/api/${keywords}`
  let response = await fetch(url);
  let json = await response.json();
  

  if(args.toString().charAt(1) === '@'){
    const embed = new MessageEmbed()
      .setDescription(`**${msg.author.username}** tá de chameguinho com ${args}`)
      .setImage(json.image)
    msg.channel.send({ embeds: [embed] });
  }
  else{
    const embed = new MessageEmbed()
      .setDescription(`｡･ﾟﾟ*(>д<)*ﾟﾟ･｡`)
    msg.channel.send({ embeds: [embed] });
  }
  
}