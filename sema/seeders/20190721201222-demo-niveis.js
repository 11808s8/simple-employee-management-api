'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nivels', [{
        nivel: 'Administrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Recursos Humanos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nivel: 'Usuario Comum',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Setors', null, {});
  }
};
