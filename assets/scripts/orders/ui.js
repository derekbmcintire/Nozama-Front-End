'use strict'

const store = require('../store')

const cart = require('../templates/cart.handlebars')

// const showCart = cart({ products: store.currentCart.currentProducts })

const onShowCart = function (data) {
  data = store.currentCart.currentProducts
  console.log(data)
  console.log('this is onShowCart')
  $('.cart-products').append(cart({ products: data }))
}

module.exports = {
  onShowCart
}
