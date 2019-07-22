'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [{
    nome: 'Adriano Gomes da Silva',
    cpf: '03261405066',
    data_entrada: new Date(),
    data_saida: null,
    carga_horaria: 8,
    senha: 'batata',
    email: 'adrianogsss@gmail.com',
    CargoId:1,
    SetorId:2,
    NivelId:1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
    {
      nome: 'Pietra Costa',
      cpf: '03261405066',
      data_entrada: new Date(),
      data_saida: null,
      carga_horaria: 8,
      senha: 'batata',
      email: 'teste@testemail.com',
      CargoId:2,
      SetorId:2,
      NivelId:2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Felix Innuendo',
      cpf: '03261405066',
      data_entrada: new Date(),
      data_saida: null,
      carga_horaria: 8,
      senha: 'batata',
      email: 'teste@testemail.com',
      CargoId:3,
      SetorId:1,
      NivelId:3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
