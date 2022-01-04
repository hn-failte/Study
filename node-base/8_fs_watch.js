const fs = require('fs')

fs.watch('.', (action, file) => {
  console.log('files changed')
  console.log(file, action)
})

// fs.watchFile('8_test.json', (stat, prevStat) => {
//   console.log('file changed')
//   console.log('Prev Size', prevStat.size)
//   console.log('Size', stat.size)
// })
