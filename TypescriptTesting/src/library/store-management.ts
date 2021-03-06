import { stores } from '../data/stores';
import { Store } from '../models/store';
import { Order } from '../models/order';

export class StoreManagement {
    stores: Store[];

    constructor() {
        this.stores = stores;  
    }

    getStores(): Store[] {
        return this.stores;
    }

    findByManager(id: string): any {
        let store = this.stores.find(s => s.manager.id === id);
        return store;
    }

    findByRegistrationId(id: string): any {
        let store = this.stores.find(s => s.registrationNumber === id);
        return store;
    }

    makeOrder(order: Order){
        if(order.orderId){
            return order;
        }
    }
    
}