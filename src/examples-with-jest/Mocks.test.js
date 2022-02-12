import * as database from './dependencies/database';
import * as emailService from './dependencies/emailService';
import { notifyCustomer } from './Mocks';

describe('notifyCustomer', () => {
    it('should send an email to the customer', () => {                
        database.getCustomerSync = jest.fn().mockReturnValue({ email: '@com.br' });
        emailService.send = jest.fn();

        notifyCustomer({ customerId: 1 });
        
        expect(emailService.send).toHaveBeenCalled();
    });
});
























