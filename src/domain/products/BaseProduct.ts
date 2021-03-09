import { Product, ProductName } from "./Product";

export abstract class BaseProduct implements Product {
    name: ProductName;
    sellIn: number;
    price: number;

    constructor(name: ProductName, sellIn: number, price: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    protected decreasePriceBy(amount: number): void {
        this.price = this.price - amount;
        if (this.price < 0) {
            this.price = 0;
        }
    }

    abstract dailyUpdate(): void 

}