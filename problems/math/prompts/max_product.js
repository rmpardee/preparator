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
  * 1,1,5
  * 2,6
  * 3,5
  * 3,3,2
  * 2,4,2
  * 2,2,2,2
  * ...etc
  *
  * maxProduct(8); // => 18
  * Because the largets product can be obtained by 3, 3, 2.
  */

const allBreakdownOptions = int => {
  return [[1,1,1],[1,2]];
};


const maxProduct = int => {
  // store the largest product
  let largestProduct = null;
  // subroutine - takes the multiplicand as parameter
  const findLargestProduct = (multiplicand = 1) => {
    // base case: our product is larger than the stored largest product
    const product = multiplicand * (int - multiplicand);
    if (product > largestProduct) {
      // redefine the largest product stored
      largestProduct = product;
      console.log("largestProduct: ", largestProduct);
    }
    // recursive case: our product is not larger
    if (multiplicand < (int - 1)) {
      // pass in all numbers from 1 to (int less 1)
      findLargestProduct(multiplicand + 1);
    }
  };
  // call subroutine
  findLargestProduct();
  // return largest product
  return largestProduct;
};

console.log("maxProduct(8): ", maxProduct(8));

module.exports = { allBreakdownOptions, maxProduct };
