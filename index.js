require('dotenv').config();
const client = require('./client');



client.once('ready', () => {
	console.log('Ready! 💖');
  client.user.setActivity('NEKOPARA!', {type : 'PLAYING'} );
});




const commandHandler = require('./commands');

client.on('messageCreate', commandHandler);











client.login(process.env.BOT_TOKEN);