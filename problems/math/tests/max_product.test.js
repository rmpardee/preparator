'use strict';

const solution = require('../prompts/max_product.js'),
      assert = require ('chai').assert;

describe('Math', () => {

  describe('maxProduct', () => {

    it('should find the largest product of single digit numbers', () => {
      assert.strictEqual(solution.maxProduct(6), 9);
      assert.strictEqual(solution.maxProduct(8), 18);
      assert.strictEqual(solution.maxProduct(9), 27);
    });

    it('should work for edge cases and find the largest product of small single digit numbers', () => {
      assert.strictEqual(solution.maxProduct(1), 1, 'returns 1 as the maxProduct for 1');
      assert.strictEqual(solution.maxProduct(2), 1, 'returns 1 as the maxProduct for 2');
      assert.strictEqual(solution.maxProduct(3), 2, 'returns 2 as the maxProduct for 3');
    });

    it('should find the largest product of multiple digit numbers', () => {
      assert.strictEqual(solution.maxProduct(20), 1458);
      // assert.strictEqual(solution.maxProduct(100), 7412080755407364);
    });
  });
});
