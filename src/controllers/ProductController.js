const Product = require('../models/Product')

module.exports = {
  async index(request, response){
    const productIndex = await Product.find()

    return response.json(productIndex)
  },

  async show(request, response){
    const productShow = await Product.findById(request.params.id)

    return response.json(productShow)
  },

  async store(request, response){
    const productStore = await Product.create(request.body)

    return response.json(productStore)
  },

  async update(request, response){
    const productUpdate = await Product.findByIdAndUpdate(request.params.id, request.body, {
      new: true
    })

    return response.json(productUpdate)
  },

  async destroy(request, response){
    await Product.findByIdAndRemove(request.params.id)
    return response.send()
  }
  
  
}