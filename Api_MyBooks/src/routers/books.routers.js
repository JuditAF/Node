
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const booksCtrl = require ('../controller/books.controller');


router.get('/', booksCtrl.getStart);
router.get('/books', booksCtrl.getBooks);
router.get('/books:id_book', booksCtrl.getBookParams);

router.post('/books', booksCtrl.postBooks);
router.put('/books', booksCtrl.putBooks);
router.delete('/books', booksCtrl.deleteBooks);


module.exports = router;

// AQUÍ ESPECIFICAMOS, DEPENDIENDO DE LA RUTA, QUÉ FUNCIÓN QUEREMOS QUE SE EJECUTE