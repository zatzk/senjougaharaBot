const { Client, Intents } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, 
                            Intents.FLAGS.DIRECT_MESSAGES,
                            Intents.FLAGS.GUILD_MESSAGES],
                            partials: ['MESSAGE', 'CHANNEL'] });

client.login(process.env.BOT_TOKEN);


client.once('ready', () => {
	console.log('Ready! 💖');
  client.user.setActivity('NEKOPARA!', {type : 'PLAYING'} );
});



const commandHandler = require('./commands');


client.on('messageCreate', commandHandler);

