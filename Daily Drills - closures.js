// This for file is for practicinf closures

************************************************************************************
// The code below this one is very similar. They both access a variable outside of itself, in different places.
// The inner function is accessing the global variable, "userName".
var userName = prompt("Please enter your first name."); // <--- Entered "Howard"

var userFirstName = function () {
	// var userName = prompt("Please enter your first name."); // <--- Not sure if I am on the right track
	// return userName; // <--- Not sure if on the right track.
	return function () {
		// The return statement is accessing "userName" whic is a global variable.
		return "Today is " + Date() + "." + " Is there anything else I can help you with today, " + userName + "?";
	};
};


var h = userFirstName(userName); // <--- undefined
h(); // <--- "Today is Fri Apr 17 2015 18:09:51 GMT-0400 (EDT). Is there anything else I can help you with today, Howard?"


---------------------- Same Code Part 2 -------------------------------------------

// This time I created this function in the global scope & returning the "name" of the function w/a parameter later. ----> "m(userName);"
var m = function (x) {
	return "Today is " + Date() + "." + " Is there anything else I can help you with today, " + x + "?";
};


var userName = prompt("Please enter your first name."); // <--- Entered "Marco"

var userFirstName = function () {
	// var userName = prompt("Please enter your first name."); // <--- Not sure if I am on the right track
	// return userName; // <--- Not sure if on the right track.
	
	// So this time I am just returning the name of an existing function. Similar to using sonsole.log or alert(), I think.
	// I don't exactly know why this might be preferable at times so I will have to try and keep it on the back burner.
	return m(userName);
};


var h = userFirstName(userName); // <--- undefined

// Note: all I had to do is call "h;" not "h();"
h(); // ---> Uncaught TypeError: h is not a function

/*
I think that the reason that "h;" without parenthesis returns the value this time is because, since in the userFirstName 
function we are returning a value, when we assign "h" the value of userFirstName(userName) -  We are assigning the 
value that is returned. In this case we aren't returning a function. We are returning a value. This means that h does 
not have to be called w/parenthesis because the value that was returned from the userFirstName function is not a function. 
So "h" does not need to be called as a function because it is not one. It is a string which means that all we have to 
do to call it is type ---> h;
*/
h; // ---> "Today is Sat Apr 18 2015 22:23:15 GMT-0400 (EDT). Is there anything else I can help you with today, Marco?"



---------------------- Same Code Part 3 -------------------------------------------

// This time I am simply returning a parameter fron the userFirstName function. Then I am passing a function with a parameter through it and assigning the value to "i".
var m = function (x) {
	return "Today is " + Date() + "." + " Is there anything else I can help you with today, " + x + "?";
};


var userName = prompt("Please enter your first name."); // <--- Entered "Marco"


// a very simple function that returns whatever value is passed. Since everything in JS is an object, we can pass anything.
var userFirstName = function (o) {
	return o;
};



// Here we are passing a variable that represents a string.
var h = userFirstName(userName); // ---> undefined
h; // ---> "Marco"

// Here we are passing a function w/a parameter.
userFirstName(m(userName)); // ---> "Today is Sat Apr 18 2015 23:06:37 GMT-0400 (EDT). Is there anything else I can help you with today, Marco?"

// This one assigns the value returned from passing the function "m" w/it's parameter through the function named "userFirstName"
var i = userFirstName(m(userName)); // ---> undefined;
// So "userFirsName" the "m" function which carries out a task of it's own. 

i; // ---> "Today is Sat Apr 18 2015 23:03:09 GMT-0400 (EDT). Is there anything else I can help you with today, Marco?"



************************************************************************************
// Identical code to the one above.
// This one is accessing a variable outside of itself but inside a function that houses it and the variable
// The inner function is accessing the variable, "userName", which is outside of it's self.
var userFirstName = function () {
	var userName = prompt("Please enter your first name."); // <--- Not sure if I am on the right track
	// return userName; // <--- Not sure if on the right track.
	return function () {
		console.log("Today is " + Date() + "." + " Is there anything else I can help you with today, " + userName + "?");
	};
};

var b = userFirstName(); // <--- Entered "Jimmy"
b(); // ---> Today is Fri Apr 17 2015 18:25:54 GMT-0400 (EDT). Is there anything else I can help you with today, Jimmy?

************************************************************************************

// Similar to the two pieces of code above.
// This time, I created a parameter to be passed in to the userFirstName function.
// the inner function has access to that value and uses it.
var userFirstName = function (name) {
	// var userName = prompt("Please enter your first name."); // <--- Not sure if I am on the right track
	// return userName; // <--- Not sure if on the right track.
	return function () {
		console.log("Today is " + Date() + "." + " Is there anything else I can help you with today, " + name + "?");
	};
}; //---> undefined

var f = userFirstName("M"); // ---> undefined

f(); // ---> Today is Fri Apr 17 2015 20:22:00 GMT-0400 (EDT). Is there anything else I can help you with today, M?