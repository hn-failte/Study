const fs = require('fs')

const demo = '5_demo.json'
let mode = 'w+'

main()

function main() {
  const fd = fs.openSync(demo, mode)
  const stats = fs.statSync('/home')
  const txt = {
    isFile: stats.isFile(),
    isDirectory: stats.isDirectory(),
    isSymbolicLink: stats.isSymbolicLink(),
    size: stats.size
  }
  fs.writeFileSync(demo, JSON.stringify(txt, null, ' '), { flag: 'w+' })
  const data = fs.readFileSync(demo, 'utf8')
  console.log(data, 'data')
  fs.closeSync(fd)
  console.log('write success')
  fs.unlinkSync(demo)
  console.log('unlink success')
}
