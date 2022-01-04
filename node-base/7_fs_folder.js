const path = require('path')
const fs = require('fs')

const folderName = 'demo'

main()

function main() {
  fs.access(path.resolve(folderName), err => {
    if (!err) {
      const dir = fs.readdirSync(folderName)
      console.log(dir)
      fs.renameSync(folderName, folderName + 1)
      fs.rmdirSync(folderName + 1)
      console.log(fs.lstatSync('.'))
      console.log(fs.statSync('.'))
    } else {
      console.log(err.message)
      fs.mkdirSync(folderName)
      main()
    }
  })
}
