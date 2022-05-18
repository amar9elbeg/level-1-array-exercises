// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

// 1. write function ==> function will take array as input
// 2.Sort the numbers inside the array and return sorted array

// find a sorting method and write a function in the method to return the sorted arguments in reverse going from big to low.

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

// Use a method to find the largest number in array

function largestNumber(array) {
  return Math.max.apply(Math, array);
}
console.log(largestNumber([-5, -2, -6, 0, -1]));

// Exercise 3

// Function that will return your string in Alphabetical order

// Example:
// > console.log(AlphabeticalOrder('hello'));
// > "ehllo"

// convert to array and use a sorting method and then return to string

function AlphabeticalOrder(string) {
  return string.split("").sort().join("");
}
console.log(AlphabeticalOrder("flyday chinatown!"));

// Exercise 4

// Create a function that will display the smallest value in the array.

// Example:
// > console.log(findSmallest([30, 45, 60, 7]));
// > 1

// same thing as largestNumber function but this time smallest

function findSmallest(array) {
  return Math.min.apply(Math, array);
}
console.log(findSmallest([30, 45, 60, 7]));

// Exercise 5
// Remove all Odd number(s) in an array and return a new array that contains Even numbers only

// Example:
// > console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// > [ 2, 4, 6 ]

// find a filtering method and then check if the number is even by dividing the array values by 2

function evenOnly(array) {
  return array.filter((x) => x % 2 === 0);
}
console.log(evenOnly([1, 2, 3, 4, 5, 6]));

// Exercise 6

// Create a function that will accept an array, check the data type of each element. The function will delete string elements and will return a the new array

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]

// use the same method as evenOnly function and see if the values of the variables in array is a number

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

// declare the length of the array, smallest variable, biggest variable, and the sum, and finally the average.
// finding average of numbers is to divide the sum of all and them divide by the length.

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

// declare the word count and convert the argument to string array and then check its length and return that value.

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

// declare the length of the array
// find a new method to access the variables of the argument
// multiply the variable by the length

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

// find a new method that finds the index location of given value
// use the index locator method on the array and give the argument of the element you're looking for 

function findIndex(array, string) {
    return array.indexOf(string)
}
console.log(
  findIndex(["github", "bitbucket", "gitlab", "bitbucket", "apollo"], "gitlab")
);