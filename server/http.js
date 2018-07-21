var http = require('http');

let server = http.createServer((req, res) => {
  res.end('123')
})

server.listen(9999, () => {
  console.log('server is ok');
} )
