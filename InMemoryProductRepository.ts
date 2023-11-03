import Product from "./Product";
import { IProductRepository } from "./interfaces";

export default class InMemoryProductRepository implements IProductRepository {
    private products: Product[] = [];

    findById(id: string): Product | null {
        return this.products.find(product => product.id === id) || null;
    }

    findAll(): Product[] {
        return this.products;
    }

    save(product: Product): void {
        this.products.push(product);
    }
}