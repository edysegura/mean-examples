import http from 'http'

const server = http.createServer((request, response) => {
    console.log('Request for: ' + request.url)
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('This is a little server!\n')
})

server.listen(3000, _ => console.log('Server started at http://localhost:3000'))