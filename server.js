const http = require('http');
const url = require('url');

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');

    route(handle, pathname);
    
    response.writeHead(225, { 'Content-Type': 'text/plain' });
    response.write('bonjour tout le monde!');
    response.end();
  }
  http.createServer(onRequest).listen(4321);
  console.log('Server has started.');
}


exports.start = start;

