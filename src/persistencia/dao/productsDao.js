import Product from "../models/ProductosSchema.js";

export default class ProductsDao {
  async findAllProducts() {
    const products = await Product.find();
    return products;
  }
}
