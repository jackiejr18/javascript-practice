// A function is a block of code that performs a specific task
//Functions in JavaScript are reusable blocks of code that can be called from anywhere in your program. 

// Parameters and Arguements

// Parameters are the variables that are declared in the function definition

// Arguments are the values that are passed to the function when it is called.

/* We can pass less or more arguments while calling a function, if we pass less arguments then the rest of the
parameters will become undefined, if you pass more arguments then additional arguments will be ignored */ 

function greet(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName);
}

// greet(200, 100);

greet('Elon'); 