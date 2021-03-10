import { assert, expect } from "chai";
import { describe } from "mocha";
import { CarInsurance } from "../src/domain/insurance/CarInsurance";
import { ProductName } from "../src/domain/products/Product";
import { ProductFactory } from "../src/domain/products/ProductFactory";
import { TxtExtractorSummary } from "../src/util/TxtExtractorSummary";
import * as fs from "fs";
import * as fsAsync from "fs/promises";

async function deleteTempFile(fileName: string) {
  await fsAsync.rm(fileName);
}

describe("Test TxtExtractorSummary", () => {
  it("Verify existence of file after requesting a Txt summary", async () => {
    // Prepare data
    const products = [
      ProductFactory.create(ProductName.FULL_COVERAGE, 10, 20),
      ProductFactory.create(ProductName.LOW_COVERAGE, 5, 10),
    ];
    const carInsurance = new CarInsurance(products);
    const fileName = "temp.txt";
    const extractor = new TxtExtractorSummary(carInsurance, fileName);

    // Execution
    await extractor.executeForDays(5);
    const existence = fs.existsSync(fileName);

    //Assertions
    assert.isTrue(existence);
    await deleteTempFile(fileName);
  }),
    it("Verify file Data length after requesting a Txt summary", async () => {
      // Prepare data
      const products = [
        ProductFactory.create(ProductName.FULL_COVERAGE, 10, 20),
        ProductFactory.create(ProductName.LOW_COVERAGE, 5, 10),
      ];
      const carInsurance = new CarInsurance(products);
      const fileName = "temp2.txt";
      const extractor = new TxtExtractorSummary(carInsurance, fileName);

      // Execution
      await extractor.executeForDays(5);
      const existence = fs.existsSync(fileName);

      const data = fs.readFileSync(fileName, "utf-8");
      const lines = data.split("\n");

      //Assertions
      assert.isTrue(existence);
      assert.equal(lines.length, 22);
      await deleteTempFile(fileName);
    });
});
