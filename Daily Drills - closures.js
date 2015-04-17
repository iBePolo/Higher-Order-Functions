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

