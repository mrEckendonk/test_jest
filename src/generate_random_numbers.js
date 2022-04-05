/*

The generateRandomNumber() function should accept min and max as range boundary values.

The function should generate a random whole number in the given range and return it.

The function should return error message 'Incorrect Inputs. 1st value should be less than the second', 
if the min value is greater than or equal to max value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function generateRandomNumber() {
   
  // Provide Solution Code Here
  var min = prompt("Enter min value");
  var max = prompt("Enter max value");
  if(isNaN(min) || isNaN(max)){
    alert("Invalid Input Types, All Inputs Should Be of Type Number !!!");
    return false;
  };
  if(min >= max) {
    alert("Incorrect Inputs. 1st value should be less than the second");
    return false;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
};
