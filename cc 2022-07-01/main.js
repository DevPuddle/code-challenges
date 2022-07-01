// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//P: Numbers will be passed in to the function
//R: An acumaltion of squared numbers
//E: 8^2 = 64 / 5^2 = 25 64 + 25 = 89
//P: function squareIt(num) {
//    initialize a variable
// total += num**
//}
// return total
let total = 0
function squareSum(numbers){
  numbers.forEach((num) => {
    total += numbers * numbers
  })
    return total
}

//My attempt at solving the coding challenge

