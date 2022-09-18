import ProductsService from "../services/products.js";

export default class productsController {
  constructor() {
    this.productService = new ProductsService();
  }
  async getAll(req, res) {
    try {
      const products = await this.productService.getAll();
      return products;
    } catch (err) {
      console.log(err);
    }
  }
  //   async getProductById(req, res) {
  //     try {
  //       const product = await this.productos.getById(req.params.id);
  //       res.json(product);
  //     } catch (err) {
  //       res.status(500).json({ error: err.message });
  //     }
  //   }
  //   async addProduct(req, res) {
  //     try {
  //       const product = await this.productos.add(req.body);
  //       res.json(product);
  //     } catch (err) {
  //       res.status(500).json({ error: err.message });
  //     }
  //   }
  //   async updateProduct(req, res) {
  //     try {
  //       const product = await this.productos.update(req.params.id, req.body);
  //       res.json(product);
  //     } catch (err) {
  //       res.status(500).json({ error: err.message });
  //     }
  //   }
  //   async deleteProduct(req, res) {
  //     try {
  //       const product = await this.productos.delete(req.params.id);
  //       res.json(product);
  //     } catch (err) {
  //       res.status(500).json({ error: err.message });
  //     }
  //   }
}
