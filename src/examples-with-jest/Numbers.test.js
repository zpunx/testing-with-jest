import { absolute, sum, subtract } from './Numbers';

test('return positive number if input is positive', () => {
    const result = absolute(1);
    expect(result).toBe(1);
});

test('return positive number if input is negative', () => {
    const result = absolute(-1);
    expect(result).toBe(1);
});

test('return 0 if the input is 0', () => {
    const result = absolute(0);
    expect(result).toBe(0);
});

test('sum two numbers', () => {
    const result = sum(1, 1);
    expect(result).toBeGreaterThan(1);
});

test('sum two numbers again', () => {
    const result = sum(1, 1);
    expect(result).toBeGreaterThanOrEqual(2);
});

test('subtract two numbers', () => {
    const result = subtract(1, 1);
    expect(result).toBeLessThan(1);
});

test('subtract two numbers again', () => {
    const result = subtract(1, 1);
    expect(result).toBeLessThanOrEqual(0);
});

test.skip('sum two floating numbers', () => {
    const result = sum(0.1, 0.2);
    expect(result).toBe(0.3);
});
