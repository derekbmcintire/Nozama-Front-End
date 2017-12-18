'use strict'
const store = require('../store')

const config = require('../config')

const getProducts = function () {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteProduct = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/products/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateProduct = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/products/' + store.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const createProduct = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const findProduct = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/products/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getProducts,
  deleteProduct,
  updateProduct,
  findProduct,
  createProduct
}
