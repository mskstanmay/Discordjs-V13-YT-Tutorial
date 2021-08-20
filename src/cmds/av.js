module.exports = {
    name:"av",
    description:"Gives the avatar of a user.",
    run: async (client,message,args)=>{
        const target = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.member;
        message.reply(target.user.displayAvatarURL({dynamic:true,size:4096}))
    }
}