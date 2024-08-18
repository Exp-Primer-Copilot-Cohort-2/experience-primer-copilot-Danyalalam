// Create web server
// Create a web server that listens on port 3000 and serves the files comments.html and comments.js. 
// The page should contain a form with a textarea for the comment and a submit button. When the form is submitted, 
// the comment should be appended to the list of comments on the page (without reloading the page). 
// Use AJAX to send the form data to the server.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/comments.html') {
        fs.readFile('comments.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write('404 Not Found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/comments.js') {
        fs.readFile('comments.js', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/javascript'});
                res.write('404 Not Found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
            }
            res.end();
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('404 Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost


