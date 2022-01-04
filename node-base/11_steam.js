const fs = require('fs')
const Stream = require('stream')

const readStream = new Stream.Readable({
  read(arg) {
    console.log(arg, 'arg')
  }
})
readStream.on('readable', () => {
  console.log(readStream.read().toString(), 'readable')
})
readStream.push('readStream.push')

const writeStream = new Stream.Writable({
  write(chunk, encoding, next) {
    console.log(chunk instanceof Buffer, 'chunkType')
    console.log(chunk.toString(), 'chunkContent')
    console.log(encoding, 'chunkEncoding')
    next()
  }
})

writeStream.write('writeStream.write')
writeStream.end('writeStream.end')

// 读取文件流
const s = fs.createReadStream(__filename)
let sContent = ''
s.on('readable', () => {
  const buffer = s.read()
  if (buffer) sContent += buffer.toString()
})
s.on('end', () => {
  console.log(sContent, 'end')
})
