export function absolute(number) {
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
}

export function sum(current, addition) {
    return current + addition;
}

export function subtract(current, deduction) {
    return current - deduction;
}
