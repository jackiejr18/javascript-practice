// JavaScript, a constructor function is used to create objects. 

/*
Constructor function is similar as a regular function but it is good practice to capitilize the first letter
of your constructor function. */

// A constructor function should be called only with "new" operator. 

// We can use "new" operator to create an Object from a constructor function. 

function Person(first, last) {
  this.firstName = first,
  this.lastName = last,
  this.getFullName = function() {
    return this.firstName + " " + this.lastName
  }
}

const person1 = new Person('Elon', 'Musk');
const person2 = new Person('Bill', 'Gates'); 

console.log(person1.getFullName()); 