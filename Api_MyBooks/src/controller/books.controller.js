
const book = require ( "../models/book" );


let books = [];


function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
};

function getBookParams(request, response){
    let id_book = request.params.id_book;
    let book = books.find(book => book.id_book == parseInt(id_book));
    if (book != null && id_book === book.id_book) {
        response.send(book);
    } else {
        response.send({error: true, codigo: 200, mensaje: "El Libro no existe"})
    }
};

function getBooks(request, response){
    if (books != null) {
        response.json(books)
    } else {
        response.send({error: true, codigo: 200, mensaje: "La lista de libros está vacía"})
    }
};


function postBooks(request, response){
    
    let newBook = new Book (title, type, author, price, photo, id_book, id_user);

    if ( newBook === null ) {
        newBook = { title: request.body.title,
                 type: request.body.type,
                 author: request.body.author,
                 price: request.body.price,
                 photo: request.body.photo,
                 id_book: request.body.id_book,
                 id_user: request.body.id_user
        }
        books.push(newBook);
        response.send.json(newBook);
        respuesta = {error:false, codigo: 200, 
                     mensaje: "Libro añadido", data: newBook}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "Libro ya existente", data: book}
    }
    response.send(respuesta);
};


function putBooks(request, response){
    
    let id_book = request.params.id_book;

    let i = books.findIndex(book => book.id_book == parseInt(id_book));
    let respuesta;

    if (newBook != null && i !== -1) {
        books[i].title = request.body.title;
        books[i].type = request.body.type;
        books[i].author = request.body.author;
        books[i].price = request.body.price;
        books[i].photo = request.body.photo;
        books[i].id_book = request.body.id_book;
        books[i].id_user = request.body.id_user;

        response.json(books[i]);
        respuesta = {error:false, codigo: 200, 
            mensaje: "Libro Actualizado", data: newBook}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "el Libro no existe", data: newBook}
    }
    response.send(respuesta);
};


function deleteBooks(request, response){

    let id_book = request.params.id_book;
    let i = books.findIndex(book => book.id_book == parseInt(id_book));
    let respuesta;

    if (book != null && id_book === book.id_book) {
        let bookNull = books.splice(i, 1);
        
        res.json(bookNull[0]);
        respuesta = {error:false, codigo: 200, 
            mensaje: "Libro eliminado", data: books}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "el Libro no existe", data: books}
    }
    response.send(respuesta);
};


module.exports = {getStart, getBooks, getBookParams, postBooks, putBooks, deleteBooks};