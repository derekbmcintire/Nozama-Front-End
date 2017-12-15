'use strict'

const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const showCart = function () {
  $('.products-wrap').hide()
  $('.shopping-cart').show()
  ui.onShowCart()
}

const hideCart = function () {
  $('.shopping-cart').hide()
  $('.products-wrap').show()
  $('.cart-products').html('')
}

const onSubmitCart = function () {
  const productArray = store.currentCart.currentProducts
  productArray.forEach((product) => {
    store.currentCart.cart.order.products.push({
      product_id: product.id,
      quantity: 1
    })
  })
  api.submitOrder(store.currentCart.cart)
    .then(ui.submitOrderSuccess)
    .catch(ui.submitOrderFailure)
}

const addOrderHandlers = function () {
  $('#show-shopping-cart').on('click', showCart)
  $('#exit-cart').on('click', hideCart)
  $('#submit-cart').on('click', onSubmitCart)
}

module.exports = {
  addOrderHandlers
}
