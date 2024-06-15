
const net = require ('node:net');  // protocolo Tcp
const { error } = require('node:console');


function findAvalaiblePort (desiredPort){

    return new Promise ((resolve, reject) =>{

        const server = net.createServer();

        server.listen(desiredPort, ()=> {

            const { port } = server.address();
            server.close(()=> {
                resolve(port);

            });
        });

        server.on('error', ()=> {
            if(error.code === 'EADDRINUSE') {

                console.log("¡Puerto ocupado!. Redireccionando... ");
                findAvalaiblePort(0).then(port => resolve(port))

            } else {

                reject(error);

            }
        });
    })
};

module.exports = {findAvalaiblePort};


// *Al exportar en otro documento: 
// const { findAvalaiblePort } = require ('./functionPort.js');
// const desiredPort = process.env.PORT ?? 3000;
//  const server = http.createServer((req,res)=>{
//     console.log('request received');
//     res.end("¡Hola Mundo!");
//  });

//  findAvalaiblePort(desiredPort).then(port => {
//     server.listen(port, ()=> {
//         console.log(`server listening on port http://localhost:${desiredPort}`);
//     });
//  })



// server.listen(0, ()=> {
//     console.log(`server listening on port http://localhost:${server.address().port}`);
// });