'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGetProducts = function (event) {
  event.preventDefault()
  api.getProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.onGetProductsFailure)
}

const onAddProduct = function () {
  const currentId = $(event.target).parent().parent().data('id')
  const item = store.products.filter((product) => product.id === currentId)
  store.currentCart.currentProducts.push(item[0])
  console.log('current products are ', store.currentCart.currentProducts)
}

const addProductHandlers = function () {
  $('.dummy-button-get').on('click', onGetProducts)
  // $('.dummy-button-get-single').on('.click', onGetSingleProduct)
  $('.show-products-content').on('click', '.add-product-button', onAddProduct)
  console.log('this happens')
}

module.exports = {
  onGetProducts,
  // onGetSingleProduct,
  addProductHandlers
}
