
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


function postBook(request, response){
    let respuesta;
    console.log(request.body);
    if ( book === null ) {
        book = { title: request.body.title,
                 type: request.body.type,
                 author: request.body.author,
                 price: request.body.price,
                 photo: request.body.photo,
                 id_book: request.body.id_book,
                 id_user: request.body.id_user
        }
        respuesta = {error:false, codigo: 200, 
                     mensaje: "Libro Creado", data: book}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "Libro ya existe", data: book}
    }
    response.send(respuesta);
};


function putBook(request, response){
    let respuesta;
    if (book != null) {
        book.title = request.body.title;
        book.type = request.body.type;
        book.author = request.body.author;
        book.price = request.body.price;
        book.photo = request.body.photo;
        book.id_book = request.body.id_book;
        book.id_user = request.body.id_user;

        respuesta = {error:false, codigo: 200, 
            mensaje: "Libro Actualizado", data: book}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "el Libro no existe", data: book}
    }
    response.send(respuesta);
};


function deleteBook(request, response){
    let respuesta;
    if (book != null) {
        book = null;
        respuesta = {error:false, codigo: 200, 
            mensaje: "Libro eliminado", data: book}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "el Libro no existe", data: book}
    }
    response.send(respuesta);
};

module.exports = {getStart, getBook, postBook, putBook, deleteBook};