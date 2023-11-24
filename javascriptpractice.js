/* Scope in javascript refers to the visibility of variables and functions within a program. Threre are three types
of scope: global scope, function scope, and block scope.  */ 


/* Global scope is the outermost scope. Variables and functions declared in the global scope are visible from
anywhere in the program. */

var x = 'hello, GreatStack';

function example() {
  console.log(x); 
}

example(); 