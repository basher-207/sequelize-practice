const express = require('express');
const productController = require("../controllers/productsController.js");
const router = express.Router();

router.route("/")
.get(productController.getAllProducts)
.post(productController.checkProducts, productController.createProduct)

router.route("/:id")
.all(productController.validateProductId)
.get(productController.getProductById)
.put(productController.checkProducts, productController.updateProduct)
.delete(productController.deleteProduct)

module.exports = router;
