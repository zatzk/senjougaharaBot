const fetch = require('node-fetch')
const { MessageEmbed } = require('discord.js');

module.exports = async function(msg) {
  
  let count = await fetch('https://geradordegatinhosapi.herokuapp.com/gatinhos?_page=1');
  let total = count.headers.get('x-total-count');
  

  const index = (Math.floor(Math.random() * total+1)) -1;
  let response = await fetch(`https://geradordegatinhosapi.herokuapp.com/gatinhos/${index}`);
  let json = await response.json();
  

  const embed = new MessageEmbed()
    .setTitle(`**Parabéns, você recebeu o: \n ${json.name}**`)	
    .setThumbnail(json.image)
    .setColor("RANDOM")
  msg.channel.send({ embeds: [embed] });
}