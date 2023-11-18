const mongoose = require('mongoose')
const {Schema} = mongoose

const Product = new Schema({
  title : String,
  price : Number,
  description : String
})

module.exports = mongoose.model('products', Product)