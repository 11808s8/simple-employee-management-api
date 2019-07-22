'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    data_entrada: DataTypes.DATE,
    data_saida: DataTypes.DATE,
    // cargo: DataTypes.INTEGER,
    // setor: DataTypes.INTEGER,
    carga_horaria: DataTypes.INTEGER,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    // nivel: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    
    models.Usuario.belongsTo(models.Cargo);
    models.Usuario.belongsTo(models.Setor);
    models.Usuario.belongsTo(models.Nivel);
  };
  return Usuario;
};