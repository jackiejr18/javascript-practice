// this keyword 

// To access the other properties of an object within a method the same object, we can use "this" keyword

const person = {
  firstName: 'Elon',
  lastName: 'Musk',
  greet: function() {
    console.log('Hello ' + this.firstName);
  }
}

 person.greet(); 