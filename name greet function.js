/* 
A greeting function based of the skeleton of my trivia game function. It is meant as an execise to help me become more familiar with functions.
*/

var userFullName = prompt("What is your full name?");

var nameGreet = function (fullName) {
    function names() {
        console.log("Hello " + fullName + ". I hope you are having a good day today.");
        }
    return names();
    
    };
    

nameGreet(userFullName);