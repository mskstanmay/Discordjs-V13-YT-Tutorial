//Require Packages..
const { Client, Intents, Collection } = require("discord.js");
const mongo = require('./util/mongo.js')
const {
  cmd_handler,
  event_handler,
  slash_handler,
} = require("./util/handlers");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_WEBHOOKS],

});
client.commands = new Collection();
client.events = new Collection();
client.slashcmds = new Collection();
require("dotenv").config();

//Events.
  mongo()
client.on("ready", () => {
 // console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Youtube.", { type: "WATCHING" });
  cmd_handler(client);
  event_handler(client);
  slash_handler(client);
});

//Login.
client.login("ODc0MjMyMzQ0MzM1MjUzNTM0.YRD-UQ.v5eyBbupUAM_N6Dpy0rz0LIKeJA");
