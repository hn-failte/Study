const http = require('http')

const options = {
  hostname: '127.0.0.1',
  port: 10086,
  path: '/',
  method: 'POST'
}

const req = http.request(options, res => {
  let dataStr = ''
  res.on('data', chunk => {
    dataStr += chunk
  })
  res.on('end', () => {
    const data = JSON.parse(dataStr)
    console.log(`id is ${data.id}`)
  })
})

req.on('error', e => {
  console.error(`problem with request: ${e.message}`)
})

req.write(
  JSON.stringify({
    id: 1
  })
)

req.end()

http.get('http://127.0.0.1:10086', res => {
  let data = ''
  res.on('data', chunk => {
    data += chunk
  })
  res.on('end', () => {
    console.log(data)
  })
})
