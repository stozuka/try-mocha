'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('hobbies',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      hobby: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('hobbies');
  }
};
