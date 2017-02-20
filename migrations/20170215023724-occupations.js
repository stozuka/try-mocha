'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('occupations',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      occupation: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('occupations');
  }
};
