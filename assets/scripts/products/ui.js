'use strict'

const showProductsHtml = require('../templates/show-products.hbs')

// Get products index ui show data
const onGetProductsSuccess = function (data) {
  const showProducts = showProductsHtml({ products: data.products })
  // $('.content').html('')
  $('.show-products-content').append(showProducts)
  console.log('get success')
  console.log('data is', data)
}

// Get products index show failure message + error
const onGetProductsFailure = function (error) {
  console.log('get failure')
  console.log(error)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductsFailure
}
