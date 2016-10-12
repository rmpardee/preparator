/**
  * Implement a method to perform basic string compression using the counts of repeated characters.
  * If the ‘compressed’ string would not become smaller than the original string,
  * your method should return the original string. 
  *
  * For example:
  * stringCompression('aabbbcddd') // => 'a2b3c1d3'
  * stringCompression('c') // => 'c'
  */



const stringCompression = string => {
  // create an object to store:
  // previous character, initialized at the first character
  // count of prev character, initialized at one
  var previous = {
    character: string[0],
    count: 1
  };
  // string to build and return
  var compressedString = '';
  // iterate through the string (starting at the second)
  for (var i = 1; i < string.length; i++) {
    // if the character is the same as the previous character
    if (string[i] === previous.character) {
      // increment the prev character counter and continue iteration
      previous.count++;
    } else {
      // otherwise, add the previous character to the returning string
      // and add the prev character counter
      compressedString = compressedString + previous.character + previous.count;
      // reset the previous character to the current character
      previous.character = string[i];
      // and change the character count back to one
      previous.count = 1;
    }    
  }
  // return the string we've built
  return compressedString;
};

module.exports = { stringCompression };
