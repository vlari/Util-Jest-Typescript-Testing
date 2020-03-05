import { Manager } from "../models/manager";
import { Clerk } from "../models/clerk";
import { EmployeeManagement } from '../library/employee-management';

describe('Employee tests', () => {
    test('it should return a manager instance', () => {
        const input = 'manager';

        const em = new EmployeeManagement();

        const employee = em.createEmployee(input);

        expect(employee instanceof Manager).toBeTruthy();
    });

    test('it should return a clerk instance', () => {
        const input = 'clerk';

        const em = new EmployeeManagement();

        const employee = em.createEmployee(input);

        expect(employee instanceof Clerk).toBeTruthy();
    });
});