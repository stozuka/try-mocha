'use strict';

// Because of models/index.js, all model classes are set under models.
// So, don't have to require each model classes
const models = require('../models');

function getUser(req, res, next) {
  models.User
    .findOne({where: {id: req.params.id}})
    .then(function (user) {
      res.json(user);
      return null;
    })
    .catch(next);
}

function getUsers(req, res, next) {
  models.User
    .findAll({
      attributes: {exclude: ['occupationId']},
      include: [{
          model: models.Occupation,
          required: true,
        }, {
          model: models.UserHobbyBridge,
          attributes: ['id'],
          // attributes: {include: ['id']},
          include: [{
            model: models.Hobby,
          }],
        },
      ],
    })
    // Or, you can include all the associations with one line
    // Set nested to true when include in nested like above
    // .findAll({ include: [{all: true, nested: true}]})
    .then(function (users) {
      res.json({data: users});
      return null;
    })
    .catch(next);
}

function postUser(req, res, next) {
  let data = {
    name: req.body.name,
    occupationId: req.body.occupationId,
  };

  models.User
    .create(data)
    .then(function (saved) {
      res.json(saved.toJSON());
      return null;
    })
    .catch(next);
}

function putUser(req, res, next) {
  let userId = req.body.id;
  let data = {
    name: req.body.name,
    occupationId: req.query.occupationId
  };

  models.User
    .update(data, {where: {id: userId}})
    .then(function () {
      res.json('Updated');
      return null;
    })
    .catch(next);
}

function deleteUser(req, res, next) {
  let id = parseInt(req.params.id);

  models.User
    .destroy({where: {id: id}})
    .then(function () {
      res.json('Deleted');
      return null;
    })
    .catch(next);
}

module.exports = {
  getUser,
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
