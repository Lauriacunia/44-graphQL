import productsController from "../controllers/products.js";
const productController = new productsController();

export const resolvers = {
  Query: {
    getAllProducts: () => {
      return productController.getAll();
    },
  },
};
