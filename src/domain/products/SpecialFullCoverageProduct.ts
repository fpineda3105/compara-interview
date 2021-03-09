import { BaseProduct } from "./BaseProduct";
import { ProductName } from "./Product";

export class SpecialFullCoverageProduct extends BaseProduct {
  private static readonly DEFAULT_INCREASE = 1;

  constructor(sellIn: number, price: number) {
    super(ProductName.SPECIAL_FULL_COVERAGE, sellIn, price);
  }

  dailyUpdate(): void {
    this.passDay();

    if (this.areDaysToSellPassed()) {
      this.price = 0;
      return;
    }

    if (this.sellIn <= 5) {
      this.increasePriceBy(3);
      return;
    }

    if (this.sellIn <= 10) {
        this.increasePriceBy(2);
        return;
    } 

    this.increasePriceBy(SpecialFullCoverageProduct.DEFAULT_INCREASE);
  }
}
