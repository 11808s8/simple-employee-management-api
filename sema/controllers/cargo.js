const Cargo = require('../models').Cargo;

module.exports = {
  list(req, res) {
    return Cargo
      .findAll()
      .then((cargos) => res.status(200).send(cargos))
      .catch((error) => { res.status(400).send(error); });
  },
}