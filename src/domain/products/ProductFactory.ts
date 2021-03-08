import { MegaCoverageProduct } from "./MegaCoverageProduct";
import { Product, ProductName } from "./Product";

export class ProductFactory {

    static create(name: ProductName, sellIn: number, price: number): Product {
        switch (name) {             
            case ProductName.MEGA_COVERAGE:
                return new MegaCoverageProduct(sellIn, price)            
            default:
                return new MegaCoverageProduct(sellIn, price)
        }
    }
}