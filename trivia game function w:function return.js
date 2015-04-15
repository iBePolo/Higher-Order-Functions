/*
This bit of code is very similar to my original Trivia Game Function. The key difference if that, this time, I 
am returning a function from within the triviaFunc function. I currently don't quite understand the fundamental
differences between the two. I think that as I continue to familiarize myself, I will understand the "WHY" behind
the "WHAT". For now I will be appreciative that I understand that a differences do exist and will hopefully 
stumble across the answers in the future. 
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

    // The first difference between this code and my original is that, this time, I am returning an anonymous function.
    return function b() {
    // The second deifference is that I am returning the computer response to calling the function instead of console.log
        return judge[0] + judge[1] + " is the " + judge[2] + " answer" + judge[3];
    }
    // var c = b();
    // return c;


};


var g = triviaFunc(skyColor);
g();

/*
One thing I noted is that, to call the result, I had to assign the function to a variable 
and then call the variable alomg with () after it.
*/

/*Calling just "g;" by itself returns ---> "function b()" but calling ---> "g();" returns 
(using blue & green as examples for the answer entered when "var g = triviaFunc(skyColor);" was called.)
"Congratulations, blue is the correct answer!" or "I am sorry, green is the incorrect answer." 

*/
/* So, "var g = triviaFunc(skyColor);" assigns the value & the function to the 
variable "g"(I guess the whole function) - but since we are assigning
a function to a variable, that variable becomes a function?(I am part speculatig in my head in
order to work out the code.)
*/