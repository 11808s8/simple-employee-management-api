var express = require('express');
var router = express.Router();
const cargoController = require('../controllers').cargo;

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/api/cargos', cargoController.list);

module.exports = router;
