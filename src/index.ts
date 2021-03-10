import { CarInsurance } from "./domain/insurance/CarInsurance";
import { ProductName } from "./domain/products/Product";
import { ProductFactory } from "./domain/products/ProductFactory";
import { TxtExtractorSummary } from "./util/TxtExtractorSummary";

const products = [
  ProductFactory.create(ProductName.FULL_COVERAGE, 10, 20),
  ProductFactory.create(ProductName.LOW_COVERAGE, 5, 10),
];
const carInsurance = new CarInsurance(products);

function main(): void {
  carInsurance.dailyUpdate();
  const extractor = new TxtExtractorSummary(carInsurance, "test");
  extractor.executeForDays(5);
}

if (process.argv.includes('main')) {
    main();
 }
