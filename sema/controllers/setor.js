const Setor = require('../models').Setor;

module.exports = {
  list(req, res) {
    return Setor
      .findAll()
      .then((setores) => res.status(200).send(setores))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Setor
      .findByPk(req.params.id)
      .then((setor) => {
        if (!setor) {
          return res.status(404).send({
            message: 'Setor não encontrado',
          });
        }
        return res.status(200).send(setor);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Setor
      .create({
        setor: req.body.setor,
      })
      .then((setor) => res.status(201).send(setor))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Setor
      .findByPk(req.params.id)
      .then(setor => {
        if (!setor) {
          return res.status(404).send({
            message: 'Setor não encontrado!',
          });
        }
        return setor
          .update({
            setor: req.body.setor
          })
          .then(() => res.status(200).send(setor))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Setor
      .findByPk(req.params.id)
      .then(setor => {
        if (!setor) {
          return res.status(400).send({
            message: 'Setor não encontrado',
          });
        }
        return setor
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}