import { LowCoverageProduct } from "./LowCoverageProduct";
import { MediumCoverageProduct } from "./MediumCoverageProduct";
import { MegaCoverageProduct } from "./MegaCoverageProduct";
import { Product, ProductName } from "./Product";

export class ProductFactory {

    static create(name: ProductName, sellIn: number, price: number): Product {
        switch (name) {             
            case ProductName.MEGA_COVERAGE:
                return new MegaCoverageProduct(sellIn, price);
            case ProductName.LOW_COVERAGE:
                return new LowCoverageProduct(sellIn, price);
            case ProductName.MEDIUM_COVERAGE: 
                return new MediumCoverageProduct(sellIn, price);
            default:
                return new MegaCoverageProduct(sellIn, price);
        }
    }
}