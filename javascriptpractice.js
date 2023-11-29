// this keyword 

// To access the other properties of an object within a method the same object, we can use "this" keyword

// When we use "this" keyword within a method, it refers to the same object

const person = {
  firstName: 'Elon',
  lastName: 'Musk',
  getFullName: function() {
    return this.firstName + " " + this.lastName
  }
}

console.log(person.getFullName()); 