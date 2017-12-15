'use strict'

const store = require('../store')

const cart = require('../templates/cart.handlebars')

// const showCart = cart({ products: store.currentCart.currentProducts })

const onShowCart = function () {
  const data = store.currentCart.currentProducts
  console.log('this is data in onShowCart ', data)
  $('.cart-products').append(cart({ products: data }))
}

module.exports = {
  onShowCart
}
