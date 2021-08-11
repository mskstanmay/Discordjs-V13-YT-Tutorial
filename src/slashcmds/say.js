module.exports = {
  name: "say",
  description: "Say Something...",
  options: [
    {
      name: "content",
      type: "STRING",
      description: "The thing you want to say",
      required: true,
    },
  ],
  run: async (client,interaction)=>{
    const stuff = interaction.options.getString("content")
    interaction.followUp({content:stuff})
  }
};
