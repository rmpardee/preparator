'use strict';

const LinkedList = require('../prompts/linkedList.js').LinkedList,
      assert = require('chai').assert;
let myList;

describe('LinkedLists', () => {
  describe('LinkedList', () => {

    beforeEach(() => {
      myList = new LinkedList();
    });

    describe('constructor', () => {
      it('should create a new list with a null head and tail', () => {
        // const myList = new LinkedList();
        assert.equal(myList.head, null, 'Head not null with new list creation');
        assert.equal(myList.tail, null, 'Tail not null with new list creation');
      });
    });

    describe('addToHead', () => {
      it('should add items to head if list is empty', () => {
        // const myList = new LinkedList();
        myList.addToHead('is my jam');
        assert.equal(myList.head.value, 'is my jam', 'Head insertion not working for empty list');
      });

      it('should update tail when adding items to head if list is empty', () => {
        // const myList = new LinkedList();
        myList.addToHead('is my jam');
        assert.equal(myList.tail.value, 'is my jam', 'Head insertion not updating tail to same value when first item');
        assert.equal(myList.tail, myList.head, 'Head insertion not updating tail to point to same node when first item');
      });

      it('should add items to head if list is not empty', () => {
        // const myList = new LinkedList();
        myList.addToHead('is my jam');
        myList.addToHead('This ');
        assert.equal(myList.head.value, 'This ', 'Head insertion not working for existing list');
      });

      it('should not update tail when adding items to head if list is not empty', () => {
        // const myList = new LinkedList();
        myList.addToHead('is my jam');
        myList.addToHead('This ');
        assert.equal(myList.tail.value, 'is my jam', 'Head insertion not preserving existing tail when list is not empty');
        assert.notEqual(myList.tail, myList.head, 'Head insertion not preserving existing tail when list is not empty');
      });
    });

    describe('addToTail', () => {
      it('should add items to tail if list is empty', () => {
        // const myList = new LinkedList();
        myList.addToTail('This ');
        assert.equal(myList.tail.value, 'This ', 'Tail insertion not working for empty list');
      });

      it('should update head when adding items to tail if list is empty', () => {
        // const myList = new LinkedList();
        myList.addToTail('This ');
        assert.equal(myList.head.value, 'This ', 'Tail insertion not updating head to same value when first item');
        assert.equal(myList.head, myList.tail, 'Tail insertion not updating head to point to same node when first item');
      });

      it('should add items to tail if list is not empty', () => {
        // const myList = new LinkedList();
        myList.addToTail('This ');
        myList.addToTail('is my jam');
        assert.equal(myList.tail.value, 'is my jam', 'Tail insertion not working for existing list');
      });

      it('should not update head when adding items to tail if list is not empty', () => {
        // const myList = new LinkedList();
        myList.addToTail('This ');
        myList.addToTail('is my jam');
        assert.equal(myList.head.value, 'This ', 'Tail insertion not preserving existing head when list is not empty');
        assert.notEqual(myList.head, myList.tail, 'Tail insertion not preserving existing head when list is not empty');
      });
    });

    describe('contains', () => {
      it('should return true if the value exists anywhere in the list', () => {
        // const myList = new LinkedList();
        myList.addToTail('is how ');
        myList.addToTail('we do it');
        myList.addToHead('This ');
        assert.isTrue(myList.contains('This '), 'Contains not finding item in head of list');
        assert.isTrue(myList.contains('is how '), 'Contains not finding item in body of list');
        assert.isTrue(myList.contains('we do it'), 'Contains not finding item in tail of list');
      });

      it('should return false if the value does not exist anywhere in the list', () => {
        // const myList = new LinkedList();
        myList.addToTail('is how ');
        myList.addToTail('we do it');
        myList.addToHead('This ');
        assert.isNotTrue(myList.contains('montellJordan'), 'Contains not working for items not in the list');
      });
    });
    
    describe('indexOf', () => {
      it('should return the index if the value exists anywhere in the list', () => {
        // const myList = new LinkedList();
        myList.addToTail('is how ');
        myList.addToTail('we do it');
        myList.addToHead('This ');
        assert.equal(myList.indexOf('This '), 0, 'indexOf not finding item in head of list');
        assert.equal(myList.indexOf('is how '), 1, 'indexOf not finding item in body of list');
        assert.equal(myList.indexOf('we do it'), 2, 'indexOf not finding item in tail of list');
      });

      it('should return -1 if the value does not exist anywhere in the list', () => {
        // const myList = new LinkedList();
        myList.addToTail('is how ');
        myList.addToTail('we do it');
        myList.addToHead('This ');
        assert.equal(myList.indexOf('montellJordan'), -1, 'indexOf not working for items not in the list');
      });
    });

    describe('insertAfter', () => {
      it('should insert items after the passed in node', () => {
        // const myList = new LinkedList();
        let fourthNode = null;
        for (let i = 0; i < 10; i++) {
          myList.addToTail(i);
          if (i === 3) {
            fourthNode = myList.tail;
          }
        }
        for (let i = 0; i < 10; i++) {
          myList.addToTail(i);
        }
        myList.insertAfter(fourthNode, 3.14159);
        const soln = [0,1,2,3,3.14159,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
        let current = myList.head;
        for (let i = 0; i < soln.length; i++) {
          assert.equal(current.value, soln[i], 'Should only insert once');
          current = current.next;
        }
      });
    });
  });
});
