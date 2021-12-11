let handler  = async (m, { conn, args }) => {
   m.reply(`private banh`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
