const express = require('express');

const router = express.Router();

const productApi = require('../controller/product');
// console.log('router loaded');

router.use('/product', require('./product'));

module.exports = router;