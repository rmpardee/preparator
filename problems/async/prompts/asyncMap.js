 'use strict';

/* RUTH's EDITED VERSION:

Implement the function `asyncMap`:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes in a callback (a different one than passed to asyncMap).
 * 
 * asyncMap first creates a results array of whatever argument is passed to the callback of each async task function. What's added in the results array for each function should just be exactly whatever is passed into the callback for that task (not manipulated in any way).
 *
 * The callback passed to asyncMap is then performed on the results array (only once all the callbacks of all the tasks have returned). Nothing is returned.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.


Examples:
 
ES5:
1. asyncMap([
    function(callback) {
      setTimeout(function() {
        callback('one');
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        callback('two');
      }, 200);
    }
  ], function(results) {
    // the results array will equal ['one','two']
    // even though the second function had a shorter timeout.
    console.log("the finished results array is: ", results);
  }
); // ['one', 'two']
 
2. asyncMap([
    function(callback) {
      setTimeout(function() {
        callback('one');
      }, 200);
    },
    function(callback) {
      setTimeout(function() {
        callback('two');
      }, 200);
    }
  ], function(results) {
      for (var i=0; i < results.length; i++) {
        results[i] = results[i] + '!';
      }
        // the results array will equal ['one!','two!']
        // even though the second function had a shorter timeout.
        console.log("the finished results array is: ", results);
  }
); // ['one!', 'two!']
 
 ES6:
1. asyncMap([
    callback => {
      setTimeout(() => {
        callback('one');
      }, 200);
    },
    callback => {
      setTimeout(() => {
        callback('two');
      }, 100);
    }
  ],
  results => {
    // the results array will equal ['one','two']
    // even though the second function had a shorter timeout.
    console.log("the finished results array is: ", results); // ['one', 'two']
  }
);

 2. asyncMap([
    callback => {
      setTimeout(() => {
        callback('one');
      }, 200);
    },
    callback => {
      setTimeout(() => {
        callback('two');
      }, 100);
    }
  ],
  results => {
    // the results array passed here will equal ['one','two']
    // even though the second function had a shorter timeout.
    for (var i=0; i < results.length; i++) {
      results[i] = results[i] + '!';
    }
    console.log("the finished results array is: ", results); // ['one!', 'two!']
  }
);
 */


const asyncMap = (tasks, callback) => {
  // create results array
  var results = [];
  // create a counter
  var resultCount = 0;
  // loop through the tasks
  for (let i = 0; i < tasks.length; i++) {
    // you need to save what `i` is (so it doesn't change part-way though an iteration of the loop)
    // you can do this in ES5 by wrapping everything in an IIFE and saving the current `i` to a variable
      // (either the parameter passed to the IIFE or a variable inside the IIFE)
    // With ES6, we can use `let` since it will create a block scope
      // and therefore be a unique variable for each iteration.
    // We could define a let variable to hold what `i` is (let current = i)
    // OR we could just use `let` to define `i` in the first place! (see `for` loop above)

    // invoke each of the tasks, passing in a callback
    tasks[i](function(string) {
      // as stated in the instructions, the thing we save to the results array should just be exactly
      // the argument that is passed to the callback in the task definition
      // NOTE: you can't use `.push` here, since that would push it to the end whenever it runs
      // rather than preserving the order it's called in as bracket notation will.
      results[i] = string;

      // increment our counter
      resultCount++;

      // when our counter is the same as the number of tasks, we know everything has returned
      // and we can call the callback passed to asyncMap on the results array itself
      // NOTE: it's tempting here to think we could use:
          // a) the length of the results, or
          // b) `current` itself.
        // Neither works.
        // Once a function completes running, the value will be added to the results array. Let's say the third one completes first. Here's why the other options don't work:
          // a) The results length would now be 3, but the first two values would be undefined.
          // b) `current` would also be 3, but the first two haven't completed.
        // Therefore the only solution is to use a counter we increment ourselves when each finishes, and only move on once the counter has reached the level we want.
      if (resultCount === tasks.length) {
        // invoke the callback passed to asyncMap on the results array
        callback(results);
      }
    });
  }
};

// If you use recursion, some possibilities open up:

// const asyncMap = (tasks, callback) => {
//   var arr = [];
//   var i = 0;
//   function hitMe(result) {
//     // we can use `.push` here where we couldn't with the `for` loop
//      // This is because running the next recursive call **will not happen** until the previous one finishes
//        // (whereas it would happen with the `for` loop because
//        // a `for` loop does not wait for async results to keep going)
//      // Implicitly by doing it recursively, the next task will not be called until the previous one has finished,
//    // because it's called **within** the callback passed to the previous task itself.
//     arr.push(result);
//     i++
//     // You can also use `i` itself as the determiner to see if we've reached the base case, because `i` now _is_
//     // our counter - they're one in the same
//     if (i === tasks.length) {
//       callback(arr)
//     } else {
//       tasks[i](hitMe)
//     }
//   }
//   tasks[0](hitMe)
// };

// TEST:
asyncMap([
  function(callback) {
    setTimeout(function() {
      callback('one');
    }, 200);
  },
  function(callback) {
    setTimeout(function() {
      callback('two');
    }, 100);
  }
], function(results) {
    for (var i=0; i < results.length; i++) {
      results[i] = results[i] + '!';
    }
    console.log(results);
  }
);

module.exports = { asyncMap };
