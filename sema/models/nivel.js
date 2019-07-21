'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nivel = sequelize.define('Nivel', {
    nivel: DataTypes.STRING
  }, {});
  Nivel.associate = function(models) {
    // associations can be defined here
  };
  return Nivel;
};