import express from 'express'
import { products } from '../data.js'
import Product from '../models/Product.js'

const router = express.Router()

//Get all products
router.get('/', (req, res) =>{
  res.json(products)
  console.log('Fetching products'.green.underline)
})

//Get single product
router.get('/:id', (req, res) => {  
  const product = products.find((p) => p._id = req.params.id)
  res.json(product)
  console.log('Fetching product'.green.underline)
})

//Create a Product

export default router