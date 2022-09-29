const {readFileSync,writeFileSync} = require('fs')

const file1 = readFileSync('./folder/first.txt','utf-8')
const file2 = readFileSync('./folder/second.txt','utf-8')

writeFileSync('./folder/file3',` ${file1},\n\ ${file2}`,{flag:'a'})