export class Employee {
    id: string;
    name: string;
    lastName: string;
    age: number;
    department: string;
    
    constructor(id: string, name: string , lastName: string , age: number , department: string) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.department = department
    }
}