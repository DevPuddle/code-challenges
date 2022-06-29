//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

//P: The function will accept a num and a string
//R: The function will return a string repeating n times
//E: 'I love pizza', n =5 "I love pizza" prints 5 times
//P: function stringRepeat(s, n){
// let n = 'I love pizza'

//}

function repeatStr (n, s) {
    let string = ''
    for (i = 0; i < n; i++){
        string += s
    }
    return string;
  }