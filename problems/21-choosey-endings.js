/*
Write a function chooseyEndings that accepts an array of words and a suffix
string as arguments. The function should return a new array containing the words
that end in the given suffix. If the value passed in is not an array, return an
empty array.
*/
// goal: we want to compare the ending of each word in the array and to compare it
// to the suffix. if the word is with the suffix, we are adding this word to the new
// array.

function chooseyEndings(arr, suffixString){
    let newArr = [];
    let indexOfSuffix;  // we need to know what part of the word we have to compare to suffix

    for(let i = 0; i < arr.length; i++){
        indexOfSuffix = arr[i].length - suffixString.length; // calculating at what index our suffix in the word starts so we could use substring function later
        if(arr[i].substring(indexOfSuffix) === suffixString){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
//=> [ 'family', 'fly', 'timidly' ]

console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
//=> [ 'hound', 'bond' ]

console.log(chooseyEndings(17, 'ily'));
//=> [ ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = chooseyEndings;