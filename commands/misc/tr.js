const translate = require("googletrans").default
const { MessageEmbed } = require('discord.js');

module.exports = async function (msg, args) {
  const languages = ['af','sq','am','ar','hy','az','eu','be','bn','bs','bg','ca','ceb','ny','zh','co','hr','cs','da','nl','en','eo','et','tl','fi','fr','fy','gl','ka','de','el','gu','ht','ha','haw','iw','hi','hmn','hu','is','ig','id','ga','it','ja','jw','kn','kk','km','ko','ku','ky','lo','la','lv','lt','lb','mk','mg','ms','ml','mt','mi','mr','mn','my','ne','no','ps','fa','pl','pt','pa','ro','ru','sm','gd','sr','st','sn','sd','si','sk','sl','so','es','su','sw','sv','tg','ta','te','th','tr','uk','ur','uz','vi','cy','xh','yi','yo','zu','fil'];
  const lang = languages.includes(args[0]) ? args[0] : 'auto';
  let keywords = ''

  if(lang in languages){
    keywords = args.slice(1).join(' ');
  }else{
    keywords = args.join(' ');
  }

  translate(keywords, {to: lang}).then(res => {
    //console.log(res.text);
    //=> I speak English
    //console.log(res.src);
    //=> nl
    const embed = new MessageEmbed()
      .setTitle(`**${res.text}**`)
      .setColor('#FFFF00')

      msg.channel.send({ embeds: [embed] });
}).catch(err => {
    console.error(err);
});

  
  
}