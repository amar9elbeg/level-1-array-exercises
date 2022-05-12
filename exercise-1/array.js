// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

// 1. write function ==> function will take array as input
// 2.Sort the numbers inside the array and return sorted array

function sortedArray(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}
console.log(sortedArray([5, 7, 10, -10, 56])); // ==> 56, 10, 7, 5, -10
// Exercise 2
// Write a JavaScript function to find the largest of five numbers of array.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

function largestNumber(array) {
  return Math.max.apply(Math, array);
}
console.log(largestNumber([-5, -2, -6, 0, -1]));

// Exercise 3

// Function that will return your string in Alphabetical order

// Example:
// > console.log(AlphabeticalOrder('hello'));
// > "ehllo"

function AlphabeticalOrder(string) {
  return string.split("").sort().join("");
}
console.log(AlphabeticalOrder("flyday chinatown!"));

// Exercise 4

// Create a function that will display the smallest value in the array.

// Example:
// > console.log(findSmallest([30, 45, 60, 7]));
// > 1

function findSmallest(array) {
  return Math.min.apply(Math, array);
}
console.log(findSmallest([30, 45, 60, 7]));

// Exercise 5
// Remove all Odd number(s) in an array and return a new array that contains Even numbers only

// Example:
// > console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// > [ 2, 4, 6 ]

function evenOnly(array) {
  return array.filter((x) => x % 2 === 0);
}
console.log(evenOnly([1, 2, 3, 4, 5, 6]));

// Exercise 6

// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
function numbersOnly(array) {
  return array.filter((string) => typeof string === "number");
}
console.log(numbersOnly(["text", 3, 7, "github", 13, "dev"]));

// Exercise 7

// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array

// Example:
// > console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]

function minMaxLengthAverage(array) {
  let length = array.length;
  let smallest = Math.min.apply(Math, array);
  let biggest = Math.max.apply(Math, array);
  let sum = length + smallest + biggest;
  let average = sum / length;
  return average;
}
console.log(minMaxLengthAverage([3, 100, 5, 40]));

// Exercise 8

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3

function countWords(string) {
  let words = string.split(" ").length;
  return words;
}
console.log(countWords("You Got Jokes"));

// Exercise 9

// Multiply by Length
// Multiply all elements in an array by it's length

// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]

function MultiplyByLength(array) {
  let length = array.length;
  let numbers = array.map(function (x) {
    return x * length;
  });
  return numbers;
}
console.log(MultiplyByLength([12, 3, 3]));

// Exercise 10

// Find the correct Index location
// Return the index location of an element from a given array.
// First argument is the array you'd like to search and the second one is the element (either string/number) to look for.

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1

function findIndex(array, string) {
    return array.indexOf(string)
}
console.log(
  findIndex(["github", "bitbucket", "gitlab", "bitbucket", "apollo"], "gitlab")
);

// const array = [1, 2, 3, 4, 5];
// const newArray = array.map(function (element) {
//   return element + 5;
// });
// console.log(newArray);
