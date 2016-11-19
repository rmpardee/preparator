'use strict';

const solution = require('../prompts/basic_tree.js'),
      assert = require('chai').assert;
let tree;

describe('trees', function() {
	describe('basic tree', function (){
		beforeEach(() => {
      tree = new solution.Tree();
    });

		describe('constructor', () => {
			it('should create a new tree with an empty children array', () => {
				assert.equal(tree.children.length, 0);
			});
		});

		describe('addChild', () => {
			beforeEach(() => {
	      tree.addChild(5);
	    });

		  it('should add children to the tree', () => {
		    assert.equal(tree.children[0].value, 5);
		    assert.equal(tree.children.length, 1, 'Children array length isn\'t 1');
		  });

		  it('each child should itself be a tree with an empty children array', () => {
		    assert.equal(tree.children[0].children.length, 0);
		  });

		  it('should add grandchildren', function() {
		    tree.children[0].addChild(6);
		    assert.equal(tree.children[0].children[0].value, 6);
		  });
		});
			
		describe('contains', () => {
			beforeEach(() => {
	      tree.addChild(5);
	      tree.children[0].addChild(6);
	      tree.children[0].children[0].addChild(10);
	      tree.children[0].addChild(7);
	    });

		  it('should find any contained values', function(){
		    assert.isTrue(tree.contains(5), 'Could not find child');
		    assert.isTrue(tree.contains(6), 'Could not find first grandchild');
		    assert.isTrue(tree.contains(7), 'Could not find second grandchild');
		    assert.isTrue(tree.contains(10), 'Could not find great-grandchild');
		  });

		  it('should not find any values not contained', function(){
		    assert.isFalse(tree.contains(3), 'Returned true despite value not being present');
		  });
		});
	});
});

