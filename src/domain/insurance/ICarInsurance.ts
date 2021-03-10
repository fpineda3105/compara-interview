import { Product } from "../products/Product";

export interface ICarInsurance {

    products: Product[];

    dailyUpdate(): void
    
    dailySummary(): String;    

}