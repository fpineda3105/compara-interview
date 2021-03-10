export interface Product {
    name: ProductName,
    sellIn: number,
    price: number,

    dailyUpdate(): void;
    
    toString(): string;
}

export enum ProductName {
    FULL_COVERAGE = 'Full Coverage',
    MEDIUM_COVERAGE = 'Medium Coverage',
    MEGA_COVERAGE = 'Mega Coverage',
    SPECIAL_FULL_COVERAGE = 'Special Full Coverage',
    LOW_COVERAGE = 'Low Coverage',
    SUPER_SALE = 'Super Sale'
}