/**
  * A permutation is an arrangement of members of a set.
  * https://en.wikipedia.org/wiki/Permutation
  * 
  * Implement stringPermutation so that it takes two string inputs, and outputs
  * a boolean indicating if on is a permutation of the other. All letters must be included.
  *
  * For instance:
  * stringPermutation('babel', 'lebab') // => true
  * stringPermutation('what', 'wat') // false
  */

const stringPermutation = (string1, string2) => {
  // check if the length is the same
  if (string1.length !== string2.length) {
    return false
  } else {
    // create object with the letters of the first string as keys, and their count as values
    let s1letters = {};
    for (let i = 0; i < string1.length; i++) {
      let s1letter = string1[i];
      if (!s1letters[s1letter]) {
        s1letters[s1letter] = 1;
      } else {
        s1letters[s1letter] += 1;
      }
    }
    // check to make sure each character in the second string exists in that object
    for (let i = 0; i < string2.length; i++) {
      let s1letterCount = s1letters[string2[i]];
      if (!s1letterCount) {
        return false;
      } else {
        // if it does find the key, decrement it's count in the object
        s1letters[string2[i]] -= 1;
        // if after decrementing it's ever negative, it can't be a permutation
        if (s1letterCount < 0) {
          return false;
        }
      }
    }
    // if it gets through the whole thing, return true
    return true;
  }
};


console.log("stringPermutation('roar', 'rrrr'): ", stringPermutation('roar', 'rrrr'));


const createPermutations = (string) => {
  let permutations = [];
  // create subroutine
  const createPerms = (currentPerm) => {
    // base case: we've reached the same length as our original string
    if (currentPerm.length === string.length) {
      // push into permutations array
      permutations.push(currentPerm);
    }
    // recursive case: not long enough yet
    else {
      // loop through the string
      for (var i = 0; i < string.length; i++) {
        // add that character to the currentPerm and run through again
        // currentPerm = currentPerm + string[i];
        createPerms(currentPerm + string[i]);
      }
    }
  };
  // call subroutine on string
  createPerms('');
  return permutations;
};

console.log("createPermutations('abc'): ", createPermutations('abc').length);

module.exports = { stringPermutation };
