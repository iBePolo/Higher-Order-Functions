/*
Using the map method on an array. New tho this method but I can already start to see how useful and time saving it must be.
*/

------ The Code ------

var numArr = [1, 2, 3];


var mapMethodFunc = numArr.map(function (arr1) {
    var result = arr1 * 3;
    return result;
});



------------------------------
------ Running the code ------
------------------------------

var myNewFunc = mapMethodFunc;
// Returns: undefined
console.log(myNewFunc);
// Returns: [3, 6, 9] & undefined


myNewFunc;
// Returns: [3, 6, 9]
