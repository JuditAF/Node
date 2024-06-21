
class Book {

    constructor (title, type, author, price, photo, id_book=0, id_user=0) {

        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo = photo;
        this.id_book = id_book;
        this.id_user = id_user;
        
    }

}

module.exports = Book;

// {
//     "title": "El Guerrero a la Sombra del Cerezo",
//     "type": "Novela Histórica",
//     "author": "David D.Gil",
//     "price": "43.50",
//     "photo": "https://m.media-amazon.com/images/I/91AOK0vUY+L._AC_UF1000,1000_QL80_.jpg",
//     "id_book": "356569",
//     "id_user": "18"
// }

// {
//     "title": "Ocho Millones de Dioses",
//     "type": "Novela Histórica",
//     "author": "David D.Gil",
//     "price": "44.50",
//     "photo": "https://m.media-amazon.com/images/I/81l9hyXn+dL._AC_UF894,1000_QL80_.jpg",
//     "id_book": "359116",
//     "id_user": "18"
// }

// {
//     "title": "Código Limpio",
//     "type": "Programación",
//     "author": "Robert C.Martin",
//     "price": "54.50",
//     "photo": "https://m.media-amazon.com/images/I/61orja1+P7L._AC_UF1000,1000_QL80_.jpg",
//     "id_book": "368842",
//     "id_user": "14"
// }

// {
//     "title": "El enigma de las Arenas",
//     "type": "Novela contemporánea",
//     "author": "Arturo Pérez-Reverte",
//     "price": "41.80",
//     "photo": "https://www.oletvm.com/imagenes/9788435/978843505566.JPG",
//     "id_book": "320789",
//     "id_user": "12"
// }