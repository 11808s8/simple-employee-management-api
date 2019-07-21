var express = require('express');
var router = express.Router();
const cargoController = require('../controllers').cargo;
const setorController = require('../controllers').setor;
const nivelController = require('../controllers').nivel;
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/cargos', cargoController.list);
router.get('/api/cargo/:id', cargoController.getById);
router.put('/api/cargo/:id', cargoController.update);
router.post('/api/cargo', cargoController.add);
router.delete('/api/cargo/:id', cargoController.delete);


router.get('/api/setores', setorController.list);
router.get('/api/setor/:id', setorController.getById);
router.put('/api/setor/:id', setorController.update);
router.post('/api/setor', setorController.add);
router.delete('/api/setor/:id', setorController.delete);

router.get('/api/niveis', nivelController.list);
router.get('/api/nivel/:id', nivelController.getById);
router.put('/api/nivel/:id', nivelController.update);
router.post('/api/nivel', nivelController.add);
router.delete('/api/nivel/:id', nivelController.delete);


module.exports = router;
