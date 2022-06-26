//Description:
//Remove an exclamation mark from the end of a string. 
//For a beginner kata, you can assume that the input data is 
//always a string, no need to verify it.

//P: A string that is passed into the function
//R: I will return as a string 
//E: remove('happy!') expect ('happy')
//P: function remove(string) {
//    if (string.length[i] === '!') {
//  take away the exclamation point
//}
//    
//}

function remove (string) {
    if(string[string.length - 1] === '!') {
     let change = string.slice(string.length - 1, string.length)
     return change
    }
     return string;
   }

// My attempt at passing the coding challenge