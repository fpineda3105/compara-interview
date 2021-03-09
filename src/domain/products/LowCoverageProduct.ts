import { BaseProduct } from "./BaseProduct";
import { ProductName } from "./Product";

export class LowCoverageProduct extends BaseProduct {
    
    private static readonly DEFAULT_DECREASE = 1;

    constructor(sellIn: number, price: number) {
        super(ProductName.LOW_COVERAGE, sellIn, price);       
    }
    
    dailyUpdate(): void {
        this.passDay()
        if (this.areDaysToSellPassed()) {
            this.price = 0;
        }
        else {
            this.decreasePriceBy(LowCoverageProduct.DEFAULT_DECREASE);
        }
    }

}