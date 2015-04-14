/*
Using the map method on an array. New tho this method but I can already start to see how useful and time saving it must be.
*/


var numArr = [1, 2, 3];


var mapMethodFunc = numArr.map(function (arr1) {
    var result = arr1 * 3;
    return result;
});


var myNewFunc = mapMethodFunc;
console.log(myNewFunc);