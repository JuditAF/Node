
const crypto = require ('node:crypto');
const book = require ( "../models/book" );
const Book = require('../models/book');


let books = [];


function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
};

function getBookParams(request, response){
    const id_book = request.params.id_book;
    const book = books.find(book => book.id_book === id_book);
    if (book != null && id_book === book.id_book) {
        response.send(book);
    } else {
        response.send({error: true, codigo: 404, mensaje: "El Libro no existe"})
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

    let {title, type, author, price, photo, id_book, id_user} = request.body;
    let newBook =  new Book (title, type, author, price, photo, id_book = id_book ?? crypto.randomUUID(), id_user = id_user ?? 1);
    
    if ( newBook !== null) {

        books.push(newBook);
        respuesta = {error:false, codigo: 201,                      // 201: Código Objeto Creado
                     mensaje: "Libro añadido", data: newBook}
    } else {
        respuesta = {error:true, codigo: 200, 
            mensaje: "Libro ya existente", data: newBook}
    }
    response.send(respuesta);
};


function putBooks(request, response){

    let {title, type, author, price, photo, id_book, id_user} = request.body;
    let i = books.findIndex(book => book.id_book == id_book);

    if(i !== -1) {
        books[i].title = title;
        books[i].type = type;
        books[i].author = author;
        books[i].price = price;
        books[i].photo = photo;
        books[i].id_book = id_book;
        books[i].id_user = id_user;

        // response.send(books[i]);
        respuesta = {error:false, codigo: 200, 
                    mensaje: "Libro Actualizado", data: books[i]}
    } else {
        respuesta = {error:true, codigo: 404, 
                    mensaje: "el Libro no existe", data: book}
    }

    response.send(respuesta);
};


function deleteBooks(request, response){

    let id_book = request.params.id_book;
    let i = books.findIndex(book => book.id_book == parseInt(id_book));
    let respuesta;

    if (book != null && id_book === book.id_book) {
        let bookNull = books.splice(i, 1);
        
        respuesta = {error:false, codigo: 200, 
            mensaje: "Libro eliminado", data: bookNull[0]}
    } else {
        respuesta = {error:true, codigo: 404, 
            mensaje: "el Libro no existe", data: book}
    }
    response.send(respuesta);
};


module.exports = {getStart, getBooks, getBookParams, postBooks, putBooks, deleteBooks};