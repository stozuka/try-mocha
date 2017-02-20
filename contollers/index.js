'use strict';

function getIndex(req, res, next) {
  let obj = {
    title: 'Sample web API using sequelize',
    url: 'https://github.com/stozuka/sequelize-demo-app',
  }

  res.render('index', obj);
}

module.exports = {
  getIndex
};
