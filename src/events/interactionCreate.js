module.exports = {
  name: "interactionCreate",
  run: async (client, interaction) => {
     if (!interaction.isCommand()) return;
    await interaction.deferReply({ ephemeral: true });

    const command = client.slashcmds.get(interaction.commandName);
    if (!command) interaction.followUp("Wtf!");
    command.run(client,interaction)

  },
};
