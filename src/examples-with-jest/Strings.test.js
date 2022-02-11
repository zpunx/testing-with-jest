import { greet } from './Strings';

describe('greet', () => {
    it('should return greetings with the passed string argument.', () => {        
        const result = greet('Mr. Anderson');
        expect(result).toBe('Wake up, Mr. Anderson.');
    });

    it('should have default name set to `Stranger`.', () => {
        const result = greet();
        expect(result).toBe('Wake up, Stranger.');
    });
});