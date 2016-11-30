/**
  * Given a number, find the max product that
  * can result from breaking the input number into multiple
  * pieces.
  * 
  * Input number will be positive and an integer.
  *
  * For example:
  * the number 8 can be broken into :
  * 1,7
  * 1,1,1,5
  * 2,6
  * 3,5
  * 3,3,2
  * 2,4,2
  * 2,2,2,2
  * ...etc
  *
  * maxProduct(8); // => 18
  * Because the largest product can be obtained by 3, 3, 2.
  */  

const allOptions = int => {
  switch (int) {
    // To create fewer cases for maxProduct, the default code includes nothing with 1's
    // therefore I must deal with these edge cases first and hardcode them
    case 1:
      return [[1]];
    case 2:
      return [[1,1]];
    case 3:
      return [[2,1]];
    default:
      const permutations = [];
      // To create fewer cases for maxProduct, the lowest number included
      // in the permutations should grow as the magnitude of the int grows
      // The default is 2 for any single or double digit number
      let startAt = 2;
      // For any number with 3 or more digits, we should start at however many digits it has
      const places = int.toString().length;
      if (places > 2) {
        startAt = places;
      }
      // We can always stop at just above it's square root
      let stopAt = Math.ceil(Math.sqrt(int));

      (function makePerms(nums = [], sum = 0){
        // const sum = nums.reduce((currentSum, number) => currentSum + number, 0);
        if (sum === int) {
          permutations.push(nums);
        } else if (sum < int) {
          for (let i = startAt; i <= stopAt; i++) {
            makePerms(nums.concat(i), sum + i);
          }
        }
      })();

      return permutations;
  }
};

const maxProduct = int => {
  let largestProduct = {
    product: null,
    numbers: null
  };
  const options = allOptions(int);
  options.forEach(option => {
    const product = option.reduce((currProduct, number) => currProduct * number, 1);
    if (product > largestProduct.product) {
      largestProduct.product = product;
      largestProduct.numbers = option;
    }
  });
  console.log(`largestProduct for ${int}: `, largestProduct);
  return largestProduct;
};

/*
Rich's solution:
const maxProduct = int => {

  let largest = 0;
  const stopAt = Math.ceil(Math.sqrt(int));

  (function findProduct(product = 1, sum = 0){
    if (sum === int && product > largest){
      largest = product;
    // if we haven't reached our integer yet
    } else if (sum < int) {
      // loop from 2 to the square root of the integer
      for (let number = 2; number <= stopAt; number++) {
        // if the sum is at least greater than the number we're checking
          // recursively call, incrementing the product and the sum by this number
          findProduct(product * number, sum + number);
      }
    }
  })();

  return largest;
};
*/

module.exports = { allOptions, maxProduct };
