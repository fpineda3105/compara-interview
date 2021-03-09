import { expect } from "chai";
import { describe } from "mocha";
import { Product, ProductName } from "../src/domain/products/Product";
import { ProductFactory } from "../src/domain/products/ProductFactory";

describe("Product Factory MegaCoverageProduct Tests", async () => {
  it("create MegaCoverageProduct", async () => {
    // Prepare data
    const megaProduct: Product = ProductFactory.create(
      ProductName.MEGA_COVERAGE,
      10,
      20
    );

    // Assertions
    expect(megaProduct.name).equal(ProductName.MEGA_COVERAGE);
    expect(megaProduct.sellIn).equal(10);
    expect(megaProduct.price).equal(20);
  }),
    it("after a dailyUpdate of MegaCoverageProduct nothing happend ", async () => {
      // Prepare data
      const megaProduct: Product = ProductFactory.create(
        ProductName.MEGA_COVERAGE,
        10,
        20
      );

      // Execution
      megaProduct.dailyUpdate();

      // Assertions
      expect(megaProduct.name).equal(ProductName.MEGA_COVERAGE);
      expect(megaProduct.sellIn).equal(10);
      expect(megaProduct.price).equal(20);
    });
});

describe("Product Factory LowCoverageProduct Tests", async () => {
  it("create LowCoverageProduct", async () => {
    // Prepare data
    const lowProduct: Product = ProductFactory.create(
      ProductName.LOW_COVERAGE,
      10,
      20
    );

    // Assertions
    expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
    expect(lowProduct.sellIn).equal(10);
    expect(lowProduct.price).equal(20);
  }),

    it("after a dailyUpdate of a LowCoverageProduct should decrement days and price by one", async () => {
      // Prepare data
      const lowProduct: Product = ProductFactory.create(
        ProductName.LOW_COVERAGE,
        10,
        20
      );

      // Execution
      lowProduct.dailyUpdate();

      // Assertions
      expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
      expect(lowProduct.sellIn).equal(9);
      expect(lowProduct.price).equal(19);
    }),
    it("after n dailyUpdates of a LowCoverageProduct until no more days left should decrement days and price should be 0", async () => {
      // Prepare data
      const lowProduct: Product = ProductFactory.create(
        ProductName.LOW_COVERAGE,
        10,
        20
      );

      // Execution
      while (lowProduct.sellIn >= 0) {
        lowProduct.dailyUpdate();
      }

      // Assertions
      expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
      expect(lowProduct.sellIn).equal(-1);
      expect(lowProduct.price).equal(0);
    }),
    it("after a dailyUpdate of a LowCoverageProduct with no more days left should decrement days and price should be 0", async () => {
      // Prepare data
      const lowProduct: Product = ProductFactory.create(
        ProductName.LOW_COVERAGE,
        -1,
        20
      );

      // Execution
      lowProduct.dailyUpdate();

      // Assertions
      expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
      expect(lowProduct.sellIn).equal(-2);
      expect(lowProduct.price).equal(0);
    }),
    it("after a dailyUpdate of a LowCoverageProduct with 0 price should decrement days and price still be 0", async () => {
      // Prepare data
      const lowProduct: Product = ProductFactory.create(
        ProductName.LOW_COVERAGE,
        10,
        0
      );

      // Execution
      lowProduct.dailyUpdate();

      // Assertions
      expect(lowProduct.name).equal(ProductName.LOW_COVERAGE);
      expect(lowProduct.sellIn).equal(9);
      expect(lowProduct.price).equal(0);
    });
});

describe("Product Factory MediumCoverageProduct Tests", async () => {
  it("create MediumCoverageProduct", async () => {
    // Prepare data
    const medProduct: Product = ProductFactory.create(
      ProductName.MEDIUM_COVERAGE,
      10,
      20
    );

    // Assertions
    expect(medProduct.name).equal(ProductName.MEDIUM_COVERAGE);
    expect(medProduct.sellIn).equal(10);
    expect(medProduct.price).equal(20);
  }),
    it("after a dailyUpdate of a MediumCoverageProduct should decrement days and price by one", async () => {
      // Prepare data
      const medProduct: Product = ProductFactory.create(
        ProductName.MEDIUM_COVERAGE,
        10,
        20
      );

      // Execution
      medProduct.dailyUpdate();

      // Assertions
      expect(medProduct.name).equal(ProductName.MEDIUM_COVERAGE);
      expect(medProduct.sellIn).equal(9);
      expect(medProduct.price).equal(19);
    }),
    it("after n dailyUpdates of a MediumCoverageProduct until no more days left should decrement days and price should be decremented by 2", async () => {
      // Prepare data
      const medProduct: Product = ProductFactory.create(
        ProductName.MEDIUM_COVERAGE,
        10,
        20
      );

      // Execution
      while (medProduct.sellIn >= 0) {
        medProduct.dailyUpdate();
      }

      // Assertions
      expect(medProduct.name).equal(ProductName.MEDIUM_COVERAGE);
      expect(medProduct.sellIn).equal(-1);
      expect(medProduct.price).equal(8);
    }),
    it("after a dailyUpdate of a MediumCoverageProduct with no more days left should decrement days by 1 and price by 2", async () => {
      // Prepare data
      const medProduct: Product = ProductFactory.create(
        ProductName.MEDIUM_COVERAGE,
        -1,
        20
      );

      // Execution
      medProduct.dailyUpdate();

      // Assertions
      expect(medProduct.name).equal(ProductName.MEDIUM_COVERAGE);
      expect(medProduct.sellIn).equal(-2);
      expect(medProduct.price).equal(18);
    }),
    it("after a dailyUpdate of a LowCoverageProduct with 0 price should decrement days and price still be 0", async () => {
      // Prepare data
      const medProduct: Product = ProductFactory.create(
        ProductName.MEDIUM_COVERAGE,
        10,
        0
      );

      // Execution
      medProduct.dailyUpdate();

      // Assertions
      expect(medProduct.name).equal(ProductName.MEDIUM_COVERAGE);
      expect(medProduct.sellIn).equal(9);
      expect(medProduct.price).equal(0);
    });
});

