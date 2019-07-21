'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Setors', [{
        setor: 'Contabilidade',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        setor: 'Desenvolvimento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        setor: 'Coordenação',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Setors', null, {});
  }
};
