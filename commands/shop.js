const Discord = require('discord.js')
module.exports = {
    name:"shop",
    description:"databse",
    async run(message,args){
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Shop For Today')
        .addFields(
            {name:"PS5" ,value: " Price 700"},
            { name:"Xbox Series X" ,value: " Price 600" },
            { name:"Human" , value: " Price 60000"}
        )
        message.channel.send(embed)

    }
}