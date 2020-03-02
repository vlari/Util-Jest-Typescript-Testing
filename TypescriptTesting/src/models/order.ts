import { Employee } from "./employee";

export class Order {
    orderId: string;
    clerk: Employee;
    description: string;
    discount: number;
    taxes: number;
    total: number;

    constructor(orderId: string,
                clerk: Employee,
                description: string,
                discount: number,
                taxes: number,
                total: number) {
        this.orderId = orderId;
        this.clerk = clerk;
        this.description = description;
        this.discount = discount;
        this.taxes = taxes;
        this.total =total;
    }
}