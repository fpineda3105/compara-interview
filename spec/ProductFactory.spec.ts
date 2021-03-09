import { expect } from 'chai';
import { describe } from 'mocha';
import { Product, ProductName } from '../src/domain/products/Product';
import { ProductFactory } from '../src/domain/products/ProductFactory';

describe('Product Factory MegaCoverageProduct Tests', async () => {
    it('create MegaCoverageProduct', async () => {
        // Prepare data
        const megaProduct : Product = ProductFactory.create(ProductName.MEGA_COVERAGE, 10, 20);
                
        // Assertions
        expect(megaProduct.name).equal(ProductName.MEGA_COVERAGE);
        expect(megaProduct.sellIn).equal(10);
        expect(megaProduct.price).equal(20);
    }), 
    
    it('after a dailyUpdate of MegaCoverageProduct nothing happend ', async () => {
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

describe('Product Factory LowCoverageProduct Tests', async () => {
    it('create LowCoverageProduct', async () => {
        // Prepare data
        const lowProduct : Product = ProductFactory.create(ProductName.LOW_COVERAGE, 10, 20);
        
        // Assertions
        expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
        expect(lowProduct.sellIn).equal(10);
        expect(lowProduct.price).equal(20);
    }),
    
    it('after a dailyUpdate of a LowCoverageProduct should decrement days and price by one', async () => {
            // Prepare data
            const lowProduct : Product = ProductFactory.create(ProductName.LOW_COVERAGE, 10, 20);
            
            // Execution
            lowProduct.dailyUpdate();

            // Assertions
            expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
            expect(lowProduct.sellIn).equal(9);
            expect(lowProduct.price).equal(19);
    }),
    
    it('after n dailyUpdates of a LowCoverageProduct until no more days left should decrement days and price should be 0', async () => {
        // Prepare data
        const lowProduct : Product = ProductFactory.create(ProductName.LOW_COVERAGE, 10, 20);
        
        // Execution
        while (lowProduct.sellIn>=0) {
            lowProduct.dailyUpdate();    
        }        

        // Assertions
        expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
        expect(lowProduct.sellIn).equal(-1);
        expect(lowProduct.price).equal(0);
    }),
    
    it('after a dailyUpdate of a LowCoverageProduct with no more days left should decrement days and price should be 0', async () => {
        // Prepare data
        const lowProduct : Product = ProductFactory.create(ProductName.LOW_COVERAGE, -1, 20);
        
        // Execution
        lowProduct.dailyUpdate();    
        
        // Assertions
        expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
        expect(lowProduct.sellIn).equal(-2);
        expect(lowProduct.price).equal(0);
    }),
    
    it('after a dailyUpdate of a LowCoverageProduct with 0 price should decrement days and price still be 0', async () => {
        // Prepare data
        const lowProduct : Product = ProductFactory.create(ProductName.LOW_COVERAGE, 10, 0);
        
        // Execution
        lowProduct.dailyUpdate();    
        
        // Assertions
        expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
        expect(lowProduct.sellIn).equal(9);
        expect(lowProduct.price).equal(0);
    })
})