// Function Return 

// The return statement can be used to return the value, when the function is called. 

// The return statement denotes that the function has ended. Any code after return is not executed. 

function fn1(x) {
  function fn2(y) {
    return x * y; 
  }
  return fn2; 
}

let result = fn1(3); 

console.log(result); 