
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