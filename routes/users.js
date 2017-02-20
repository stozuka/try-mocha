'use strict';

const express = require('express');
const router = express.Router();
const usersController = require('../contollers/users');

router.route('/:id')
  .get(usersController.getUser)
  .delete(usersController.deleteUser);

router.route('/')
  .get(usersController.getUsers)
  .post(usersController.postUser)
  .put(usersController.putUser);

module.exports = router;
