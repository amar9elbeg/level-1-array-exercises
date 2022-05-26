// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:

//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

//     1. write function ==> function takes array as input
//     2. sort the numbers inside the warray and return sorted array
// function name sortedArray it takes array
//return array.sort, make another function, it takes a,b
//return b = a
//then console log sorted Array, then make an array
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

// function name get largest, it takes array
//creat variable largest (let) = 0
// for let i equals 0 then i is less than array length i++
//then iff array [i] is greater than array length i++
//largest = array[i]
//then return largest
//console log getlargest and make an array of numbers

function getLargest(array) {
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log(getLargest([1, 3, 56234234, 52342347, 4324]));
// console.log(getLargest([1, 3, 56234234, 5237, 3653]));

//Exercise 3

//Function that will return your string in Alphabetical order

//Example:
//> console.log(AlphabeticalOrder('hello'));
//> "ehllo"
// function abcOrder
//funcion name abcOrder, it takes str
// return str split ("") sort() join("")
//then console log abcOrder, any text

function abcOrder(str) {
  return str.split("").sort().join("");
}
console.log(abcOrder("tyler"));

//Exercise 4

// Create a function that will display the smallest value in the array.

//Example:
//> console.log(findSmallest([30, 45, 60, 7]));
//> 1

// const findSmallest = [ array of numbers]
// const min equal to findsmallest then put reduce, it takes a,b => math.min takes a,b
//then console log min

// const findSmallest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const min = findSmallest.reduce((a, b) => Math.min(a, b));
function findSmallest(array) {
  const min = array.reduce((a, b) => Math.min(a, b));
  return min;
}
console.log(findSmallest([1, 3, 4, 5, 7]));

//Exercise 5
//Remove all Odd number(s) in an array and return a new array that contains Even numbers only

//Example:
// > console.log(evenOnly([1, 2, 3, 4, 5, 6]));
// > [ 2, 4, 6 ]
//create array1 = [make array of numbers]
//create odds equal to array1 filter, it takes n, percent 2 is equal to 0
//console log odds




// function splitOddAndEven(numbers) {
//   const odd = numbers.filter((number) => number % 2 === 1);
//   const even = numbers.filter((number) => number % 2 === 0);
//   const returnObject = {
//     odd,
//     even,
//   };

//   return returnObject;
// }
// console.log(splitOddAndEven(5, 2, 5, 6, 7, 4, 2, 1));




// function evenOnly(array) {
//   // evenOnly = array.filter((n) => n % 2 === 0);

// }
// console.log(evenOnly([1, 5, 6, 7, 8, 76]));
// let array1 = [1, 32, 4, 5];
// let odds = array.filter((n) => n % 2 === 0);
//  console.log(odds);

// Exercise 6

// Create a function that will accept an array, check the data type of each element.
// The function will delete string elements and will
// return a the new array
//notes
// you are gonna cost array, you make an array of anything like numbers string boolian and object
//then const a name ex: filteredArray then we are gonna use the name we const the name  above
// and add .filter that takes element => then return the type of element
//that is not equal to string, after than console log filteredArray




// function numbersOnly(string, arr) {
//   return arr.filter(function (element) {
//     return element != string;
//   });
// }

// console.log(numbersOnly("hello"[(5, 3, 5, "tyler", "hello")]));





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

// const arr = [make array of numbers]
// function name minMaxLengthAverage, it takes array
// const min = array reduce, it takes a,b => math min, that takes a,b
//const highest = math max, it take array
//const length = array length
//const average = array => array reduce, it takes a,b => a + b divided by array lenth
//console log minMaxLengthAverage arr

// function minMaxLengthAverage(array) {
//   const min = array.reduce(a, (b) => Math.min(a, b));
//   const highest = math.Max(array);
//   const length = array.length;
//   const average = (array) => array.reduce(a, (b) => a + b / array.length);
// }
// console.log(minMaxLengthAverage([1, 3, 5, "hi"]));

// Exercise 8

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3
//function name countWords, it takes str
//return str split ("") length
//console log count words (anytext)
function countWords(str) {
  return str.split(" ").length;
}
console.log(countWords("hello my name is tyler"));

// Exercise 9

// Multiply by Length
// Multiply all elements in an array by it's length

// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]
//function name is multiplyByLength, it takes array
// const length then do array length
// const newArray array map, arr =>
// then we are gonna return arr times length
//then return newArrays
//console log multiplyByLength and make an array inside
function multiplyByLength(array) {
  const length = array.length;
  const newArray = array.map(function (arr) {
    return arr * length;
  });
  return newArray;
}
console.log(multiplyByLength([5, 67, 2, 4, 35]));

// Exercise 10

// Find the correct Index location
// Return the index location of an element from a given array.
// First argument is the array you'd like to search and the second one is the element
//(either string/number) to look for.

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1

// */
// const array = [1, 2, 3, 4, 5];
// array.map(function (element) {
//   console.log(element);
// });

// const newArray = array.map(function (element) {
//   return element + 5;
// });
// console.log(newArray);

//function name is findIndex, it takes string, array
// return array index of string
// console log find index, then make array, outside of array type the word that you want
//in string before the array

//function name is index, it takes string, array
//return the array index of string
// console log find index ("hi", [make string in here])
function findIndex(string, array) {
  return array.indexOf(string);
}
console.log(findIndex("hi", ["bottle", "pc", "hi", "hello"]));
