'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      data_entrada: {
        type: Sequelize.DATE
      },
      data_saida: {
        type: Sequelize.DATE
      },
      CargoId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Cargos',
          key: 'id'
        }
      },
      SetorId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Setors',
          key: 'id'
        }
      },
      carga_horaria: {
        type: Sequelize.INTEGER
      },
      senha: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      NivelId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Nivels',
          key: 'id'
        }
      },
      // nivel: {
      //   type: Sequelize.INTEGER
      // },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Usuarios');
  }
};