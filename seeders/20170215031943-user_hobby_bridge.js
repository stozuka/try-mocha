'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'user_hobby_bridge',
      [
        {user_id: 1, hobby_id: 1},
        {user_id: 1, hobby_id: 2},
        {user_id: 1, hobby_id: 3},
        {user_id: 2, hobby_id: 3},
        {user_id: 2, hobby_id: 4},
        {user_id: 3, hobby_id: 5},
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_hobby_bridge', null, {});
  }
};
