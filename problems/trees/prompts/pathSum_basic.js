'use strict';

/**
  * Given an input of a Binary Tree and a integer, 
  * return a boolean if the tree contains a path root to leaf that sums to the target.
  *
  * You can assume the Binary Tree will have .left & .right properties.
  *
  * Given the below binary tree and sum of 13:
  *       3
  *      / \
  *     1   2
  *    / \   \
  *   6   9   4
  *
  * Return true, as 3->1->9 = 13
  */

const pathSum = (tree, targetSum, prevSum) => {
  prevSum = prevSum || 0;
  const currentSum = prevSum + tree.value;

  // base case 1: we've found the end of the tree
  const endOfTree = (tree.left === null && tree.right === null);
  if (endOfTree) {
    return currentSum === targetSum ? true : undefined;
  }
  // base case 2: we've exceeded the sum
  if (currentSum >= targetSum) {
    return undefined;
  // recursive cases:  haven't reached the target sum yet
  } else if (currentSum < targetSum) {
    if (tree.left) {
      var pathSumLeftExists = pathSum(tree.left, targetSum, currentSum);
    }
    if (tree.right) {
      var pathSumRightExists = pathSum(tree.right, targetSum, currentSum);
    }
    // after all recursive calls are finished, if any path exists return true, otherwise return false
    return (pathSumLeftExists || pathSumRightExists) ? true : false;
  }
};

module.exports = { pathSum };
