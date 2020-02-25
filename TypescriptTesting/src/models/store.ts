import { Employee } from "./employee";

export class Store{
    registrationNumber: string;
    address: string;
    numberOfEmployees: number;
    manager: Employee;
    area: number;

    constructor(registrationNumber: string, address: string, numberOfEmployees: number, manager: Employee, area: number) {
        this.registrationNumber = registrationNumber;
        this.address = address;
        this.numberOfEmployees = numberOfEmployees;
        this.manager = manager;
        this.area = area;
    }
}