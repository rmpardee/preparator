'use strict';

const REPLACE_ME = null;

// Using your knowledge of Array methods, fill in the following tests.

module.exports = {

  // predict what ["A", "B", "C"].concat([1, 2, 3]) will return
  concat: ["A", "B", "C", 1, 2, 3],


  // predict what ["A", "B", "C"].join() will return
  join: "A,B,C",


  // predict what ["A", "B", "C"].push("D") will return
  push: 4,


  // predict what ["A", "B", "C"].pop() will return
  pop: "C",


  // predict what ["A", "B", "C"].shift() will return
  shift: "A",


  // predict what ["A", "B", "C"].unshift("X") will return
  unshift: 4,


  // predict what ["one", "two", "three", "four"].slice(0,2) will return
  slice1: ["one", "two"],


  // predict what ["one", "two", "three", "four"].slice(0) will return
  slice2: ["one", "two", "three", "four"],


  // predict what ["one", "two", "three", "four"].slice(-2) will return
  slice3: ["three", "four"],


  // predict what ["one", "two", "three", "four"].splice(1, 2, 3, 4) will return
  splice: ["two", "three"],


  // predict what ["one", "two", "three", "four"].reverse() will return
  reverse: ["four", "three", "two", "one"],


  // predict what ["BAT", "CAT", "ARTICHOKE"].sort() will return
  sort1: ["ARTICHOKE", "BAT", "CAT"],


  // predict what [1, 9, 3, 100, 800, 20].sort() will return
  sort2: [1, 100, 20, 3, 800, 9],


  // predict what ["A", "B", "X", "Z"].indexOf("X") will return
  indexOf1: 2,


  // predict what ["A", "B", "X", "Z"].indexOf("Y") will return
  indexOf2: -1,


  // predict what [1, 4, 9].map(n => n * 3) will return
  map: [3, 12, 27],


  // predict what [1, 40, 900, 60, 300].filter(n => n < 300) will return
  filter: [1, 40, 60],


  // predict what [10, 9, 8, 7].every(n => n < 15) will return
  every: true,


  // predict what 400, 243, 86, 138, 302].some(n => n < 100) will return
  some: true,


  // predict what ['S', 'T', 'A', 'R'].reduce((a, b) => a + b) will return
  reduce: 'STAR',


  // predict what ['S', 'T', 'A', 'R'].reduceRight((a, b) => a + b) will return
  reduceRight: 'RATS'
};
