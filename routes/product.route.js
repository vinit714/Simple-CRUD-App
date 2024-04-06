const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createproduct, updatedProduct, deleteProduct} =require('../controllers/product.controller.js')

router.get('/', getProducts);
router.get("/:id", getProduct);

router.post("/", createproduct)

router.put("/:id", updatedProduct);

router.put("/:id", deleteProduct);

module.exports = router;