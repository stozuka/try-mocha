'use strict';

module.exports = function(sequelize, DataTypes) {
  var Hobby = sequelize.define('Hobby', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hobby: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    tableName: 'hobbies',
    name: {
      singular: 'hobby',
      plural: 'hobbies',
    },
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        ;
      },
    },
  });
  return Hobby;
};
