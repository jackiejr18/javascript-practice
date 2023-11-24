/* Scope in javascript refers to the visibility of variables and functions within a program. Threre are three types
of scope: global scope, function scope, and block scope.  */ 


/* Block scope in javascript refers to visibility of variables and functions within a block of code. A block of 
code is a group of statements that are enclosed in curly braces ({}). Variables and functions declared in a block's 
scope are only visible within that block  */

function example() {
  if (true) {
    let bv = 'GreatStack';
    console.log(bv);
  }

}

example();

console.log(bv);
