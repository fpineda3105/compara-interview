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

    protected passDay(): void {
        this.sellIn--;
    }

    protected areDaysToSellPassed(): boolean {
        return this.sellIn < 0;
    }

    protected increasePriceBy(amount: number): void {
        this.price = this.price + amount;
        if (this.price > 50) {
            this.price = 50;
        }        
    }

    protected decreasePriceBy(amount: number): void {
        this.price = this.price - amount;
        if (this.price < 0) {
            this.price = 0;
        }
    }

    abstract dailyUpdate(): void 

}