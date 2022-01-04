const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  console.log(req.headers.cookie)
  res.statusCode = 200
  res.setHeader(
    'Set-Cookie',
    `txt=e;Expires=${new Date().getTime() + 15 * 60 * 1000};HttpOnly=true;Secure=true`
  )
  let formData = ''
  if (req.method === 'POST') {
    req.on('data', chunk => {
      formData += chunk
    })
    req.on('end', () => {
      console.log(formData)
      res.write(formData)
      res.end()
    })
  } else {
    res.write('my server')
    res.end()
  }
})

server.listen(10086)
