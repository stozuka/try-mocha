'use strict';

module.exports = function(sequelize, DataTypes) {
  var Occupation = sequelize.define('Occupation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    occupation: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'occupations',
    name: {
      singular: 'occupation',
      plural: 'occupations',
    },
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        Occupation.hasOne(models.User, {
          foreignKey: 'id',
          targetKey: 'hobbyId',
        });
      },
    },
  });
  return Occupation;
};
