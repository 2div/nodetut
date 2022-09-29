const path = require('path');

const filepath = path.join('\folder','subfoler','test.txt');
const basename = path.basename(filepath)
console.log(filepath);
console.log(basename);

const absolate = path.resolve(__dirname,'folder','subfolder','test.txt')
console.log(absolate)
