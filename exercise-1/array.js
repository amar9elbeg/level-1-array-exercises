// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:

// 1. write function-> function will take array as input
// 2. sort numbers inside array and return sorted array
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

function sortedArray(array) {
  return array.sort(function (a, b) {
    return b - a;
  });
}
console.log(sortedArray([2, -3, -9, -2, 0, 1]));

// Exercise 2

// Write a JavaScript function to find the largest of five numbers of array.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
function arrayMax(arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
}
console.log(arrayMax([1, 2, 3, 4, 40]));

// Exercise 3

// Function that will return your string in Alphabetical order

// Example:
// > console.log(AlphabeticalOrder('hello'));
// > "ehllo"

function alphabetical(arr) {
  let cr = arr.split("");
  let dr = cr.sort();
  return dr.join("");
}
console.log(alphabetical("marlaa"));
// Exercise 4

// Create a function that will display the smallest value in the array.

// Example:
// > console.log(findSmallest([30, 45, 60, 7]));
// > 1
function arrayMin(arr) {
  return arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
}
console.log(arrayMin([-1, 1, 2, 3, 4]));
// Exercise 5
// Remove all Odd number(s) in an array and return a new array that contains Even numbers only

// Example:
// > console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// > [ 2, 4, 6 ]
function evensOnly(arr) {
  let even = arr.filter((number) => {
    return number % 2 === 0;
  });
  return even;
}
console.log(evensOnly([2, 32, 1, 8, -6]));

// Exercise 6

// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
// function noString(arr) {
//   for (let index = 0; index < arr.length; index++) {
//     if (typeof arr[index] === Number) {
//       return arr[index];
//     }
//   }
// }
function noString(arr) {
  let noStr = arr.filter((value) => {
    return typeof value !== "string";
  });
  return noStr;
}
console.log(noString(["ho", 8, 9, "hi", 22]));

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
function minMaxLengthAverage(arr) {
  const answerArray = [];
  const arrayLength = arr.length;

  min = arr.reduce(function (a, b) {
    return Math.min(a, b);
  });
  max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  average = sum / arr.length;

  answerArray.push(min);
  answerArray.push(max);
  answerArray.push(arrayLength);
  answerArray.push(average);
  return answerArray;
}
console.log(minMaxLengthAverage([1, 9, 3, 4, -2]));

// Exercise 8

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3

function countWords(str) {
  let words = str.split(" ");
  return words.length;
}
console.log(countWords("hi my name is Odmaral"));
// Exercise 9

// Multiply by Length
// Multiply all elements in an array by it's length

// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]
function MultiplyByLength(arr) {
  const newArray = arr.map((element) => {
    return element * arr.length;
  });
  return newArray;
}

console.log(MultiplyByLength([1, 2, 3]));
// Exercise 10

// Find the correct Index location
// Return the index location of an element from a given array. First argument is the array you'd like to search and the second one is the element (either string/number) to look for.

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1

function findIndex(arr, value) {
  for (let index = 0; index < arr.length; index++) {
    if (value === arr[index]) {
      return arr.indexOf(value);
    }
  }
}
console.log(findIndex(["hi", "hello", "bye"], "hello"));
// // */
// // const array = [1, 2, 3, 4, 5];
// // console.log(
// //   array.map(function (element) {
// //     return element + 5;
// //   })
// // );
