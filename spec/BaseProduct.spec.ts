import { expect } from 'chai';
import { describe } from 'mocha';
import { BaseProduct } from '../src/domain/products/BaseProduct';
import { ProductName } from '../src/domain/products/Product';

describe('Base Product Tests', () => {
    it('should create a base product', async () => {
        const product = new BaseProduct(ProductName.FULL_COVERAGE, 5, 10);

        expect(product.name).equal(ProductName.FULL_COVERAGE);
        expect(product.sellIn).equal(5);
        expect(product.price).equal(10);
    }),

    it('should throw an error in daily update', async () => {
        const product = new BaseProduct(ProductName.FULL_COVERAGE, 5, 10);

        expect(() => product.dailyUpdate()).to.throw('Method not implemented')
    })
})