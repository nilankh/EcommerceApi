const express = require("express");

const router = express.Router();

const productApi = require("../controller/product");

router.post("/product", productApi.addProducts);

module.exports = router;