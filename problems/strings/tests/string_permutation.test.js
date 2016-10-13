'use strict';

const solution = require('../prompts/string_permutation.js'),
    assert = require ('chai').assert;

describe('Strings', () => {
	describe('stringPermutation', () => {

	  it('should identify two strings that are permutations of each other', () => {
	    assert.equal(solution.stringPermutation('derp', 'repd'), true);
      assert.equal(solution.stringPermutation('OVO', 'VOO'), true);
	  });

    it('should identify two strings that are not permutations, but all the letters in the second string are in the first string', () => {
      assert.equal(solution.stringPermutation('roar', 'rrrr'), false);
    });

    it('should identify two strings that are not permutations, but all the letters in the first string are in the second string', () => {
      assert.equal(solution.stringPermutation('rrrr', 'roar'), false);
    });

	  it('should not identify two strings that are not permutations of each other', () => {
	    assert.equal(solution.stringPermutation('rawr', 'rawl'), false);
      assert.equal(solution.stringPermutation('wat', 'what'), false);
	  });

	});
});
