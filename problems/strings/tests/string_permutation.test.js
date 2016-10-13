'use strict';

const solution = require('../prompts/string_permutation.js'),
    assert = require ('chai').assert;

describe('Strings', () => {
  describe('String Permutations', () => {

    describe('should identify when two strings are permutations of each other', () => {

      it('with the same length and same characters', () => {
        assert.equal(solution.stringPermutation('derp', 'repd'), true);
        assert.equal(solution.stringPermutation('OVO', 'VOO'), true);
        assert.equal(solution.stringPermutation('xxxx', 'xxxx'), true);
      });
    });

    describe('should identify when two strings are NOT permutations of each other', () => {

      describe('with the same length: ', () => {
    
        it('with different characters', () => {
          assert.equal(solution.stringPermutation('rawr', 'rawl'), false);
        });

        it('and with the same set of characters', () => {
          assert.equal(solution.stringPermutation('roar', 'rrrr'), false);
          assert.equal(solution.stringPermutation('rrrr', 'roar'), false);
        });

      });
      
      describe('with different lengths: ', () => {

        it('with different characters', () => {
          assert.equal(solution.stringPermutation('rawrx', 'rawl'), false);
        });

        it('and with the same set of characters', () => {
          assert.equal(solution.stringPermutation('rrr', 'rrrr'), false);
          assert.equal(solution.stringPermutation('rrrr', 'rrr'), false);
          assert.equal(solution.stringPermutation('wat', 'what'), false);
          assert.equal(solution.stringPermutation('what', 'wat'), false);
        });
      });  
    });
  });
});
