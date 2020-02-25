import { StoreManagement } from "./main";
import { Store } from "./models/store";

describe("test stores", () => {
  test("it should return a store collection", () => {
    const sm = new StoreManagement();

    const input = sm.getStores();

    expect(typeof input === "object").toBeTruthy();
  });

  test("it should return a store by registration id", () => {
    const sm = new StoreManagement();

    const id = "987321";
    const input = sm.findByRegistrationId(id);
    const store = {
      registrationNumber: id,
      address: "3510  Farland Avenue",
      numberOfEmployees: 45,
      manager: {
        id: "mgm002",
        name: "Amanda",
        lastName: "Johnson",
        age: 30,
        department: "Sales"
      },
      area: 200
    };

    expect(input).toEqual(store);
  });

  test("it should return a store by manager", () => {
    const sm = new StoreManagement();

    const id = "mgm001";
    const input = sm.findByManager(id);
    const store = {
        registrationNumber: "123789",
        address: "3510  Farland Avenue",
        numberOfEmployees: 50,
        manager: {
          id: id,
          name: "John",
          lastName: "Doe",
          age: 64,
          department: "Sales"
        },
        area: 500
    };

    expect(input).toEqual(store);
  });
});
