//Objects in javaScript

// Javascript object is a non-primitive data-type that allows you to store multiple collections of data.
// "key: value" pairs are called properties, key is always stored as string
// when we declare a function as a value in key:value pair then it is known as Methods

const person = {
  firstName: 'Elon',
  lastName: 'Musk',
  age: 35
} 

// The for...in loop allows you to access each property and value of an object without knowing the specific name of property

for(let prop in person) {
  console.log(prop +':'+ person[prop]);
}