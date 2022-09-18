import ProductsDao from "../persistencia/dao/productsDao.js";
export default class ProductsService {
  constructor() {
    this.productsDao = new ProductsDao();
  }
  async getAll() {
    const products = await this.productsDao.findAllProducts();
    return products;
  }
}
