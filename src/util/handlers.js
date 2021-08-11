const fs = require("fs");
const path = require("path");
module.exports = {
  cmd_handler: async function (client) {
    const route = path.join(__dirname, "..", "/", "cmds");
    const files = fs.readdirSync(route);
    files.forEach(async (file) => {
      let command = require(`${route}/${file}`);
      client.commands.set(command.name, command);
    });
  },
  event_handler: async function (client) {
    const route = path.join(__dirname, "..", "/", "events");
    const files = fs.readdirSync(route);
    files.forEach(async (file) => {
      let event = require(`${route}/${file}`);
      client.events.set(event.name, event);
    });

    console.log(client.events)
    client.events.forEach(async (event) => {
      console.log(event)
      if (event.name == "ready") event.run(client);
      else{
      client.on(event.name, (...args) => {
        console.log(event.name)
        event.run(client, ...args);
      });}
    })
  },

  slash_handler: async function (client) {
    const route = path.join(__dirname, "..", "/", "slashcmds");
    const files = fs.readdirSync(route);
    const slashcmdsdata = [];
    files.forEach(async (file) => {
      let slashfile = require(`${route}/${file}`);
      client.slashcmds.set(slashfile.name, slashfile);
      slashcmdsdata.push(slashfile);
    });
    client.guilds.cache.get("731206423878434877").commands.set(slashcmdsdata);
  },
};
