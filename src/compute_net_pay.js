/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable() {
   
  // Provide Solution Code Here
  var pricePerKilo = prompt("Enter price per kilo");
  var quantityInKilo = prompt("Enter quantity in kilo");
  var discountPercentage = prompt("Enter discount percentage");
  if(isNaN(pricePerKilo) || isNaN(quantityInKilo) || isNaN(discountPercentage)){
    alert("Invalid Input Types, All Inputs Should Be of Type Number !!!");
    return false;
  };
  var netPayable = (pricePerKilo * quantityInKilo) - ((pricePerKilo * quantityInKilo) * (discountPercentage / 100));
  return netPayable;
};

