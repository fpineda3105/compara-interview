import { expect } from 'chai';
import { describe } from 'mocha';
import { BaseProduct } from '../src/domain/products/BaseProduct';
import { Product, ProductName } from '../src/domain/products/Product';
import { ProductFactory } from '../src/domain/products/ProductFactory';

describe('Product Factory Tests', () => {
    it('create MegaCoverageProduct', async () => {
        // Prepare data
        const megaProduct : Product = ProductFactory.create(ProductName.MEGA_COVERAGE, 10, 20);
        
        // Execution
        megaProduct.dailyUpdate();

        // Assertions
        expect(megaProduct.name).equal(ProductName.MEGA_COVERAGE);
        expect(megaProduct.sellIn).equal(10);
        expect(megaProduct.price).equal(20);
    })    
})