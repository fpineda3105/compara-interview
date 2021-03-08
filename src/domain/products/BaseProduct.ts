import { Product, ProductName } from "./Product";

export class BaseProduct implements Product {
    name: ProductName;
    sellIn: number;
    price: number;

    constructor(name: ProductName, sellIn: number, price: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
    
    dailyUpdate(): void {
        throw new Error("Method not implemented");
    }

}