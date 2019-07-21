var express = require('express');
var router = express.Router();
const cargoController = require('../controllers').cargo;
const setorController = require('../controllers').setor;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/cargos', cargoController.list);
router.get('/api/setores', setorController.list);

module.exports = router;
