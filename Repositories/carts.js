const Repository = require('./repository')

class CartsRepositoty extends Repository {}

module.exports = new CartsRepositoty('carts.json')
