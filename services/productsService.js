const Products = require("../models/productModel.js");

exports.getAllProducts = async () => {
    const result = await Products.findAll();
    return result;
};

exports.getProductById = async (id) => {
    const resultList = await Products.findAll({
        where: {
        id: id
        }
    });
    return resultList[0];
};

exports.createProduct = async (data) => {
    await Products.create(data, {fields: ['id', 'title', 'price', 'description']});
    return;
};

exports.updateProduct = async (id, data) => {
    await Products.update(data, {
        where: {
          id: id
        }
      });
    return;
};

exports.deleteProduct = async (id) => {
    await Products.destroy({
        where: {
          id: id
        }
    });
    return;
};
