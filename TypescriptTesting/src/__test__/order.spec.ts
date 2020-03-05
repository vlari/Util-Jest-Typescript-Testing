import { StoreManagement } from '../library/store-management';
import { Order } from '../models/order';
import { Employee } from '../models/employee';

describe('test orders', () => {
  test('it should return valid order', () => {
    const sm = new StoreManagement();

    const employee = new Employee(
      'E123',
      'Jamie',
      'hudson',
      30,
      'Customer Service'
    );
    const order = new Order('O123', employee, 'description', 0, 2, 10);
    const input = sm.makeOrder(order);

    expect(input).toEqual(order);
  });
});
