// This file is dedicated to practicing Higher-Order Functions.

************************************************************************************

/*
The multX3 function gets passed into the numXNum function. Since multX3 needs a
value for the x parameter, it pulls it from the return of numXNum.
*/

var multX3 = function (x) {
    return x * 3;
};

var numXNum = function (y, z) {
    return (z (y * y));
};

// alert(numXNum(2, multX3)); // Returns ---> 12

var a = numXNum(2, multX3);
alert(a); // Returns ---> 12

************************************************************************************
// Apply an action to a number

function x2(x, action) {
	action(x);
} // <--- Does not need a semicolon because it's a declared function.


x2(3, function(x){return x * 2};); // ---> undefined

x2(3, function(x){console.log(x * 2);}); // ---> 6 & undefined

var a = 5;
x2(a, function(x){console.log(x * 2);}); // ---> 10 & undefined

************************************************************************************
var f = function (a, b, c) {
	return c(a + b);
};


f(5, 6, function (x) {return x * 3;}); // ---> 33

var m = f(5, 6, function (x) {return x * 3;}); // ---> undefined
m; // ---> 33
************************************************************************************
var eachItem = function (myArr, action) {
	for (var i = 0; i < myArr.length; i++)
		action(myArr[i]);
}; // <--- Needs a semicolon because it's a function expression.

var newArr = ["Hello", "Goodbye"];

eachItem(newArr, function (x) {console.log(x);}); // <--- Hello, Goodbye & undefined

************************************************************************************


var forEach = function (item, action) {
	return action(item); // <--- It's very important to return the value!!! This same code won't work without the "return" keyword!
};



var f = forEach(2, function(x) {return x * 2;}); // ---> 4


/*
This code will not work without the "return" keyword. The only difference between the following code and
the original(above) is the "return" keyword. It won't work without it.
*/
var forEach = function (item, action) {
	action(item); // <--- This code will not work without "return"
};

var f = forEach(2, function(x) {return x * 2;});


************************************************************************************

************************************************************************************

************************************************************************************

************************************************************************************
