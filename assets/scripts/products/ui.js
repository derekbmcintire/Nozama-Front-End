'use strict'

const store = require('../store')
const api = require('./api')
const showProductsHtml = require('../templates/show-products.hbs')

const deleteSuccess = function (event) {
  console.log('Event Deleted')
  $(event.target).parent().remove()
}

const deleteFailure = function () {
  $('#feedback-message').text('Deletion Failed')
}

// Get products index ui show data
const onGetProductsSuccess = function (data) {
  store.products = data.products
  // console.log('store is ', store.products)
  const showProducts = showProductsHtml({ products: data.products })
  // clears list before appending (so you don't have duplicates)
  $('.show-products-content').html('')
  // append content to div
  $('.show-products-content').append(showProducts)
  // add delete content handler
  $('.remove').on('click', function (e) {
    e.preventDefault()
    api.deleteProduct($(e.target).parent().data('id'))
      .then(deleteSuccess(e))
      .catch(deleteFailure)
  })
  console.log('get success')
}

// Get products index show failure message + error
const onGetProductsFailure = function (error) {
  console.log('get failure')
  console.log(error)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductsFailure
}
