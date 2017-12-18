'use strict'

const store = require('../store')
const orders = require('../templates/orders.hbs')
const cart = require('../templates/cart.hbs')
const prodEvents = require('../products/events.js')

// show users stored products
const onShowCart = function () {
  const data = store.currentCart.currentProducts
  store.cartTotal = data.map((item) => item.price).reduce((acc, price) => acc + price)
  $('.cart-products').append(cart({ products: data, cartTotal: store.cartTotal }))
}

// success message to submit users stored data to orders
const submitOrderSuccess = function () {
  console.log('Successfully posted an order!')
}

// failure message for submit order
const submitOrderFailure = function () {
  console.log('Order not posted successfully')
}

const showOrdersSuccess = function (data) {
  store.myOrders = data.orders.filter(order => {
    return order._owner === store.user.id
  })
  console.log(store.myOrders[0].id)
  $('.orders-wrap').append(orders({ orders: store.myOrders }))
}

const showOrdersFailure = function () {
  console.log('failed getting orders')
}

const getOrderSuccess = function (data) {
  store.myOrder = data.order
  console.log('your order ', data.order)
  displayOrder(store.myOrder)
}

const getOrderFailure = function (data) {
  console.log('your order ', data)
  console.log('get order failure')
}

const displayOrder = function (order) {
  const products = store.myOrder.products
  store.productIdArr = []
  products.forEach(product => {
    store.productIdArr.push(product.product_id)
  })
  prodEvents.onGetOrderProducts(store.productIdArr)
}

module.exports = {
  onShowCart,
  submitOrderSuccess,
  submitOrderFailure,
  showOrdersSuccess,
  showOrdersFailure,
  getOrderSuccess,
  getOrderFailure
}
