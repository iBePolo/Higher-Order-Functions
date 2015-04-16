/*
I found the first piece of code on stack overflow when serching for explanations on callbacks. It was simple 
and very informative. I then too the skeleton of that code and re-wrote it in several ways. This really * 1000 helped
me! I it was a great way to help me grasp how a callback works, just a little bit more.
Original code: http://stackoverflow.com/questions/19739755/nodejs-callbacks-simple-example
*/

var myCallback = function(data) {
  console.log('got data: '+data);
};

var usingItNow = function(callback) {
  callback('get it?');
};



usingItNow(myCallback);






************************************************************************************
************************************************************************************

------ The Code ------
var myCallback = function(data) {
  console.log(2 * data);
};

var usingItNow = function(callback) {
  callback(5);
};

------------------------------
------ Running the code ------
------------------------------
usingItNow(myCallback);







************************************************************************************
************************************************************************************

------ The Code ------
var myCallback = function (arg) {
	alert(arg + "!");
};


var notASentence = function (callback) {
	callback("Everybody plays the fool");
};

------------------------------
------ Running the code ------
------------------------------

notASentence(myCallback);







************************************************************************************
************************************************************************************

------ The Code ------
// This code creates an equation. 
// The "arg1" parameter will automatically pass the "2 + 2" from the additionFunctionCallback & multiply it by 10
var timesTen = function (arg1) {
	console.log(arg1 * 10);
};

/* Passing the timesTen function to the additionFunctionCallback will cause the code inside the 
additionFunctionCallback to be passed into the timesTen function */
var additionFunctionCallback = function (callback) {
	callback(2 + 2); // The "callback"(the "timeTen" function) parameter is being applied to the code in the parens.
};

------------------------------
------ Running the code ------
------------------------------
// This works
additionFunctionCallback(timesTen); // This calls the 2 functions.

//This works
var runAdditionAndTimesTen = function() { // This creates a new function that calls the two functions
	additionFunctionCallback(timesTen);
};

runAdditionAndTimesTen(); // Returns ---> 40

//This works
var a = function(x) {
	console.log(x);
};

a(runAdditionAndTimesTen());  // Returns ---> 40, VM57:3 undefined, undefined







************************************************************************************
************************************************************************************

------ The Code ------
var timesTen = function (arg1) {
	console.log(arg1 * 10);
};

/* Passing the timesTen function to the additionFunctionCallback will cause the code inside the 
additionFunctionCallback to be passed into the timesTen function */
var additionFunctionCallback = function (numForAdd1, numForAdd2, callback) {
	callback(numForAdd1 + numForAdd2); // The "callback" parameter is being applied to the code in the parens.
};

------------------------------
------ Running the code ------
------------------------------
// After experimenting, I found a few different ways to run this

// This code works
additionFunctionCallback(1, 2, timesTen); // This calls the 2 functions.

// This code works
var s = 1;
var t = 2;
additionFunctionCallback(s, t, timesTen);

// This works but calling the x; or x(); dose not work
var s = 1;
var t = 2;
var x = additionFunctionCallback(s, t, timesTen);

// This does not work and I don't know why or if it's even important in this case.
x; or x();

// And this does not. I will have to look further into this one
var runAdditionAndTimesTen = function() { // This creates a new function that calls the two functions
	additionFunctionCallback(timesTen);
};







************************************************************************************
************************************************************************************













