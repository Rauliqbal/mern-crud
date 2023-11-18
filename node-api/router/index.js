const express = require('express')
const { getProducts, createProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/controllerProduct')
const route = express.Router()

route.get('/', getProducts)
route.post('/', createProduct),
route.get('/:id', getProductById)
route.put('/:id',updateProduct)
route.delete('/:id', deleteProduct)

module.exports= route
