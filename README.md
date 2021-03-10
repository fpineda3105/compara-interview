# Compara interview

Interview repository for Car Insurance problem

## Testing report

To generate the testing report execute:

```bash
npm run test
```

It will generate multiple reports in the directory ```docs/reports/coverage```. The configuration of the reports can be found in the file ```.nycrc.yml```

## Running the 30-days-script

To run the simulation of 30 days execute in the command line:

```bash
npm run after-30-days
```

The Simulation will run with the Products by default:

```js
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
```

It can be changed in the ```index.ts``` file.
