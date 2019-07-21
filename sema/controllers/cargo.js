const Cargo = require('../models').Cargo;

module.exports = {
  list(req, res) {
    return Cargo
      .findAll()
      .then((cargos) => res.status(200).send(cargos))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Cargo
      .findByPk(req.params.id)
      .then((cargo) => {
        if (!cargo) {
          return res.status(404).send({
            message: 'Cargo não encontrado',
          });
        }
        return res.status(200).send(cargo);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Cargo
      .create({
        cargo: req.body.cargo,
      })
      .then((cargo) => res.status(201).send(cargo))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Cargo
      .findByPk(req.params.id)
      .then(cargo => {
        if (!cargo) {
          return res.status(404).send({
            message: 'Cargo não encontrado!',
          });
        }
        return cargo
          .update({
            cargo: req.body.cargo
          })
          .then(() => res.status(200).send(cargo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Cargo
      .findByPk(req.params.id)
      .then(cargo => {
        if (!cargo) {
          return res.status(400).send({
            message: 'Cargo não encontrado',
          });
        }
        return cargo
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}