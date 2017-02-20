'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('user_hobby_bridge',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      hobby_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'hobbies',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user_hobby_bridge');
  }
};
