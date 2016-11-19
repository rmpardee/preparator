'use strict';

/**
  * Implement a basic tree with the methods addChild and contains.
  * Every tree's children should be accessible through .children[]
  * Children should be able to add children directly. 
  */ 

class Tree {
  constructor(val) {
    this.value = val;
    this.children = [];
  }

  addChild(val) {
    const child = new Tree(val);
    this.children.push(child);
  }

  contains(val) {
    // base case 1: we've found the value
    if (this.value === val) {
      return true;
    } else {
      // loop through the children (can't use forEach because need to be able to return out of it)
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(val)) {
          return true;
        }
      }
      // if we've gone through all the children and didn't find anything
      return false;
    }
  }

  // More methods from Joel to complete and write tests for:
  countLeaves() {

  }

  countNodes() {

  }

  updateValue(val) {

  }

  deleteLeaf() {

  }

  deleteBranch() {

  }

  removeDuplicates() {
    
  }

  onEach(cb) {

  }

  mapToArray(cb) {

  }

  filterToArray(cb) {

  }
};

module.exports = { Tree };
