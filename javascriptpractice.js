// Conditional Statements

// switch

/* the switch statement in javascript is a conditional statement that is used to execute a block of code based on 
the value of expression. */ 

let value = 42;

switch (typeof value) {
  case 'number':
    console.log('Number');
    break;

  case 'string':
    console.log('string');
    break;

  case 'boolean':
    console.log('boolean');
    break;

  default:
    console.log('other');
    break;
}