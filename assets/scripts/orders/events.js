'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const $script = require('scriptjs')

$script('https://checkout.stripe.com/checkout.js', function () {
  const handler = StripeCheckout.configure({
    key: 'pk_test_OTB8FL8IFKn9v24Qi7h64eCz',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: function (token) {
      console.log('token is ', token)
      const tokenData = {
        token: {
          token_id: token.id
        }
      }
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      const sendToken = function (data) {
        return $.ajax({
          url: 'https://still-thicket-16022.herokuapp.com/tokens',
          method: 'POST',
          data
        })
      }
      sendToken(tokenData).then(console.log('great success!')).catch(console.error)
    }
  })
  document.getElementById('submit-cart-stripe').addEventListener('click', function (e) {
    // Open Checkout with further options:
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: 2000
    })
    e.preventDefault()
  })
  // Close Checkout on page navigation:
  window.addEventListener('popstate', function () {
    handler.close()
  })
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
  addOrderHandlers
}
