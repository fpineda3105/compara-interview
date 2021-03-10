import { Product } from "../products/Product";
import { ICarInsurance } from "./ICarInsurance";

export class CarInsurance implements ICarInsurance {
  products: Product[];

  constructor(products: Product[]) {
    this.products = products;
  }

  dailyUpdate(): void {
    this.products.forEach((product) => product.dailyUpdate());
  }

  dailySummary(): String {
    return this.products
      .reduce((str, product) => str + product.toString() + "\n", "")
      .toString();
  }
}
