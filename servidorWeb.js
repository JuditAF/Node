
const colorinchis = require('picocolors'); // Módulo npm para colorear soluciones en consola
const http = require ('node:http'); // Protocolo Http


const processRequest = (request,response) => {

    console.log('Petición recibida del cliente', 
                        `\n Url : ${request.url}`,
                        colorinchis.bgYellow(`\n Método : ${request.method}`),
                        colorinchis.blue(`\n Agente : ${request.headers['user-agent']}`));
    switch(request.url) {
        case '/': { 
            response.writeHead(200, {'Content-Type':'application/json, chasert=utf-8'});
            response.write('{ ok: true, \n message: " ¡ Recibido ! " }');
            return response.end();
            break
        } case '/by': {
            response.writeHead(200, {'Content-Type':'application/json, chasert=utf-8'});
            response.write('{ ok: true, \n message: " ¡ Adiós ! " }');
            return response.end();
            break
        } default: { 
            response.statusCode = 404;
            response.writeHead(404, {'Content-Type': 'text/html, chasert=utf-8'});
            response.write('{ ok: false, \n message: " ¡ Página no encontrada ! " }');
            return response.end('<h3> Error: 404 </h3>');
            break
        }
    }

};

const server = http.createServer(processRequest);

server.listen(3000, ()=> {

    console.log(colorinchis.red(`server listening on port http://localhost:${3000}`));

});