const path = require('path')

console.log(process.cwd())
console.log(__dirname)
console.log(__filename)
console.log('dirname:', path.dirname(__filename))
console.log('basename:', path.basename(__filename))
console.log('extname:', path.extname(__filename))

console.log(path.join(__dirname, '6_path.js'))
console.log(path.resolve(__dirname, '6_path.js'))
console.log(path.resolve('6_path.js'))
console.log(path.resolve('./'))
console.log(path.normalize('C://Windows//System32//drivers//etc//hosts'))

console.log(__dirname, 'isAbsolute:', path.isAbsolute(__dirname))
console.log('./', 'isAbsolute:', path.isAbsolute('./'))

console.log(path.relative(__dirname, __filename))

console.log(path.parse(__filename))
