// services/productService.js
const Product = require('../models/productModel');

exports.getAllProducts = async () => {
  return await Product.find(); // Assuming we're using a MongoDB model
};

exports.getProductById = async (id) => {
  return await Product.findById(id);
};

exports.createProduct = async (productData) => {
  const product = new Product(productData);
  return await product.save();
};

exports.updateProduct = async (id, updatedData) => {
  return await Product.findByIdAndUpdate(id, updatedData, { new: true });
};

exports.deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
