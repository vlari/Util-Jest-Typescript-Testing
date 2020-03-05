export class Clerk {
    name: string;
    lastName: string;
    age: number;
    department: string;
    customerLimit: number;
    salesRate: number;
    

    constructor(name: string , lastName: string , age: number , department: string , customerLimit: number , salesRate: number ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.department = department;
        this.customerLimit = customerLimit;
        this.salesRate = salesRate;
    }
}