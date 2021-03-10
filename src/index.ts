import { CarInsurance } from "./domain/insurance/CarInsurance";
import { ProductName } from "./domain/products/Product";
import { ProductFactory } from "./domain/products/ProductFactory";
import { TxtExtractorSummary } from "./util/TxtExtractorSummary";

const products = [
    ProductFactory.create(ProductName.MEDIUM_COVERAGE, 10, 20),  
  ProductFactory.create(ProductName.FULL_COVERAGE, 2, 0),
    ProductFactory.create(ProductName.LOW_COVERAGE, 5, 7),
    ProductFactory.create(ProductName.MEGA_COVERAGE, 0, 80),
    ProductFactory.create(ProductName.MEGA_COVERAGE, -1, 80),
    ProductFactory.create(ProductName.SPECIAL_FULL_COVERAGE, 15, 20),
    ProductFactory.create(ProductName.SPECIAL_FULL_COVERAGE, 10, 49),
    ProductFactory.create(ProductName.SPECIAL_FULL_COVERAGE, 5, 49),
    ProductFactory.create(ProductName.SUPER_SALE, 3, 6),
];
const carInsurance = new CarInsurance(products);

function main(): void {  
  const extractor = new TxtExtractorSummary(carInsurance, "products_after_30_days.txt");
    extractor.executeForDays(30);
    console.log("Lets check: products_after_30_days.txt")
}

if (process.argv.includes('main')) {
    main();
 }
