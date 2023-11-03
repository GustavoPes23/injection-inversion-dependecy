import Product from "./Product";
import { IProductRepository } from "./interfaces";
import { uuid } from "./utils";

export default class ProductService {
    constructor(private repository: IProductRepository) {}

    addProduct(name: string): void {
        const id = uuid();
        const product = new Product(id, name);
        this.repository.save(product);
    }

    getProducts(): Product[] {
        return this.repository.findAll();
    }
}