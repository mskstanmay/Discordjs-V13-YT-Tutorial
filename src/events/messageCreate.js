module.exports = {
    name: "messageCreate",
    run: async (client, message) => {
     let prefix = "?";
     let args = message.content.trim().split(/ /g);
     const actionword = args[0].toLowerCase();
     const cmd = client.commands.get(actionword);
    if(!cmd) return;
     cmd.run(client,message,args);
    },
  };
  