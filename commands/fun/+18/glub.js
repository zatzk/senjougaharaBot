const { MessageEmbed } = require('discord.js');
const neko = require('../../../exports/nekoExports/neko.js');

module.exports = async function (msg, args) {
  const json =  await neko.nsfw.blowJob()
  
  if(args.toString().charAt(1) === '@'){
    const embed = new MessageEmbed()
      .setDescription(`**${msg.author.username}** recebeu um glub glub de ${args}`)
      .setImage(json.url)
    msg.channel.send({ embeds: [embed] });
  }

  else{
    const embed = new MessageEmbed()
      .setDescription(`glub glub glub (¬‿¬)`)
      .setImage(json.url)
    msg.channel.send({ embeds: [embed] });
  }
  
}