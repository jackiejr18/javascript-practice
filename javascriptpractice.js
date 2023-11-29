// JavaScript, a constructor function is used to create objects. 

/*
Constructor function is similar as a regular function but it is good practice to capitilize the first letter
of your constructor function. */

// A constructor function should be called only with "new" operator. 

// We can use "new" operator to create an Object from a constructor function. 

function Person() {
  this.firstName = 'Elon',
  this.lastName = 'Musk'
}

const person1 = new Person(); 
const person2 = new Person();

console.log(person1);
console.log(person2); 