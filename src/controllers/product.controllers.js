import productServices from "../services/product.services.js";

const createProduct = async (req, res) => {
  try {
    const createdProduct = await productServices.createProduct(req.body);

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();

    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productServices.getProductById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export default { createProduct, getProducts, getProductById };