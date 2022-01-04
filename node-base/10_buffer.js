const str = 'string'
const buffer = Buffer.from(str)
console.log(buffer)
console.log(buffer.length, buffer.toString(), 'buffer')

const buf = Buffer.alloc(10)
buf.write('string')
console.log(buf.length, buf.toString(), 'buf')

const bufc = Buffer.alloc(6)
buf.copy(bufc)
console.log(bufc.length, bufc.toString(), 'bufc')

const bufl = buf.slice(0, 6)
console.log(bufl.length, bufl.toString(), 'bufl')
