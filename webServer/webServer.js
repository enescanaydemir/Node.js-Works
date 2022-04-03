import http from 'http'

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Welcome To Index Page</h2>')
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Welcome To About Page</h2>')
    } else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Welcome To Contact Page</h2>')
    } else if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>Welcom To Home Page</h2>')
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('404 Not Found')
    }

    res.end();
});


const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu Port ${port} de Başlatıldı!`)
});