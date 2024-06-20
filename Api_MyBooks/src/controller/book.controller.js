
let book = null;  // Aquí implementamos todas las funciones necesarias para gestionar los métodos a implementar GET, POST, PUT y DELETE


function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
};
function getBook(request, response){
    let respuesta;
    if(book != null) {
        respuesta = book;
    } else {
        respuesta = {error: true, codigo: 200, mensaje: 'El libro no existe'};
    }
    response.send(respuesta);
};
// function getBookParams(request, response){};

// function postBook(){};
// function putBook(){};
// function deleteBook(){};

// module.exports = {getStart, getBook, getBookParams, postBook, putBook, deleteBook};
module.exports = {getStart, getBook};