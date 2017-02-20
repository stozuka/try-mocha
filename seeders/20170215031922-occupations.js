'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'occupations',
      [
        {occupation: 'Football Player'},
        {occupation: 'Baseball Player'},
        {occupation: 'Software Engineer'},
        {occupation: 'Student'},
        {occupation: 'Unemployed'},
      ],
      {}
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('occupations', null, {});
  }
};
