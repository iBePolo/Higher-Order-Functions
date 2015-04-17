/* 
This exercise helped me understand of why a function is so useful.
It's difficult to put it into words(and still do it jusstice) because these concepts are still new to me but i'll try and sum it up as best I can. I see a future with a lot less for loops.
Note: I get the skeleton for this code from Eloquent JavaScript chapter 5 and have changed things around in order to help me better understand the subject - http://eloquentjavascript.net/05_higher_order.html#average_function
*/

/*
The "eachOne" function has an item & an action parameter. The action parameter will be applied to every idex of whatever array is passed through the spot where "item" is. In this case, it's a for loop that adds every item of the array to a new array and returns that array. So I am returning the exact items & then calling the function witht the variable name of an array & entering an anonymous function on the fly.
*/
function eachOne(item, action) {
    var c = [];
    for (var i = 0; i < item.length; i++)
        action(item[i]);
    c.push(item[i]);
    return c;

}


var a = [1, 2, 3, 4];
var b = [];
/*
So the value of a is 1, 2, 3, 4 and the function that is being applied to each of the items multiplies it by 3 and adds the new values to a function named "b". b's new values are 3, 6, 9, 12.
*/
eachOne(a, function(x) {
    b.push(x * 3);
    
});

console.log(b);


/*
Original code:
function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);

*/
