let fs = require('fs')
let chalk = require('chalk')

global.owner = ['60199782326']
global.mods = []

global.APIs = {
  amel: 'https://melcanz.net',
}
global.APIKeys = {
  'https://melcanz.net': 'VuAoY9Ct',
}

global.packname = 'AdyyBotz'
global.author = '@Adiixyz'
global.wm = '© adyy'
global.eror = 'aowkaowk emror'
global.wait = '_Wait. Lemme process this stupid_'
global.benar = '✅'
global.salah = '❌'
global.dikit = 'dikit lagi'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("memperbaharui 'config.js'"))
  delete require.cache[file]
  require(file)
})
