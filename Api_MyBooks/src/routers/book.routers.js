
const {Router} = require ('express');
const router = Router();                                        // FICHERO CON CADA ENDPOINT
const booksCtrl = require ('../controller/book.controller');


router.get('/', booksCtrl.getStart);
router.get('/book', booksCtrl.getBook);


router.post('/book', booksCtrl.postBook);
router.put('/book', booksCtrl.putBook);
router.delete('/book', booksCtrl.deleteBook);


module.exports = router;

// AQUÍ ESPECIFICAMOS, DEPENDIENDO DE LA RUTA, QUÉ FUNCIÓN QUEREMOS QUE SE EJECUTE