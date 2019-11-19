const utils = require('./utils');

describe("Testing utils", () => {
    test('2 * 3 equal 6', () => {
        expect(utils.prod(2,3)).toBe(6);
    }),
    test('5 * 2 equals 10', () => {
        expect(utils.prod(5,2)).toBe(10);
    }),
    test('2 + 2 equals 4', () => {
        expect(utils.sum(2,2)).toBe(4);
    }),
    test('3 + 3 equal 6', () => {
        expect(utils.sum(3,3)).toBe(6);
    })
})