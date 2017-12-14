'use strict'

const store = {
  currentCart: {
    cart: {
      products: [{
        product_id: '5a32f4261f7bc43a6e970026',
        quantity: 3
      },
      {
        product_id: '5a32f4481f7bc43a6e970027',
        quantity: 1
      },
      {
        product_id: '5a32f46f1f7bc43a6e970028',
        quantity: 2
      }],
      total: 15
    },
    currentProducts: [
      {
        _id: '5a32f4261f7bc43a6e970026',
        updatedAt: '2017-12-14T21:59:02.825Z',
        createdAt: '2017-12-14T21:59:02.825Z',
        name: 'product1',
        description: 'this product is so cool.',
        url: 'http://woah.jpg',
        stock: 15,
        price: 45,
        _owner: '5a32a3e2d0d6b6183916758e',
        __v: 0,
        id: '5a32f4261f7bc43a6e970026'
      },
      {
        _id: '5a32f4481f7bc43a6e970027',
        updatedAt: '2017-12-14T21:59:36.310Z',
        createdAt: '2017-12-14T21:59:36.310Z',
        name: 'product2',
        description: 'this product is so very nice.',
        url: 'http://wowa.jpg',
        stock: 34,
        price: 10,
        _owner: '5a32a3e2d0d6b6183916758e',
        __v: 0,
        id: '5a32f4481f7bc43a6e970027'
      },
      {
        _id: '5a32f46f1f7bc43a6e970028',
        updatedAt: '2017-12-14T22:00:15.484Z',
        createdAt: '2017-12-14T22:00:15.484Z',
        name: 'product3',
        description: 'this product is so so, so, so good.',
        url: 'http://wowawwweeee.jpg',
        stock: 16,
        price: 122,
        _owner: '5a32a3e2d0d6b6183916758e',
        __v: 0,
        id: '5a32f46f1f7bc43a6e970028'
      }
    ]
  }
}

module.exports = store
