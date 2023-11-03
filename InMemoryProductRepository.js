export default class InMemoryProductRepository {
    products = [];

    findById(id) {
        return this.products.find(product => product.id === id) || null;
    }

    findAll() {
        return this.products;
    }
    
    save(product) {
        this.products.push(product);
    }
}
