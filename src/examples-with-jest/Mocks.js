import * as database from './dependencies/database';
import * as emailService from './dependencies/emailService';

export function applyDiscount(order) { 
    const customer = database.getCustomerSync(order.customerId);
  
    if (customer.points > 10) {
        order.totalPrice *= 0.9; 
    }
}

export function notifyCustomer(order) { 
    const customer = database.getCustomerSync(order.customerId);
    emailService.send(customer.email, 'Your order was placed successfully.');
}
