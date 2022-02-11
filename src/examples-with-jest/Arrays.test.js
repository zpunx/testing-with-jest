import { getCurrencies } from './Arrays';

describe('getCurrencies', () => {
    it('should have some currencies.', () => {             
        const result = getCurrencies();

        expect(result).toBeDefined();
        expect(result).not.toBeNull();
    });

    it('should return the supported currencies', () => {
        const result = getCurrencies();

        expect(result[0]).toBe('USD');
        expect(result[1]).toBe('AUD');
        expect(result[2]).toBe('EUR');
    });
});