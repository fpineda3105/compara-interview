import { BaseProduct } from './BaseProduct';
import { ProductName } from './Product';

export class FullCoverageProduct extends BaseProduct {

    private static readonly DEFAULT_INCREASE = 1;

    constructor(sellIn: number, price: number) {
        super(ProductName.FULL_COVERAGE, sellIn, price);        
    }

    dailyUpdate(): void {
        this.passDay();
        if (this.areDaysToSellPassed()) {
            this.increasePriceBy(2);
        }
        else {
            this.increasePriceBy(FullCoverageProduct.DEFAULT_INCREASE);
        }        
    }

}