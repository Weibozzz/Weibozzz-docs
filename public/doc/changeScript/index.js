var path = require('path')
var fileDisplay = require('./libs/findFile.js')
var ignoreDir = ['node_modules'] // 忽略的文件夹
//解析需要遍历的文件夹，我这以当前目录为例
var filePath = path.resolve(__dirname)
//调用文件遍历方法
fileDisplay(filePath, ignoreDir, '.jsp')
