const express = require('express')
const productsRepo = require('../../Repositories/products')

const router = express.Router()

router.get('/admin/products', (res, req) => {})

router.get('/admin/products/new', (res, req) => {})

module.exports = router
