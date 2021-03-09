import { BaseProduct } from "./BaseProduct";
import { ProductName } from "./Product";

export class SuperSaleProduct extends BaseProduct {
    
    private static readonly DEFAULT_DECREASE = 2;

    constructor(sellIn: number, price: number) {
        super(ProductName.SUPER_SALE, sellIn, price);       
    }
    
    dailyUpdate(): void {
        this.passDay();

        if (this.areDaysToSellPassed()) {
            this.price = 0;
        }
        else {
            this.decreasePriceBy(SuperSaleProduct.DEFAULT_DECREASE);
        }
        
    }

}