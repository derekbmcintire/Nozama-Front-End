'use strict'

const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const showOrder = require('../templates/single-order.hbs')
const getFormFields = require('../../../lib/get-form-fields.js')

const onGetProducts = function () {
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

const onUpdateProduct = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateProduct(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const onRemoveProduct = function (e) {
  e.preventDefault()
  api.deleteProduct($(e.target).parent().data('id'))
    .then(ui.deleteSuccess(e))
    .catch(ui.deleteFailure)
}

const onUpdateField = function (e) {
  e.preventDefault()
  store.id = $(e.target).parent().data('id')
  ui.populateUpdateFields(store.id)
}

const onCreateEvent = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createProduct(data)
    .then(ui.createSuccess)
    .then(onGetProducts)
    .catch(ui.createFailure)
  $('#create-product').children('input').val('')
}

const addProductHandlers = function () {
  // $('.dummy-button-get-single').on('.click', onGetSingleProduct)
  $('.show-products-content').on('click', '.add-product-button', onAddProduct)
  $('.show-products-content').on('click', '.remove', onRemoveProduct)
  $('.show-products-content').on('click', '.update', onUpdateField)
  $('#update-product').on('submit', onUpdateProduct)
  $('#create-product').on('submit', onCreateEvent)
  console.log('this happens')
}

// trying to loop through orders product id's and return each product in an array, then display each product in a template
const onGetOrderProducts = function (productArr) {
  store.myOrder.orderProducts = []

  const promiseProducts = function (productArr) {
    return new Promise((resolve, reject) => {
      productArr.forEach(id => {
        api.getOrderProduct(id)
          .then(ui.getOrderProductSuccess)
          .catch(ui.getOrderProductFailure)
      })
      // console.log('afterpromise ', store.orderProducts)
      resolve(store.myOrder.orderProducts)
    })
  }

  promiseProducts(productArr)
    .then((products) => {
      console.log('my order ', store.myOrder)
      $('.order-wrap').append(showOrder({ order: store.myOrder, products: store.myOrder.orderProducts }))
    })
    .catch(console.error)
}

module.exports = {
  onGetProducts,
  // onGetSingleProduct,
  addProductHandlers,
  onGetOrderProducts
}
