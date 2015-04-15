/*
An attempt at a higher-order function and closure. The first function, skyColor, is used to calculate the answer
 to a trivia question. The second function, triviaFunc, presents the trivia question and returns a message to the 
 user via an anonymous function.

Note: After creating this function, I learned that, in this function, I am not actually "returning" a function so
 I wrote a new one with a return of function b from within the triviaFunc function. This new execise helped me
 understand that there are nuances when it comes to code. I don't fully understand them yet but am glad that I was
 able to come across the prolem. The second version is called "Trivia Game Function w/Function Return"
*/


var skyColor = function () {
    var answerHolder = [];
    var greeting = "I am sorry, ";
    var correctAnswer = "blue";
    var judgesSay = "incorrect";
    var sentenceEnd = ".";
    var userAnswer = prompt("What color is a blue sky?", "Enter your answer here?");
    if (userAnswer === correctAnswer) {
        judgesSay = "correct";
        greeting = "Congratulations, ";
        sentenceEnd = "!";
    }

    answerHolder.push(greeting, userAnswer, judgesSay, sentenceEnd);
    return answerHolder;
};




var triviaFunc = function (question) {
    var judge = question();

    function b() {
        console.log(judge[0] + judge[1] + " is the " + judge[2] + " answer" + judge[3]);
    }
    var c = b();
    return c;


};


triviaFunc(skyColor);

/*
I think it's important to note that I am not able to call the results to this function by the following means:

1. Assigning the calling of the function to a variable & then calling the variable:
calling ---> var x = triviaFunc(skyColor); & inputing "green" returns ---> I am sorry, green is the incorrect answer.
Fine, so far.
Then:
calling ---> x; returns ---> undefined
Then:
calling ---> x(); returns ---> Uncaught TypeError: x is not a function
*/

/*
Questions to answer:
1. Are functions that return another function more efficient than a function like this one? Why?
*/





