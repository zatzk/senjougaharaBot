const translate = require("googletrans").default
const { MessageEmbed } = require('discord.js');

module.exports = async function (msg, args) {
  const languages = ['af','sq','am','ar','hy','az','eu','be','bn','bs','bg','ca','ceb','ny','zh','co','hr','cs','da','nl','en','eo','et','tl','fi','fr','fy','gl','ka','de','el','gu','ht','ha','haw','iw','hi','hmn','hu','is','ig','id','ga','it','ja','jw','kn','kk','km','ko','ku','ky','lo','la','lv','lt','lb','mk','mg','ms','ml','mt','mi','mr','mn','my','ne','no','ps','fa','pl','pt','pa','ro','ru','sm','gd','sr','st','sn','sd','si','sk','sl','so','es','su','sw','sv','tg','ta','te','th','tr','uk','ur','uz','vi','cy','xh','yi','yo','zu','fil'];

  let keywords = args;

  for(let i = 0; i <= languages.length; i++) {
    if(languages[i] == keywords[0]) {
      lang = keywords[0];
      keywords.shift();
      break;
    }
    else{
      lang = 'auto';
    }
  }

  console.log(lang)
  keywords = keywords.join(' ');



  translate(keywords, {to: lang}).then(res => {
    console.log(res.text);
    
    const embed = new MessageEmbed()
      .setTitle(`**${res.text}**`)
      .setColor('#FFFF00')

    msg.channel.send({ embeds: [embed] });
    }).catch(err => {
      console.error(err);
    });



}