'use strict';
module.exports = (sequelize, DataTypes) => {
  const Setor = sequelize.define('Setor', {
    setor: DataTypes.STRING
  }, {});
  Setor.associate = function(models) {
    // associations can be defined here
  };
  return Setor;
};