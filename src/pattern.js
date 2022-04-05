/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern() {

  // Provide Solution Code Here
  var rows = prompt("Enter number of rows");
  if(isNaN(rows)){
    alert("Invalid Input Type, Row Input Should Be of Type Number !!!");
    return false;
  } else {
    var pattern = "";
    for(var i = 0; i < rows; i++) {
      for(var j = 0; j <= i; j++) {
        pattern += "*";
      }
      pattern += "\n";
    }
    return pattern;
  };



};
