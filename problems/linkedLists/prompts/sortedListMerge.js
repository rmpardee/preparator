'use strict';
/*
 * Write a function that, given the head (i.e., first node) of two sorted linked lists with numerical values, 
 * merges the linked lists in a sorted way. The function should return the head of the new linked list.
 * 
 * Example:
 * Inputs: 1 --> 7 --> 10 --> 11 & 0 --> 2 --> 5 --> 13
 * sortedListMerge(1, 0);
 * Output: 0 --> 1 --> 2 --> 5 --> 7 --> 10 --> 11 --> 13
 *
 */

// helper fn to build
const addNode = (value, list) => {
  // if it's the first item in the list
  if (list.value === null) {
    // set this as the first value, and return the only node in the list
    list.value = value;
    return list;
  } else {
    // otherwise create the next node, and return that node
    list.next = {
      value: value,
      next: null
    }
    return list.next;
  }
};

const sortedListMerge = (node1, node2) => {
  // Assuming: I have a helper function which given a value and optionally a list:
  // adds a new node with that value to either the list passed in, or if no list passed in creates a new list with just that node

  // Create our list to return
  let sortedList = {value: null, next: null};
  let sortedPointer = sortedList;

  // Recursive subroutine:
  let createSortedList = (node1pointer, node2pointer) => {
    // Base case: we've reached nulls for both pointers
    if (list1.next === null && list2.next === null) {
      // return the head of the new linked list we've built
      return sortedList;
    }
    // Recursive cases: compare the two pointers' values
    // if the first pointer is smaller
    // edge case to deal with : OR second is null
    if (node1pointer.value < node2pointer.value) {
      // adds the value at the node of the first pointer to the new list
      sortedPointer = addNode(node1pointer.value, sortedList);
      // calls subroutine advancing the first pointer to the next in it's list
      createSortedList(node1pointer.next, node2pointer);
    }
    // if the second pointer is smaller OR first is null
    if (node2pointer.value < node1pointer.value) {
      // adds the value at the node of the second pointer to the new list
      sortedPointer = addNode(node2pointer.value, sortedList);
      // calls subroutine advancing the second pointer to the next in it's list
      createSortedList(node1pointer, node2pointer.next);
    }
  }
  // initiate subroutine with the nodes passed in.
  createSortedList(node1, node2);
};

module.exports = { sortedListMerge };
