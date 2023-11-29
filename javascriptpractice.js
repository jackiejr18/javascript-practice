// JavaScript Object Methods

// JavaScript method is an object property that contains a function definition. 

const person = {
  firstName: 'Elon',
  lastName: 'Musk',
}

function greet() {
  console.log('Hello World');
}

person.greeting = greet;

person.greeting(); 
console.log(person);