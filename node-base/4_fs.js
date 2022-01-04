const fs = require('fs')

const demo = '4_demo.json'
let mode = 'r+'

main()

function main() {
  fs.open(demo, mode, (err, fd) => {
    if (!err) {
      // fs.stat(demo, (err, stats) => {
      // fs.lstat(demo, (err, stats) => {
      fs.fstat(fd, (err, stats) => {
        if (!err) {
          const txt = {
            isFile: stats.isFile(),
            isDirectory: stats.isDirectory(),
            isSymbolicLink: stats.isSymbolicLink(),
            size: stats.size
          }
          fs.writeFile(demo, JSON.stringify(txt, null, ' '), { flag: 'w+' }, err => {
            if (!err) {
              fs.readFile(demo, 'utf8', (err, data) => {
                if (!err) console.log(data, 'data')
              })
              fs.close(fd, err => {
                if (!err) console.log('write success')
              })
            }
          })
        }
      })
    } else {
      console.log(err.message)
      if (err.errno === -2 && err.code === 'ENOENT') {
        mode = 'w+'
        main()
      }
    }
  })
}
