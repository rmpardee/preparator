/**
  * Write a recursive function to multiply two positive integers without using the * operator.
  * You can use addition, substraction, and bit shifting operators but you should minimize the number
  * of those operations.
  *
  * recursiveMultiply(2, 4) // 8
  * recursiveMultiply(3, 10) // 30
  *
  * Extra Credit: Handle multiplication of negative numbers
  * recursiveMultiply(2, 4) // 8
  */

const recursiveMultiply = (num1, num2) => {

  let num1sign = num1 < 0 ? 0 : 1;
  let num2sign = num2 < 0 ? 0 : 1;

  if (num1 < 0) {num1 = 0 - num1};
  if (num2 < 0) {num2 = 0 - num2};
  
  // v1: for loop
  // let result = 0;
  // for (let i = 1; i <= num2; i++) {
  //   result += num1;
  // }

  //v2: while loop
  // let result = 0;
  // let count = 1;
  // while(count <= num2) {
  //   result += num1;
  // }

  //v3: subroutine
  // let result = 0;
  // const multiply = (count) => {
  //   result += num1;
  //   // base case
  //   if (count === num2) {
  //     return;
  //   } else {
  //   // recursive case
  //     multiply(++count);
  //   }
  // };
  // multiply(0)

  //v4: more elegant subroutine (based on Rich's idea)
  const multiply = (total) => {
    total += num1;
    num2--;
    return num2 > 0 ? multiply(total) : total;
  }
  let result = multiply(0);


  return num1sign ^ num2sign ? (0 - result) : result;
};

// Rich's solution if only positive integers: (so elegant)
// const recursiveMultiply = (num1, num2, total) => {
//   total = total || 0;
//   return num1 > 0 ? recursiveMultiply(num1-1, num2, total+num2) : total;
// };

module.exports = { recursiveMultiply };
