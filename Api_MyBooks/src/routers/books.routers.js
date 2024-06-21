
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const booksCtrl = require ('../controller/book.controller');


router.get('/', booksCtrl.getStart);
router.get('/book', booksCtrl.getBooks);
router.get('/book:id_book', booksCtrl.getBookParams);

router.post('/book', booksCtrl.postBooks);
router.put('/book', booksCtrl.putBooks);
router.delete('/book', booksCtrl.deleteBooks);


module.exports = router;

// AQUÍ ESPECIFICAMOS, DEPENDIENDO DE LA RUTA, QUÉ FUNCIÓN QUEREMOS QUE SE EJECUTE