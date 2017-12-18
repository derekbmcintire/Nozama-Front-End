'use strict'

const store = require('../store')
const api = require('./api')
const showProductsHtml = require('../templates/show-products.hbs')

const deleteSuccess = function (event) {
  console.log('Product Deleted')
  $(event.target).parent().remove()
}

const deleteFailure = function () {
  console.log('Deletion Failed')
}

const updateSuccess = function () {
  $('#update-product').hide()
  console.log('Update Complete')
  api.getProducts()
    .then(onGetProductsSuccess)
    .catch(onGetProductsFailure)
}

// Filling update form fields
const findSuccess = function (data) {
  const product = data.product
  console.log('Product retrieved')
  $('#update-name').attr('value', product.name)
  $('#update-description').attr('value', product.description)
  $('#update-url').attr('value', product.url)
  $('#update-stock').attr('value', product.stock)
  $('#update-price').attr('value', product.price)
  $('#update-product').show()
}

const findFailure = function () {
  console.log('Product not found')
}

// retrieves product information and calls a function to populate fields
const populateUpdateFields = function (id) {
  api.findProduct(id)
    .then(findSuccess)
    .catch(findFailure)
}

// Get products index ui show data
const onGetProductsSuccess = function (data) {
  store.products = data.products
  // console.log('store is ', store.products)
  const showProducts = showProductsHtml({ products: data.products })
  // clears list before appending (so you don't have duplicates)
  $('.show-products-content').html('')
  // append content to div
  $('.show-products-content').append(showProducts)
  $('.admin').hide()
}

// Get products index show failure message + error
const onGetProductsFailure = function (error) {
  console.log('get failure')
  console.log(error)
}


const createSuccess = function () {
  console.log('Product Created')
}

const createFailure = function (error) {
  console.log(error)

const getOrderProductSuccess = function (product) {
  store.myOrder.orderProducts.push(product)
  // console.log('product retrieved')
  return store.myOrder.orderProducts
}

const getOrderProductFailure = function () {
  console.log('failed to get product')

}

module.exports = {
  onGetProductsSuccess,
  onGetProductsFailure,

  updateSuccess,
  populateUpdateFields,
  deleteSuccess,
  deleteFailure,

  createSuccess,
  createFailure,


  getOrderProductSuccess,
  getOrderProductFailure

}
