import InMemoryProductRepository from "./InMemoryProductRepository";
import ProductService from "./ProductService";
import { JSONToString } from "./utils";

const repositoryInstance = new InMemoryProductRepository();
const productServiceInstance = new ProductService(repositoryInstance);

productServiceInstance.addProduct("Produto 1");
productServiceInstance.addProduct("Produto 2");

const allProducts = productServiceInstance.getProducts();
console.log(`All products: ${JSONToString(allProducts)}`);