'use strict'

const config = require('../config')
const store = require('../store')

const submitOrder = function (data) {
  console.log('data in api is ', data)
  return $.ajax({
    url: config.apiOrigin + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  submitOrder
}
