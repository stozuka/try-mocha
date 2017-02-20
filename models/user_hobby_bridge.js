'use strict';

module.exports = function(sequelize, DataTypes) {
  var UserHobbyBridge = sequelize.define('UserHobbyBridge', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      allowNull: false,
    },
    hobbyId: {
      type: DataTypes.INTEGER,
      field: 'hobby_id',
      allowNull: false,
    },
  }, {
    tableName: 'user_hobby_bridge',
    name: {
      singular: 'userHobbyBridge',
      plural: 'userHobbyBridge',
    },
    freezeTableName: true,
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        UserHobbyBridge.belongsTo(models.Hobby, {
          foreignKey: 'hobbyId',
        });
      },
    },
  });
  return UserHobbyBridge;
};
