const http = require('http')
const url = require('url')

const handleIndex = require('./routes/index')
const handleTest = require('./routes/postTest')

const server = http.createServer(function (req, res) {
    let pathName = url.parse(req.url, true, false).pathname;

    if (pathName == "/") {
        handleIndex(req, res);
    }

    if (pathName == "/test") {
        handleTest(req, res);
    }
})

server.listen(8888);
console.log("Server is listening!");
