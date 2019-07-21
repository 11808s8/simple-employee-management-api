const Setor = require('../models').Setor;

module.exports = {
  list(req, res) {
    return Setor
      .findAll()
      .then((setores) => res.status(200).send(setores))
      .catch((error) => { res.status(400).send(error); });
  },
}