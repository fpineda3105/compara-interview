import { FullCoverageProduct } from "./FullCoverageProduct";
import { LowCoverageProduct } from "./LowCoverageProduct";
import { MediumCoverageProduct } from "./MediumCoverageProduct";
import { MegaCoverageProduct } from "./MegaCoverageProduct";
import { Product, ProductName } from "./Product";
import { SpecialFullCoverageProduct } from "./SpecialFullCoverageProduct";
import { SuperSaleProduct } from "./SuperSaleProduct";

export class ProductFactory {

    static create(name: ProductName, sellIn: number, price: number): Product {
        switch (name) {                        
            case ProductName.LOW_COVERAGE:
                return new LowCoverageProduct(sellIn, price);
            case ProductName.MEDIUM_COVERAGE: 
                return new MediumCoverageProduct(sellIn, price);
            case ProductName.FULL_COVERAGE:
                return new FullCoverageProduct(sellIn, price);
            case ProductName.SPECIAL_FULL_COVERAGE:
                return new SpecialFullCoverageProduct(sellIn, price)
            case ProductName.SUPER_SALE: 
                return new SuperSaleProduct(sellIn, price);
            default:
                return new MegaCoverageProduct(sellIn);
        }
    }
}