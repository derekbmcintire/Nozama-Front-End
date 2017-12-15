'use strict'

const store = require('../store')

const cart = require('../templates/cart.handlebars')

// const showCart = cart({ products: store.currentCart.currentProducts })

const onShowCart = function () {
  const data = store.products
  console.log('store.products is ', data)
  console.log('this is onShowCart')
  $('.cart-products').append(cart({ products: data }))
}

module.exports = {
  onShowCart
}
