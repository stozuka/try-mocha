'use strict';

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    occupationId: {
      type: DataTypes.INTEGER,
      // If key (occupationId) and actual field name in the table (occupation_id) is different, you can set field name
      field: 'occupation_id',
      allowNull: false,
    },
  }, {
    // If model name (User) and table name (users) is different, define tableName
    tableName: 'users',
    // If you want to change the table name when it's eagerly queried by the other model having belongsTo(User), belongsToMany(User) etc, define the names here.
    // "singular" is used when User model is eagerly queried using belongsTo (or hasOne) method by the other model
    // "plural" is used when User model is eagerly queried using belongsToMany method by the other model
    name: {
      singular: 'user',
      plural: 'users',
    },
    // Sequelize tries to infer table name from model name (User). For example, if the model name is User, the table name is inferred as users (plural).
    // If you want to disable this function, you can set freezeTableName to true
    freezeTableName: true,
    // When underscored is true, Sequelize tries to change key names from camel case to snake case when processing the query (save, update, delete, etc).
    underscored: true,
    // Sequelize assumes the table has createdAt, updateAt, and deletedAt field, and automatically update these fields when querying. If the table doesn't have these fields, you can set timestamps to false.
    timestamps: false,
    // Class method must be defined under "classMethods"
    classMethods: {
      // Relations are defined in associate
      associate: function(models) {
        User.belongsTo(models.Occupation, {
          foreignKey: 'occupationId', // foreignKey in User model
          targetKey: 'id', // foreignKey in Occupation model
        });

        User.hasMany(models.UserHobbyBridge, {
          foreignKey: 'id', // foreignKey in User model
          targetKey: 'useId', // foreignKey in UserHobbyBridge model
        });
      },
    },
    // Instance method must be defined under "instanceMethods"
    instanceMethods: {
      // If you want to customize the returning object, you can override toJSON method here ("serialize" of Bookshelf)
      toJSON: function () {
        // Instance can be accessed by "this"
        let hobbies = this.userHobbyBridge.map(function (bridge) {
          return {id: bridge.hobby.id ,hobby: bridge.hobby.hobby};
        });

        return {
          id: this.id,
          name: this.name,
          occupation: this.occupation,
          hobbies: hobbies
        };
      },
    },
  });
  return User;
};
