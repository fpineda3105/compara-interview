import { BaseProduct } from "./BaseProduct";
import { ProductName } from "./Product";

export class MediumCoverageProduct extends BaseProduct {

    private static readonly DEFAULT_DECREASE = 1;

    constructor(sellIn: number, price: number) {
        super(ProductName.MEDIUM_COVERAGE, sellIn, price);        
    }

    dailyUpdate(): void {
        this.sellIn--;
        if (this.sellIn <= -1) {
            this.decreasePriceBy(2);
        }
        else {
            this.decreasePriceBy(MediumCoverageProduct.DEFAULT_DECREASE);
        }
    }
}