'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hking = sequelize.define('Hking', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Hking.associate = function(models) {
    // associations can be defined here
  };
  return Hking;
};