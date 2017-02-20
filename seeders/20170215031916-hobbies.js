'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'hobbies',
      [
        {hobby: 'Playing Football'},
        {hobby: 'Watching Movie'},
        {hobby: 'Reading Books'},
        {hobby: 'Listening Music'},
        {hobby: 'Drinking'},
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('hobbies', null, {});
  }
};
