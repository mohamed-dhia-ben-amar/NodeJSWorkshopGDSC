import Product from "../Models/Product.model.js";


// Create a new product
export async function createProduct(req, res) {
    const { name, quantity, price, bought } = req.body;
    Product.create({ name, quantity, price, bought })
        .then((product) => {
            res.status(201).json(product);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
}

// Get all products
export async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
}

/*
// Get all products bt with selected fields plus id
export async function getAllProducts(req, res) {
    try {
        const products = await Product.find().select('name price quantity bought');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
}
*/

/*
// Get all products bt with selected fields and without id
export async function getAllProducts(req, res) {
    try {
        const products = await Product.find({}, { _id: 0, name: 1, price: 1, quantity: 1, bought: 1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
}
*/

// Get a single product by ID
export async function getProductById(req, res) {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve product' });
    }
}

// Update a product by ID
export async function updateProductById(req, res) {
    try {
        const { id } = req.params;
        const { name, quantity, price, bought } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { name, quantity, price, bought },
            { new: true }
        );
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
}

// Delete a product by ID
export async function deleteProductById(req, res) {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (deletedProduct) {
            res.status(200).json(deletedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
}