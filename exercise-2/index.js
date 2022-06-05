import { fifaData } from "./fifa.js";

console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final

(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// note: The find() method returns the first element in the provided array that satisfies
// the provided testing function. If no values satisfy the testing function, undefined is returned.

const teamOf2014 = fifaData.filter((data) => {
  return data.Year === 2014;
});

const finalStage = teamOf2014.find((data) => {
  return data.Stage === "Final";
});
const homeTeamName = finalStage["Home Team Name"];
console.log(homeTeamName);

console.log(finalStage["Away Team Name"]);
console.log(finalStage["Home Team Goals"]);
console.log(finalStage["Away Team Goals"]);
console.log(finalStage["Win conditions"]);

console.log(finalStage);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns
 an array of objects with only finals data */

function getFinals(data) {
  const finals = data.filter((data) => {
    return data.Stage === "Final";
  });
  return finals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function 
`getFinals`, and returns an array called `years` containing all of the years in the dataset */
function getYears(data, callback) {
  const yearsFinal = callback(data).map((callback) => {
    return callback.Year;
  });
  return yearsFinal;
}
console.log(getYears(fifaData, getFinals));
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback
 function `getFinals()` and determine the winner (home or away) of each `finals` game.
  Return the name of all winning countries in an array called `winners` */
// if statement is saying that if away team goals is larger than hometeam goals
// it returns away team name
// if not it returns hometeam name
function getWinners(data, callback) {
  const winnersFinal = callback(data).map((final) => {
    if (final["Away Team Goals"] > final["Home Team Goals"]) {
      return `this the away team won ${final["Away Team Name"]}`;
    } else {
      return `this the home team won ${final["Home Team Name"]}`;
    }
  });
  return winnersFinal;
}

console.log(getWinners(fifaData, getFinals));
// Task 6: Implement a higher-order function called `getWinnersByYear`
//  that accepts the following parameters and returns a set of strings "In {year},
//   {country} won the world cup!"
//the for loop is console logging the teams that won the world cup
function getWinnersByYear(callback, callback2) {
  const winners = callback(fifaData, getFinals);
  const years = callback2(fifaData, getFinals);
  for (let index = 0; index < years.length; index++) {
    console.log(`In ${years[index]}, ${winners[index]} won the world cup!`);
  }
}
console.log(getWinnersByYear(getWinners, getYears));

// Parameters:
//  * callback function getWinners
//  * callback function getYears
//  */

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

getCountryWins();

// /* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

// function getGoals(/* code here */) {
//   /* code here */
// }

// getGoals();

// /* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(/* code here */) {
//   /* code here */
// }

// badDefense();

// /* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
