let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = db.data.users[who]
    if (typeof user == 'undefined') {
        user = {
            exp: 0,
            limit: 10,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            autolevelup: false,
            banned: false,
            level: 0,
            premium: false,
            premiumTime: 0,
            role: '',
            sw: false,
        }
    }
    m.reply(`⌜ USER STATS ⌟:
*┏━───────────────────╮*
*┃➥ Limit : ${user.limit}*
*┃➥ XP : ${user.exp}*
*┃➥ Level ${user.level}*
*┃➥ Role : ${user.role}*
*┗━───────────────────╯*`)
}
handler.help = ['me [@user]', 'my [@user]', 'stats [@user]']
handler.tags = ['xp']
handler.command = /^(me|my|stats)$/i

module.exports = handler
