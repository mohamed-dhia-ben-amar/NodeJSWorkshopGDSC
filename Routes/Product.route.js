import express from 'express';
import * as ProductController from '../Controllers/Product.controller.js'

const router = express.Router();

// Create a new product
router.post('/products', ProductController.createProduct);

// Get all products
router.get('/products', ProductController.getAllProducts);

// Get a single product by ID
router.get('/products/:id', ProductController.getProductById);

// Update a product by ID
router.put('/products/:id', ProductController.updateProductById);

// Delete a product by ID
router.delete('/products/:id', ProductController.deleteProductById);

export default router;