// var heightJohn = 172;
// var heightMike = 165;
// var ageJohn = 39;
// var ageMike = 29;
// 
// var heightMary = 158;
// var ageMary = 31;
// 
// 
// var scoreJohn = heightJohn + 5 * ageJohn;
// var scoreMike = heightMike + 5 * ageMike;
// var scoreMary = heightMary + 5 * ageMary;
// 
// if (scoreJohn > scoreMike) {
//   console.log("John wins " + scoreJohn + " points");
// } else if (scoreMike > scoreJohn) {
//   console.log("Mike wins " + scoreMike + " points");
// } else {
//   console.log("its a draw");
// }
// 
// if ( scoreJohn > scoreMike && scoreJohn > scoreMary) {
//   console.log("John wins " + scoreJohn + " points");
// } else if ( scoreMike > scoreJohn && scoreMike > scoreMary) {
//   console.log("Mike wins " + scoreMike + " points");
// } else if ( scoreMary > scoreJohn && scoreMary > scoreMike) {
//   console.log("Mary wins " + scoreMary + " points");
// } else {
//   console.log("its a draw");
// }


function calculateAge(yearOfBirth) {
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1982);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1949);
// console.log(ageJohn);
// console.log(ageMike);
// console.log(ageMary);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  
  if (retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' yrs.');
  } else {
    console.log(name + ' has retired');
  }
  
}

yearsUntilRetirement('John', 1982);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1949);

