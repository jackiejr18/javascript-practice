// Eloquent Javascript

const power = function(base, exponent) { // power function with two parameters 2 , 10
  let result = 1; // result is equal to 1
  for(let count = 0; count < exponent; count++) { // count is less than exponent 10 increment count by one
    result *= base; // result times base then set to product 1 * 2,  result = 2
  }
  return result;
}
console.log(power(2, 10));
