'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onGetProducts = function (event) {
  event.preventDefault()
  api.getProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.onGetProductsFailure)
}

const onAddProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
}

const addProductHandlers = function () {
  $('.dummy-button-get').on('click', onGetProducts)
  // $('.dummy-button-get-single').on('.click', onGetSingleProduct)
  $('.show-products-content').on('click', 'add-product-button', onAddProduct)
}

module.exports = {
  onGetProducts,
  // onGetSingleProduct,
  addProductHandlers
}
