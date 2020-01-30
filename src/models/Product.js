const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  Name: String,
  CreatedAt:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Product', ProductSchema)