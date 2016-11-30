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

const maxProduct = int => {
  switch (int) {
  // To create fewer cases for maxProduct, the default code includes nothing with 1's
  // therefore I must deal with these edge cases first and hardcode them
  case 1:
    return 1;
  case 2:
    return 1;
  case 3:
    return 2;
  default:

    let largestProduct = 0;

    // To create fewer cases, we don't need to check 1's
    let startAt = 2;
    // We can always stop at just above it's square root
    let stopAt = Math.ceil(Math.sqrt(int));

    (function findLargest(product = 1, sum = 0){
      // if we've reached our integer and beaten our previous largest
      if (sum === int && product > largestProduct) {
        largestProduct = product;
      // if we still haven't reached our integer
      } else if (sum < int) {
        // loop through all integers from start -> stop
        for (let number = startAt; number <= stopAt; number++) {
          // multiply each one to make a new product, and add each one for a new sum
          findLargest(product * number, sum + number);
        }
      }
    })();

    return largestProduct;
  }
};

module.exports = { maxProduct };
