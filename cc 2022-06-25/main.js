//Complete the method that takes a boolean value and return a "Yes" string for true, 
//or a "No" string for false.
//P: It will take in a boolean value which results to either true or false.
//R: This function will return a string.
//E:funtion input(bool){
// if true return yes as a string 
// if false return no as a string
//}
// input(job)
//P: function booltToWord()

function boolToWord( bool ){
    if(bool === true) {
        return "Yes"
    }else{
      return "No"
    }       
  }