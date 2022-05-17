import { fifaData } from "./fifa.js";

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final

(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const teamOf2014 = fifaData.filter((data) => {
  return data.Year === 2014;
});
const homeTeamName = teamOf2014.find((data) => {
  return data.Stage === "Final";
});
console.log(homeTeamName["Home Team Name"]);
const awayTeamName = teamOf2014.find((data) => {
  return data.Stage === "Final";
});
console.log(awayTeamName["Away Team Name"]);
console.log(homeTeamName["Home Team Goals"]);
console.log(awayTeamName["Away Team Goals"]);
console.log(homeTeamName["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument
 and returns an array of objects with only finals data */
function getFinals(data) {
  const finals = data.filter((data) => {
    return data.Stage === "Final";
  });
  return finals;
}
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */
function getYears(data, callback) {
  const yearsFinal = callback(data).map((callback) => {
    return callback.Year;
  });
  return yearsFinal;
}
console.log(getYears(fifaData, getFinals));
/* Task 5: Implement a higher-order function called `getWinners`, 
that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. 
Return the name of all winning countries in an array called `winners` */

function getWinners(data, callback) {
  const winnersFinal = callback(data).map((final) => {
    if (final["Away Team Goals"] > final["Home Team Goals"]) {
      return final["Away Team Name"];
    } else {
      return final["Home Team Name"];
    }
  });
  return winnersFinal;
}
console.log(getWinners(fifaData, getFinals));
/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and 
returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback, callback2) {
  const winners = callback(fifaData, getFinals);
  const years = callback2(fifaData, getFinals);
  for (let index = 0; index < years.length; index++) {
    console.log(`In ${years[index]}, ${winners[index]} won the world cup!`);
  }
}
console.log(getWinnersByYear(getWinners, getYears));
/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number 
of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
function getAverageGoals(data) {
  const homeTeamPoints = data.reduce((accumlator, object) => {
    return accumlator + object["Home Team Goals"];
  }, 0);
  const awayTeamPoints = data.reduce((accumlator, object) => {
    return accumlator + object["Away Team Goals"];
  }, 0);

  const avarageNumberOfHomeTeam = homeTeamPoints / data.length;
  const avarageNumberOfAwayTeam = awayTeamPoints / data.length;
  return ` Average of home team goals is ${avarageNumberOfHomeTeam} and average of away team goals is ${avarageNumberOfAwayTeam}`;
}
console.log(getAverageGoals(fifaData));
/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and 
`team initials` and returns the number of world cup wins that country has had. 
Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  const teamWins = [];
  // first you need to get all the finals
  const winnersFinal = getFinals(data).map((final) => {
    if (final["Away Team Goals"] > final["Home Team Goals"]) {
      return final["Away Team Initials"];
    } else {
      return final["Home Team Initials"];
    }
  });

  for (let index = 0; index < winnersFinal.length; index++) {
    if (winnersFinal[index] === teamInitials) {
      teamWins.push(winnersFinal[index]);
    }
  }
  return teamWins.length;
}
console.log(getCountryWins(fifaData, "USA"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score 
per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
  // get finals ==> how many goals a country scored
  // divide that by how many times they appeared in Finals
  const homeTeamNames = getFinals(data).map((final) => {
    return final["Home Team Name"];
  });
  const awayTeamNames = getFinals(data).map((final) => {
    return final["Away Team Name"];
  });
  const combinedArray = homeTeamNames.concat(awayTeamNames);
  const count = {};
  combinedArray.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  const homeTeamGoals = getFinals(data).map((final) => {
    return { name: final["Home Team Name"], goal: final["Home Team Goals"] };

  });
  const awayTeamGoals = getFinals(data).map((final) => {
    return { name: final["Away Team Name"], goal: final["Away Team Goals"] };
  });
  const goalsArray = homeTeamGoals.concat(awayTeamGoals);
  // const dupes = goalsArray.filter((name)=> {
  //   for (let index = 0; index < names.length; index++) {
  //     for (let index = 0; index < goalsArray.length; index++) {
  //       if (condition) {
          
  //       }
  //     }
  //   }
  // })
  //   // const count1 = {};
  //   // goalsArray.forEach((element) => {
  //   //   count1[element] = (count1[element] || 0) + 1;
  //   // });
  //   // console.log(count1);
  //   console.log(count);
  //   console.log(goalsArray);
  console.log(goalsArray);
}

console.log(getGoals(fifaData));

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals 
scored against them per appearance (average goals against) in the World Cup finals */

// function badDefense(data) {
//   let arr = [];
//   const goals = getFinals(data).map((final) => {
//     const goalDifference = final["Home Team Goals"] - final["Away Team Goals"];
//     let goalDifference2 = Math.abs(goalDifference);
//     arr.push(goalDifference2)
//     console.log(arr)
//     const mostGoalsAgainst = arr.filter((number) => {
//       let largest = Math.max(number);
//       return largest;
//     });
//     return mostGoalsAgainst
//   });
//   return goals;
// }
// console.log(badDefense(fifaData));
