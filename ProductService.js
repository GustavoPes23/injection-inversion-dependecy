import Product from "./Product.js";
import { uuid } from "./utils.js";

export default class ProductService {
    repository;

    constructor(repository) {
        this.repository = repository;
    }

    addProduct(name) {
        const id = uuid();
        const product = new Product(id, name);
        this.repository.save(product);
    }

    getProducts() {
        return this.repository.findAll();
    }
}
