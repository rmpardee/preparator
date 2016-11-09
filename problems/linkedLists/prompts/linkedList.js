'use strict';

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(val) { // Adds a node to head
    const newNode = {
      value: val,
      next: null
    }
    if (this.head === null) {
      // make both the head and tail point to this new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // save the old list
      const oldList = this.head;
      // set this old list as the next on the new node we're adding
      newNode.next = oldList;
      // set the new head to point to this new node
      this.head = newNode;
    }
  }

  addToTail(val) { // Adds a node to tail
    const newNode = {
      value: val,
      next: null
    };
    if (this.head === null) {
      // make both the head and tail point to this new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the existing tail to point to this new node
      this.tail.next = newNode;
      // reset what the tail points to
      this.tail = newNode;
    }
  }
 
  contains(val) { // Returns a boolean indicating whether the input value is present
    const findValue = (node) => {
      // base case 1: found the value
      if (node.value === val) {
        return true;
      // base case 2: no more in the list
      } else if (node.next === null) {
        return false;
      // recursive case
      } else {
        return findValue(node.next);
      }
    };
    // invoke the subroutine starting at the head and return the results
    return findValue(this.head);
  }

  indexOf(val) { // Returns the numerical order or "index" of the node with value. Returns -1 if not present
    let counter = 0;
    // subroutine
    const findValue = (node) => {
      // base case 1: we've found the value
      if (node.value === val) {
        return counter;
      // base case 2: no more in the list
      } else if (node.next === null) {
        return -1;
      // recursive case: there is still something next
      } else {
        counter++;
        return findValue(node.next);
      }
    };
    // invoke the subroutine starting at the head and return the results
    return findValue(this.head);
  }

  insertAfter(node, val) { // Acts similar to addToTail, except it creates a new node after the input node
    const restOfList = node.next;
    // add the rest of the existing list to the new node
    const newNode = {
      value: val,
      next: restOfList
    };
    // make the new node what's next with the node passed in
    node.next = newNode;
  }
}

module.exports = { LinkedList };