describe("Product Factory FullCoverageProduct Tests", async () => {
  it("create FullCoverageProduct", async () => {
    // Prepare data
    const fullProduct: Product = ProductFactory.create(
      ProductName.FULL_COVERAGE,
      10,
      20
    );

    // Assertions
    expect(fullProduct.name).equal(ProductName.FULL_COVERAGE);
    expect(fullProduct.sellIn).equal(10);
    expect(fullProduct.price).equal(20);
  }),
    it("after a dailyUpdate of a FullCoverageProduct should decrement days and price by one", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.FULL_COVERAGE,
        10,
        20
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(9);
      expect(fullProduct.price).equal(21);
    }),
    it("after n dailyUpdates of a FullCoverageProduct until no more days left should decrement days and price should be Incremented by 2", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.FULL_COVERAGE,
        10,
        20
      );

      // Execution
      while (fullProduct.sellIn >= 0) {
        fullProduct.dailyUpdate();
      }

      // Assertions
      expect(fullProduct.name).equal(ProductName.FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(-1);
      expect(fullProduct.price).equal(32);
    }),
    it("after a dailyUpdate of a FullCoverageProduct with no more days left should decrement days by 1 and price incremented by 2", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.FULL_COVERAGE,
        -1,
        20
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(-2);
      expect(fullProduct.price).equal(22);
    }),
    it("after a dailyUpdate of a FullCoverageProduct with 0 price should decrement days and price incremented by 1", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.FULL_COVERAGE,
        10,
        0
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(9);
      expect(fullProduct.price).equal(1);
    }),
    it("after a dailyUpdate of a FullCoverageProduct with 50 price should decrement days and price still be 50", async () => {
        // Prepare data
        const fullProduct: Product = ProductFactory.create(
          ProductName.FULL_COVERAGE,
          10,
          50
        );
  
        // Execution
        fullProduct.dailyUpdate();
  
        // Assertions
        expect(fullProduct.name).equal(ProductName.FULL_COVERAGE);
        expect(fullProduct.sellIn).equal(9);
        expect(fullProduct.price).equal(50);
      });
});

describe("Product Factory SpecialFullCoverageProduct Tests", async () => {
  it("create SpecialFullCoverageProduct", async () => {
    // Prepare data
    const fullProduct: Product = ProductFactory.create(
      ProductName.SPECIAL_FULL_COVERAGE,
      10,
      20
    );

    // Assertions
    expect(fullProduct.name).equal(ProductName.SPECIAL_FULL_COVERAGE);
    expect(fullProduct.sellIn).equal(10);
    expect(fullProduct.price).equal(20);
  }),

    it("after a dailyUpdate of a FullCoverageProduct should decrement days and price by one", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.SPECIAL_FULL_COVERAGE,
        20,
        20
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.SPECIAL_FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(19);
      expect(fullProduct.price).equal(21);
    }),
    it ("after a dailyUpdate of 10 days left should decrement days and price should be incremented by 2", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.SPECIAL_FULL_COVERAGE,
        10,
        20
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.SPECIAL_FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(9);
      expect(fullProduct.price).equal(22);

    }),


    it("after a dailyUpdate of 5 days left should decrement days and price should be incremented by 3", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.SPECIAL_FULL_COVERAGE,
        6,
        20
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.SPECIAL_FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(5);
      expect(fullProduct.price).equal(23);
    }),
    it("after a dailyUpdate with no more days left should decrement days by 1 and price should drop to 0", async () => {
      // Prepare data
      const fullProduct: Product = ProductFactory.create(
        ProductName.SPECIAL_FULL_COVERAGE,
        0,
        20
      );

      // Execution
      fullProduct.dailyUpdate();

      // Assertions
      expect(fullProduct.name).equal(ProductName.SPECIAL_FULL_COVERAGE);
      expect(fullProduct.sellIn).equal(-1);
      expect(fullProduct.price).equal(0);
    })    
});