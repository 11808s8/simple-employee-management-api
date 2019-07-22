const Usuario = require('../models').Usuario;

module.exports = {
  list(req, res) {
    return Usuario
      .findAll()
      .then((usuarios) => res.status(200).send(usuarios))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return Usuario
      .findByPk(req.params.id)
      .then((usuario) => {
        if (!usuario) {
          return res.status(404).send({
            message: 'Usuario não encontrado',
          });
        }
        return res.status(200).send(usuario);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return Usuario
      .create({
        usuario: req.body.usuario,
      })
      .then((usuario) => res.status(201).send(usuario))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Usuario
      .findByPk(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(404).send({
            message: 'Usuario não encontrado!',
          });
        }
        return usuario
          .update({
            usuario: req.body.usuario
          })
          .then(() => res.status(200).send(usuario))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return Usuario
      .findByPk(req.params.id)
      .then(usuario => {
        if (!usuario) {
          return res.status(400).send({
            message: 'Usuario não encontrado',
          });
        }
        return usuario
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
}