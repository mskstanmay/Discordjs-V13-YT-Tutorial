//Require Packages
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config()

//Events
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('Youtube.', { type: 'WATCHING' });
});

//Login
client.login(process.env.token);