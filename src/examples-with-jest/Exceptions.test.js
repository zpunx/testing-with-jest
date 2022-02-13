import { registerUser } from './Exceptions';

describe('registerUser', () => {
    it.skip('should throw an exception if username is falsy.', () => {             
        const falsyArgs = [null, undefined, NaN, '', 0, false];
        falsyArgs.map(a => expect(registerUser(a)).toThrow());
    });

    it('should return a user with valid username.', () => {
        const result = registerUser('Mr. Laurence');
        expect(result).toMatchObject({ username: 'Mr. Laurence' });
    });

    it('should return a user with valid id property.', () => {
        const result = registerUser('Mr. Anderson');
        expect(result.id).toBeGreaterThan(0);
    });
});
