const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "downa",
    desc: "Download direct link",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if (!q && !q.startsWith("https://")) return reply("*_Please give me a direct download link._*")

await conn.sendMessage(from,{audio: {url: q },mimetype:"audio/mpeg"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})