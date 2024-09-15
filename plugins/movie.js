const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "movie",
    desc: "search movie",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let data = await fetchJson(`https://www.omdbapi.com/?apikey=448bb257&t=${q}`)

if(!q) return reply("*_Please give me a movie name._*")
    


let mvInfo = `*_QUEEN MATHEE MOVIE SEARCH 🔎_*

┌───────────────────
├ *_● Movie Name :-_* ${data.Title}
├ *_● Released Date :-_* ${data.Released}
├ *_● Runtime :-_* ${data.Runtime}
├ *_● Genre :-_* ${data.Genre}
├ *_● Director :-_* ${data.Director}
├ *_● Writer :-_* ${data.Writer}
├ *_● Actors :-_* ${data.Actors}
├ *_● Language :-_* ${data.Language}
├ *_● Awards :-_* ${data.Awards}
├ *_● IMDB Rating :-_* ${data.imdbRating}
├ *_● IMDB Votes :-_* ${data.imdbVotes}
├ *_● Metascore :-_* ${data.Metascore}
├ *_● Type :-_* ${data.Type}
├ *_● Box Office :-_* ${data.BoxOffice}
├ *_● Website :-_* ${data.Website}
└───────────────────

> ǫᴜᴇᴇɴ ᴍᴀᴛʜᴇᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`
           

await conn.sendMessage(from,{image:{url: data.Poster},caption:mvInfo},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
