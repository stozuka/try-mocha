'use strict';

const express = require('express');
const router = express.Router();
const hobbiesController = require('../contollers/hobbies');

router.post('/', hobbiesController.postHobbies);

module.exports = router;
