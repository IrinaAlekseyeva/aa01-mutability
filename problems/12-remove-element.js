/*
Define a function called removeElements that takes in three parameters. The
first parameter should be an array. The second parameter should be an integer
representing the index of the array at which the function should start removing
elements. The third parameter should be the number of elements that need to be
removed from the array. See test cases for examples.
*/

function removeElements(arr, firstRem, howManyToRemove){
   
    return arr.slice(0, firstRem).concat(arr.slice(firstRem + howManyToRemove));
}

console.log(removeElements([1, 2, 3], 1, 1));       // [1, 3]
console.log(removeElements([1, 2, 3], 1, 2));       // [1]
console.log(removeElements([1, 2, 3], 0, 1));       // [2, 3]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeElements;