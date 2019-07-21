'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cargos', [{
        cargo: 'Analista',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cargo: 'Secretário',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cargo: 'CEO',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cargos', null, {});
  }
};
