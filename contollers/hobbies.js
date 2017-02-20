'use strict';

const models = require('../models');

function createHobbiesObjArr(req) {
  let arr = [];

  req.body.hobbies.forEach(function (hobby) {
    arr.push({hobby: hobby});
  });

  return arr;
}

function postHobbies(req, res, next) {
  // hobbiesObjArr looks like
  // [{hobby: "Travelling", {hobby: "Running"}]
  let hobbiesObjArr = createHobbiesObjArr(req);

  models.Hobby
    .bulkCreate(hobbiesObjArr)
    .then(function () {
      res.json('Created');
      return null;
    })
    .catch(next);
}

module.exports = {
  postHobbies,
};
