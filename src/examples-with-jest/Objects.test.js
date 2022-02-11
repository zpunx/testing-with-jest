import { getProduct } from './Objects';

describe('getProduct', () => {
    
    it('should return a product object that contains an id property', () => {
        const product = getProduct(1);
        expect(product).toMatchObject({ id: 1 });
    });

    it.skip('should return a product object that has an id property', () => {
        const product = getProduct(1);
        expect(product).toHaveProperty('id', '1');
    });
    
    it.skip('should return a product object', () => {
        const product = getProduct(1);
        expect(product).toBe({ id: 1, price: 10 });
    });
});
