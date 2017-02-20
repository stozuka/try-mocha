'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {name: 'Lionel Messi', occupation_id: 1},
        {name: 'Ichiro Suzuki', occupation_id: 2},
        {name: 'Yi-Shin Chen', occupation_id: 3},
        {name: 'Peter Chen', occupation_id: 4},
        {name: 'Yamada Taro', occupation_id: 5},
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
