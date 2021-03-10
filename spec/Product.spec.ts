import { expect } from "chai";
import { describe } from "mocha";
import { FullCoverageProduct } from "../src/domain/products/FullCoverageProduct";
import { Product, ProductName } from "../src/domain/products/Product";

describe("Product Test's", async () => {
    it('Test a toString method', async () => {
        // Prepare data
        const product: Product = new FullCoverageProduct(10,20);
        const expected = `${ProductName.FULL_COVERAGE}, 10, 20`;

        // Execution        
        const result =  product.toString();
        
        // Assertions
        expect(result).equal(expected);

    })
})