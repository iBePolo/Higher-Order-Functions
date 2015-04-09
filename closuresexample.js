var greet = function (greeting) {

    return function (name) {
        alert(greeting + " " + name + ". It is nice to meet you.");
    };
};

var getGreet = greet("Hello");
getGreet("Paul"); // Hello Paul. It is nice to meet you.
getGreet("Mike"); // Hello Mike. It is nice to meet you.
getGreet("Jim"); //Hello Jim. It is nice to meet you.


var getBHi = greet("Hi");
var getBHola = greet("Hola");
var getBKonichiwa = greet("Konichiwa");

getBHi("Andres"); // Hi Andres. It is nice to meet you.
getBHola("Kentaro"); // Hola Kentaro. It is nice to meet you.  
getBKonichiwa("Tom"); // Konichiwa Tom. It is nice to meet you.