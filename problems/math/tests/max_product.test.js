'use strict';

const solution = require('../prompts/max_product.js'),
      assert = require ('chai').assert;

describe('Math', () => {
  describe('allOptions', () => {

    it('should return an array of arrays of numbers', () => {
      const three = solution.allOptions(3);
      assert.isArray(three, "fn should return an array");
      three.forEach(arrayOfNums => {
        assert.isArray(arrayOfNums, "the array returned should be composed of other arrays");
        arrayOfNums.forEach(number => {
          assert.isNumber(number, "the inner arrays should contain only numbers");
        })
      });
    });

    it('should find all permutations of single digit numbers', () => {
      assert.deepEqual(solution.allOptions(4), [[2,2]], 'returns array of all possible breakdowns for 4');
    });

    it('should work for edge cases and find all permutations of small single digit numbers', () => {
      assert.deepEqual(solution.allOptions(1), [[1]], 'returns array of array of 1 for 1');
      assert.deepEqual(solution.allOptions(2), [[1,1]], 'returns array of array of [1,1] for 2');
      assert.deepEqual(solution.allOptions(3), [[2,1]], 'returns array of arrays of all possible breakdowns for 3');
    });
  });

  describe('maxProduct', () => {

    it('should find the largest product of single digit numbers', () => {
      assert.strictEqual(solution.maxProduct(6).product, 9);
      assert.strictEqual(solution.maxProduct(8).product, 18);
      assert.strictEqual(solution.maxProduct(9).product, 27);
    });

    it('should work for edge cases and find the largest product of small single digit numbers', () => {
      assert.strictEqual(solution.maxProduct(1).product, 1, 'returns 1 as the maxProduct fo.productr 1');
      assert.strictEqual(solution.maxProduct(2).product, 1, 'returns 1 as the maxProduct fo.productr 2');
      assert.strictEqual(solution.maxProduct(3).product, 2, 'returns 2 as the maxProduct fo.productr 3');
    });

    it('should find the largest product of multiple digit numbers', () => {
      assert.strictEqual(solution.maxProduct(20).product, 1458);
      // assert.strictEqual(solution.maxProduct(100).product, 7412080755407364);
    });
  });
});
