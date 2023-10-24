const ProductsService = require("../services/productsService.js");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductsService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await ProductsService.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    await ProductsService.createProduct(req.body);
    res.status(200).json({ "Message": "New product created" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await ProductsService.updateProduct(req.params.id, req.body);
    res.status(200).json({ "Message": `Product with id: ${req.params.id} was updated` });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await ProductsService.deleteProduct(req.params.id);
    res.status(200).json({ "Message": `Product with id: ${req.params.id} was deleted` });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.validateProductId = async (req, res, next) => {
  try {
    const product = await ProductsService.getProductById(req.params.id);
    console.log(product);

    product.length === 0 ?
    res.status(404).json({status: 'fail', message: 'Invalid products id'}) :
    next();
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.checkProducts = (req, res, next) => {
  !req.body.title ?
  res.status(400).json({ status: 'fail', message: 'Title is required' }):
  next();
};
