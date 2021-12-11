let handler = async (m) => {
    m.reply(`
┌「 *donasi* 」
├ https://saweria.co/itsukichan
├ pulsa : 60199782326
└────
`.trim())
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
