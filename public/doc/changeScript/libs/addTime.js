const fs = require('fs')
const regExpScript = /(<script\s+([a-z]+=['|"][a-z\/\-]+['|"]\s+){0,}src=['|"][\${}a-zA-Z0-9\.\/\-:]+\.js)(?:\?time=\d+)?(['|"](\s+[a-z]+=['|"][a-z\/\-]+['|"]){0,}><\/script>)/g
const regExpLink = /(<link\s+([a-z]+=['|"][a-z\/\-]+['|"]\s+){0,}href=['|"][\${}a-zA-Z0-9\.\/\-:]+\.css)(?:\?time=\d+)?(['|"](\s+[a-z]+=['|"][a-z\/\-]+['|"]){0,}>)/g
function addTimeScript (pathName) {
  fs.readFile(pathName, (err, data) => {
    const str = data.toString()
      .replace(regExpScript, (...rest) => {
        var result = ''
        try {
          result = rest[1] + '?time='+ Date.now() + rest[3]
        } catch (err) {
          result = ''
        }
        return result
      })
      .replace(regExpLink, (...rest) => {
        var result = ''
        try {
          result = rest[1] + '?time='+ Date.now() + rest[3]
        } catch (err) {
          result = ''
        }
        return result
      })
    var result = new Uint8Array(Buffer.from(str))
    fs.writeFile(pathName, result, (err) => {
      if (err) throw err
      console.log(pathName + '：文件已被修改')
    })
  })
}
module.exports = addTimeScript
