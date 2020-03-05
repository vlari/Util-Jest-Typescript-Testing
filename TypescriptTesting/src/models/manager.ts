export class Manager {
    name: any;
    lastName: any;
    age: any;
    department: any;
    departmentAssigned: any;
    employeesLed: any;

    constructor(name: string , lastName: string , age: number , department: string , departmentAssigned: string , employeesLed: number ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.department = department
        this.departmentAssigned = departmentAssigned;
        this.employeesLed = employeesLed;
    }
}