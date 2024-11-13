// Create web server
// Start the server
// Listen on port 3000
// Respond with "Hello, World!" for requests that hit the root URL
// Respond with a 404 for requests that don't hit the root URL

// Load the http module to create an http server.
var http = require('http');
var url = require('url');

// Configure our HTTP server to respond with Hello, World! to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;
  if (path === '/') {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello, World!\n");
  } else {
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.end("404 Not Found\n");
  }
});

// Listen on port 3000, IP defaults to


