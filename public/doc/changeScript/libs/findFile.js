var fs = require('fs')
var path = require('path')
var addTimeScript = require('./addTime')
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 * @param ignoreDir 忽略的文件夹
 * @param suffix 后缀
 */
function fileDisplay (filePath, ignoreDir, suffix) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    // console.log(files)
    if (err) {
      console.warn(err)
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename)
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败')
          } else {
            var isFile = stats.isFile()//是文件
            var isDir = stats.isDirectory()//是文件夹
            if (isFile && filename.endsWith(suffix)) {
              addTimeScript(filedir)
            }
            if (isDir && ignoreDir.indexOf(filename) === -1) {
              fileDisplay(filedir, ignoreDir, suffix)//递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        })
      })
    }
  })
}

module.exports = fileDisplay