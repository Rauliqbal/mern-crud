const Product = require('../models/modelProduct')
const response = (statusCode,message,data, res) => {
  res.status(statusCode).json({
    status_code : statusCode,
    message: message,
    data : data
  })
}

// Get All Data
const getProducts = async(req,res) => {
  try {
    const products = await Product.find()
    response(200, 'List Products!', products, res)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

// Get Data By ID
const getProductById = async(req,res) => {
  try {
    const product = await Product.findById(req.params.id)
    response(200, 'Product By Id', product, res)
  } catch (error) {
    res.status(404).json({message: error.message})
  }
}

// Create Data
const createProduct = async (req,res) => {
  const products = new Product(req.body)
  try {
    const savedProduct = await products.save()
    response(200, 'Created Product Succesfully !', savedProduct, res)    
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

// Update Data
const updateProduct = async(req,res) => {
  const cekId = await Product.findById(req.params.id);
  if(!cekId) return res.status(404).json({message: 'Data tidak ditemukan'})
  try {
    const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body})
    response(200, 'Updated Product Succesfully !', updatedProduct,res)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

// Delete Data
const deleteProduct = async(req,res) => {
  const cekId = await Product.findById(req.params.id);
  if(!cekId) return res.status(404).json({message: 'Data tidak ditemukan'})
  try {
    const deletedProduct = await Product.deleteOne({_id: req.params.id})
    response(200, 'Deleted Product Succesfully !', deletedProduct, res)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}


module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct}