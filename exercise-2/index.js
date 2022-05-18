import { fifaData } from "./fifa.js";
console.log("its working");
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final

(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// declare a new variable which equals to fifa.js data filtered by year 2014
// declare a new variable equal to the filtered year variable filtered by stage called "Final"
// lastly console.log the filtered final variable with its first index and the desired piece of data in array

const years = fifaData.filter((yr) => {
  return yr.Year === 2014;
});
const final = years.filter((year) => year.Stage === "Final");
console.log(final[0]["Home Team Name"]);
console.log(final[0]["Away Team Name"]);
console.log(final[0]["Home Team Goals"]);
console.log(final[0]["Away Team Goals"]);
console.log(final[0]["Win conditions"]);

/* Task 2: Create a function called getFinals that takes `data` as an argument and returns an array of 
objects with only finals data */

// kind of the same thing as before, where you filtered the 2014 matches by stage but this time its in a function and its not only limited to the year 2014

function getFinals(data) {
  const final = data.filter((stg) => {
    return stg.Stage === "Final";
  });
  return final;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`,
and returns an array called `years` containing all of the years in the dataset */

// use the getFinals data from before as the argument for getYears function
// declare a new variable equaling to the callback function with its argument
// finally declare a new variable which will equal to the years
// we can do that by first getting access to the finals data and getting the desired element from all the elements.

function getYears(callback) {
  const finals = callback(fifaData);
  const years = finals.map((fnl) => {
    let yr = fnl.Year
    return yr
  })
  return years 
}
console.log(getYears(getFinals));
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function 
`getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning 
countries in an array called `winners` */

// first declare new variable and make it equal to the callback (add the argument for the callback while u at it)
// declare another variable called winners (given) and then use a method that gives you access to properties of variable on the first variable
// creat a function in the method
// function will get the total goals of both teams and then see who got more
// whoever got more goals gets their home team name returned

function getWinners(callback) {
  const finals = callback(fifaData)
  const winners = finals.map((fnl) => {
    const hmGoals = fnl["Home Team Goals"] + fnl["Half-time Home Goals"];
    const awGoals = fnl["Away Team Goals"] + fnl["Half-time Away Goals"];
    if (hmGoals > awGoals) {
      return fnl["Home Team Name"];
    } 
    if (awGoals > hmGoals) {
      return fnl["Away Team Name"]
    }
  })
  return winners
} 
console.log(getWinners(getFinals))
// Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters 
// and returns a set of strings "In {year}, {country} won the world cup!" 

// declare variables equal to the callback functions (add arguments)
// use template literals

function getWinnersByYear(wnr, yr) {
  const country = wnr(getFinals)
  const year = yr(getFinals)
  // const country = winner.map((wnr) => {
  //   let wncr = wnr.s
  // })
  // const year = winner.map((wnr) => {
  //   let wnyr = wnr.Year
  //   return wnyr
  // })
  return `In ${year}, ${country} won the world cup!`;
}
console.log(getWinnersByYear(getWinners, getYears))

// Parameters: 
//  * callback function getWinners
//  * callback function getYears

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the 
average number of home team goals and away team goals scored per match 
(Hint: use .reduce and do this in 2 steps) */

// declare variables equal to home team goals and away team goals
// find average by adding all the goals together using a "certian" method that has a starting point and ending point.
// after that just divide by the length of the goals and finish it off with template literals

function getAverageGoals(data) {
  const awGoals = data.map((dt) => {
    let goals = dt["Home Team Goals"]
    return goals
  })
  const tmGoals = data.map((dt) => {
    let goals = dt["Away Team Goals"]
    return goals
  })
  const avrgAway = awGoals.reduce((a, b) => a + b, 0) / awGoals.length
  const avrgTeam = tmGoals.reduce((a, b) => a + b, 0) / tmGoals.length
  return `Average away team goals: ${avrgAway} and average home team goals: ${avrgTeam}`
}
console.log(getAverageGoals(fifaData))

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials`
and returns the number of world cup wins that country has had. 
Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

// find how many world cup wins there were
// find how much of the world cup wins had initial name of USA and push that into a empty array

function getCountryWins(data, teamInitials) {

}
console.log(getCountryWins(fifaData, "USA"));

// const winners = finals.map((fnl) => {
//   let wnr = fnl["Home Team Name"]
//   return wnr
// })
// return winners
// }


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with 
the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team 
with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the 
README file. */
