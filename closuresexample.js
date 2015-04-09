var b = function (greeting) {

    return function (name) {
        alert(greeting + " " + name + ". It is nice to meet you.");
    };
};

var getB = b("Hello");
getB("Paul"); // Hello Paul. It is nice to meet you.
getB("Mike"); // Hello Mike. It is nice to meet you.
getB("Jim"); //Hello Jim. It is nice to meet you.


var getBHi = b("Hi");
var getBHola = b("Hola");
var getBKonichiwa = b("Konichiwa");

getBHi("Andres"); // Hi Andres. It is nice to meet you.
getBHola("Kentaro"); // Hola Kentaro. It is nice to meet you.  
getBKonichiwa("Tom"); // Konichiwa Tom. It is nice to meet you.