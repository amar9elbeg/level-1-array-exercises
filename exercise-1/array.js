// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:

//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

//     1. write function ==> function takes array as input
//     2. sort the numbers inside the warray and return sorted array

function sortedArray(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}
console.log(sortedArray([5, 7, 10, -10, 56]));

//Exercise 2

//Write a JavaScript function to find the largest of five numbers of array.
//Sample numbers : -5, -2, -6, 0, -1
//Output : 0
function getLargest(array) {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(getLargest([1, 3, 56, 52347, 365]));
// console.log(getLargest([1, 3, 56234234, 52342347, 4324]));
// console.log(getLargest([1, 3, 56234234, 5237, 3653]));

//Exercise 3

//Function that will return your string in Alphabetical order

//Example:
//> console.log(AlphabeticalOrder('hello'));
//> "ehllo"
// function abcOrder
function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("hello"));

//Exercise 4

// Create a function that will display the smallest value in the array.

//Example:
//> console.log(findSmallest([30, 45, 60, 7]));
//> 1
const findSmallest = [14, 58, 20, 77, 66, 82, 42, 67, 42, 2, 4];
const min = findSmallest.reduce((a, b) => Math.min(a, b));
console.log(min);

//Exercise 5
//Remove all Odd number(s) in an array and return a new array that contains Even numbers only

//Example:
// > console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// > [ 2, 4, 6 ]
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let odds = array1.filter((n) => n % 2 === 0);

console.log(odds);

// Exercise 6

// Create a function that will accept an array, check the data type of each element.
// The function will delete string elements and will
// return a the new array
//notes
// you are gonna cost array, you make an array of anything like numbers string boolian and object
//then const a name ex: filteredArray then we are gonna use the name we const the name  above
// and add .filter that takes element => then return the type of element
//that is not equal to string, after than console log filteredArray
const array = ["hihi", 5, { name: "Hi" }];
const filteredArray = array.filter((element) => {
  return typeof element !== "string";
});
console.log(filteredArray);

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]

// Exercise 7

// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array

// Example:
// > console.log(minMaxLengthAverage());
// > [ 3, 100, 5, 40 ]
const arr = [7, 13, 3, 77, 100];
function minMaxLengthAverage(array) {
  const min = array.reduce((a, b) => Math.min(a, b));
  const highest = Math.max(array);
  const length = arr.length(array);
  const average
}
console.log(minMaxLengthAverage(arr));

/*

Exercise 8 

Count the number of Words
Return how many words was given

Example:
> countWords('hello from kbpsystem!');
> 3

Exercise 9 

Multiply by Length
Multiply all elements in an array by it's length

Example:
> MultiplyByLength([4,1,1]);
> [12, 3, 3]

Exercise 10

Find the correct Index location
Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.

Example:
> console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
> 1

*/
// const array = [1, 2, 3, 4, 5];
// array.map(function (element) {
//   console.log(element);
// });

// const newArray = array.map(function (element) {
//   return element + 5;
// });
// console.log(newArray);
