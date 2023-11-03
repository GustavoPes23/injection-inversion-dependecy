import Product from "./Product";

export interface IProductRepository {
    findById(id: string): Product | null,
    findAll(): Product[];
    save(product: Product): void;
}