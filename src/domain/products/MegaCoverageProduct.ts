import { BaseProduct } from './BaseProduct';
import { ProductName } from './Product';

export class MegaCoverageProduct extends BaseProduct {

    constructor(sellIn: number) {
        super(ProductName.MEGA_COVERAGE, sellIn, 80);               
    }

    dailyUpdate(): void {
        return;
    }    
    
}