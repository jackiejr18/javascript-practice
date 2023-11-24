/* Scope in javascript refers to the visibility of variables and functions within a program. Threre are three types
of scope: global scope, function scope, and block scope.  */ 


/* Function scope is created when a function is declared. Variables and functions declared in a function's scope are
only visible  within that function.*/

function example() {
  var fs = 'Hello, GreatStack';

  console.log(fs); 
}

example();

console.log(fs);