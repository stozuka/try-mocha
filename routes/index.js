'use strict';

const express = require('express');
const router = express.Router();
const indexController = require('../contollers/index');

router.get('/', indexController.getIndex);

module.exports = router;
