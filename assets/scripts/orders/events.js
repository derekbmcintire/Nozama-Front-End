'use strict'

const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const keyPublishable = process.env.PUBLISHABLE_KEY
const keySecret = process.env.SECRET_KEY
const stripe = require('stripe')(keySecret)

const purchaseHandler = StripeCheckout.configure({
  key: keyPublishable,
  image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
  locale: 'auto',
  token: function (token) {
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
})

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

const onRemoveProduct = function () {
  const productId = $(event.target).parent().data('id')
  const productArray = store.currentCart.currentProducts
  store.currentCart.currentProducts = productArray.filter((product) => {
    return product.id !== productId
  })
  hideCart()
  showCart()
}

const addOrderHandlers = function () {
  $('#show-shopping-cart').on('click', showCart)
  $('#exit-cart').on('click', hideCart)
  $('#submit-cart').on('click', onSubmitCart)
  $('.cart-products').on('click', '.remove-product', onRemoveProduct)
}

module.exports = {
  addOrderHandlers,
  purchaseHandler
}
