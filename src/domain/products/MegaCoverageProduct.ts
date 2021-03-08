import { BaseProduct } from './BaseProduct';
import { ProductName } from './Product';

export class MegaCoverageProduct extends BaseProduct {

    constructor(sellIn: number, price: number) {
        super(ProductName.MEGA_COVERAGE, sellIn, price);               
    }

    dailyUpdate(): void {
        return;
    }    
    
}