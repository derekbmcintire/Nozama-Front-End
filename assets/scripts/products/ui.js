'use strict'

const store = require('../store')

const showProductsHtml = require('../templates/show-products.hbs')

// Get products index ui show data
const onGetProductsSuccess = function (data) {
  store.products = data.products
  // console.log('store is ', store.products)
  const showProducts = showProductsHtml({ products: data.products })
  // clears list before appending (so you don't have duplicates)
  $('.show-products-content').html('')
  // append content to div
  $('.show-products-content').append(showProducts)
  console.log('get success')
}

// Get products index show failure message + error
const onGetProductsFailure = function (error) {
  console.log('get failure')
  console.log(error)
}

const getOrderProductSuccess = function (product) {
  store.orderProducts.push(product)
  console.log('product retrieved')
}

const getOrderProductFailure = function () {
  console.log('failed to get product')
}

module.exports = {
  onGetProductsSuccess,
  onGetProductsFailure,
  getOrderProductSuccess,
  getOrderProductFailure
}
