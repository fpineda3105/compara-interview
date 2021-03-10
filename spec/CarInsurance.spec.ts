import { ProductFactory } from './../src/domain/products/ProductFactory';
import { expect } from "chai";
import { describe } from "mocha";
import { ProductName } from '../src/domain/products/Product';
import { CarInsurance } from '../src/domain/insurance/CarInsurance';

describe("Car Insurance Tests", () => {

    it('Create CarInsurance with 2 Products', async () => {
        // Prepare data
        const products = [
            ProductFactory.create(ProductName.FULL_COVERAGE, 10, 20),
            ProductFactory.create(ProductName.LOW_COVERAGE, 5, 10)
        ];
        const carInsurance = new CarInsurance(products);

        // Assertions
        expect(carInsurance.products.length).to.equal(2);

    }),

    it('After a DailyUpdate of a CarInsurance with 2 products', async () => {
        // Prepare data
        const products = [
            ProductFactory.create(ProductName.FULL_COVERAGE, 10, 20),
            ProductFactory.create(ProductName.LOW_COVERAGE, 5, 10)
        ];
        const carInsurance = new CarInsurance(products);

        // Execution
        carInsurance.dailyUpdate();

        // Assertions
        expect(carInsurance.products.length).to.equal(2);
        // Full coverage Product Assertion
        expect(carInsurance.products[0].price).to.equal(21)
        expect(carInsurance.products[0].sellIn).to.equal(9)

        // Low coverage Product Assertion
        expect(carInsurance.products[1].price).to.equal(9)
        expect(carInsurance.products[1].sellIn).to.equal(4)


    }),

    it('After a DailyUpdate verify DailySummary with 2 products', async () => {
        // Prepare data
        const products = [
            ProductFactory.create(ProductName.FULL_COVERAGE, 10, 20),
            ProductFactory.create(ProductName.LOW_COVERAGE, 5, 10)
        ];

        const carInsurance = new CarInsurance(products);

        const productsAfterDaily = [
            ProductFactory.create(ProductName.FULL_COVERAGE, 9, 21),
            ProductFactory.create(ProductName.LOW_COVERAGE, 4, 9)
        ]
        
        const expected = productsAfterDaily[0].toString() + '\n' + productsAfterDaily[1].toString() + '\n';

        // Execution
        carInsurance.dailyUpdate();
        const result = carInsurance.dailySummary();        

        // Assertions
        expect(result).to.equal(expected);        

    })

})