const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // GET Request
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Suriyaprasath - Node.js</title>
            </head>
            <body>
                <h1>Node.js HTTP Request Demo</h1>
                <h2>Student: Suriyaprasath K</h2>
                <p>Kongu Engineering College</p>
                <p>Department: Information Technology</p>
                <p>GET request handled successfully.</p>
                <p>Server is running on port ${PORT}.</p>
            </body>
            </html>
        `);
    }

    // POST Request
    else if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                student: 'Suriyaprasath K',
                method: 'POST',
                message: 'Data received successfully',
                data: body
            }));
        });
    }

    // PUT Request
    else if (req.method === 'PUT' && req.url === '/data') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                student: 'Suriyaprasath K',
                method: 'PUT',
                message: 'Data updated successfully',
                data: body
            }));
        });
    }

    // DELETE Request
    else if (req.method === 'DELETE' && req.url === '/data') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            student: 'Suriyaprasath K',
            method: 'DELETE',
            message: 'Data deleted successfully'
        }));
    }

    // Invalid Request
    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('404 - Page Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Student: Suriyaprasath K');
});
