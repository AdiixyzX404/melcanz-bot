let handler = async function (m, { conn }) {
  conn.sendContact(m.chat, '60199782326', 'Ownerbot', m)
  .then(() => m.reply('nih owner gw'))
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler
