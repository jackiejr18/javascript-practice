//Objects in javaScript

// Javascript object is a non-primitive data-type that allows you to store multiple collections of data.
// "key: value" pairs are called properties, key is always stored as string
// when we declare a function as a value in key:value pair then it is known as Methods

const person = {
  firstName: 'Elon',
  lastName: 'Musk',
  age: 35,
  address: {
    street: 'Tesla Road',
    city: 'Austin',
    state: 'Texas',
    country: 'United States',
    zipCode: '78725'
  }
} 

console.log(person.address.city);