const http = require('http');
const url = require('url');

function start(route) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    route(pathname);
    
    response.writeHead(225, { 'Content-Type': 'text/plain' });
    response.write('hello world!');
    response.end();
  }
  http.createServer(onRequest).listen(4321);
  console.log('Server has started.');
}


exports.start = start;

