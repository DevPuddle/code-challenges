// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//P: An array will be passed into the function
//R: It will square then return the added numbers 
//E: 1^2 = 1 2^2 = 4 1 + 4 = 5
//P: function squareSum(array) {
// const initialValue = 0
// const totalValue = array.reduce((a, b) => {
//  a**a + b, initialValue
//})
// return initialValue;
//}

function squareSum(numbers){
    numbers.reduce((a, b) => {
      a + b * b
    })
    return a
  }

// My second attempt at this coding challenge

P: function squareSum(array) {
    const initialValue = 0
    const totalValue = array.reduce((a, b) => {
    a**a + b, initialValue
    })
    return totalValue;
}

//The solution to the coding challenge.

function squareSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i] 
    }
    return sum
  }


