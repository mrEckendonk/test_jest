/*

The checkEligibility() function should accept age as input and check for eligibility to vote

The validity criteria for age is 18 and above.

The function should return true if eligibility criteria is satisfied else should retun false.

The function should return error message "Invalid Age Input, Age Should Only Be Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function checkEligibility() {
   
  // Provide Solution Code Here
  var age = prompt("Enter your age");
  if(isNaN(age)){
    alert("Invalid Age Input, Age Should Only Be Number !!!");
    return false;
  } else if(age >= 18) {
    return true;
  };
};
