const fetch = require('node-fetch');


module.exports = async function (msg, args) {

  let keywords = 'excited'
  if(args.length > 0){
    keywords = args;
  }
  let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&contentfilter=low`
  let response = await fetch(url);
  let json = await response.json();
  
  const index = Math.floor(Math.random() * json.results.length);

  msg.channel.send(json.results[index].url);
}