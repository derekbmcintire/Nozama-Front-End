'use strict'

const ordersUi = require('./ui')

const showCart = function () {
  $('.products-wrap').hide()
  $('.shopping-cart').show()
  ordersUi.onShowCart()
}

const hideCart = function () {
  $('.shopping-cart').hide()
  $('.products-wrap').show()
}

const addOrderHandlers = function () {
  $('#show-shopping-cart').on('click', showCart)
  $('#exit-cart').on('click', hideCart)
}

module.exports = {
  addOrderHandlers
}
