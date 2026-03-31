/* global describe,it,expect */
const { simpleMathFunctionToTest } = require('../index.js');

describe('an example test', () => {
    it('first example test', () => {
        expect(simpleMathFunctionToTest(1, 2)).toBe(3);
    });
     it('first example test 2', () => {
        expect(simpleMathFunctionToTest(2, 2)).toBe(4);
    });
});
