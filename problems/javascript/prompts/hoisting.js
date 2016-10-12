'use strict'

const REPLACE_ME = null;

// Read through each code snipet and use your knowledge of javascript
// hoisting to predict the values that are logged at the end

module.exports = {
	
	/*
	a = 10;
	var a;
	console.log(a);
	*/

	a: 10,

	/*
	var b = 10;
	var foo = () => {
	  if (!b) {
	    var b = 'I am one with the force';
	  }
	  return b;
	};
	console.log(foo());
	*/

	b: 'I am one with the force',

	/*
	var bar = typeof foo;
	var foo = function(a) {
	  return a;
	}
	console.log(bar);
	*/

	bar: 'undefined',

	/*
	var foo = bar(10);
  function bar(a) {
    return a;
  }
	console.log(foo);
  */

	foo: 10,

};
