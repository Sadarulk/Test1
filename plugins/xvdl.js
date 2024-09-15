const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')


let xvi = '*_QUEEN MATHEE XVIDEO DOWNLOADER 📥_*\n\nYour 18+ video is downloading...\n\n> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ'
let cap = '> ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡᴀ ʙᴏᴛ'

cmd({
    pattern: "xvdl",
    alias: ["xvideodl"],
    desc: "download xvideos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

if (!q && !q.startsWith("https://")) return reply("*_Please give me a xvideo url._*")


        //fetch data from api  
        let data = await fetchJson(`https://api.fgmods.xyz/api/downloader/xvideosdl?url=${q}&apikey=nRHt2lt5`)

        await conn.sendMessage(from,{image:{url:data.result.thumb},caption:xvi},{quoted:mek})
        //send video
        await conn.sendMessage(from,{video: {url:data.result.url_dl},mimetype:"video/mp4",caption: `${cap}` },{quoted: mek})
          

}catch(e){
console.log(e)
reply(`${e}`)

}
})
