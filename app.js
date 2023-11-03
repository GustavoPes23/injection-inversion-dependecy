import InMemoryProductRepository from "./InMemoryProductRepository.js";
import ProductService from "./ProductService.js";
import { JSONToString } from "./utils.js";

const repositoryInstance = new InMemoryProductRepository();
const productServiceInstance = new ProductService(repositoryInstance);

productServiceInstance.addProduct("Produto 1");
productServiceInstance.addProduct("Produto 2");

const allProducts = productServiceInstance.getProducts();
console.log(`All products: ${JSONToString(allProducts)}`);