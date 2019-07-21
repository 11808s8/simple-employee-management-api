const Nivel = require('../models').Nivel;

module.exports = {
  list(req, res) {
    return Nivel
      .findAll()
      .then((niveis) => res.status(200).send(niveis))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Nivel
      .findByPk(req.params.id)
      .then((nivel) => {
        if (!nivel) {
          return res.status(404).send({
            message: 'Nivel não encontrado',
          });
        }
        return res.status(200).send(nivel);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Nivel
      .create({
        nivel: req.body.nivel,
      })
      .then((nivel) => res.status(201).send(nivel))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Nivel
      .findByPk(req.params.id)
      .then(nivel => {
        if (!nivel) {
          return res.status(404).send({
            message: 'Nivel não encontrado!',
          });
        }
        return nivel
          .update({
            nivel: req.body.nivel
          })
          .then(() => res.status(200).send(nivel))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Nivel
      .findByPk(req.params.id)
      .then(nivel => {
        if (!nivel) {
          return res.status(400).send({
            message: 'Nivel não encontrado',
          });
        }
        return nivel
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}