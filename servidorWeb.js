
const colorinchis = require ('picocolors');
const http = require ('http');

const server = http.createServer(function(request, response) {

    console.log('Petición recibida del cliente');
    response.writeHead(200, {'x-content-Type':'text/plain'});
    response.write({ ok: true, message: 'Recibido!' });
    response.end();

});

server.listen(3000);