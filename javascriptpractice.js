// Conditional Statements

// switch

/* the switch statement in javascript is a conditional statement that is used to execute a block of code based on 
the value of expression. */ 

let dayName = 5;

switch (dayName) {
  case 1:
    dayName = 'Sunday';
    break;

  case 2:
    dayName = 'Monday';
    break;

  case 3:
    dayName = 'Tuesday';
    break;

  case 4:
    dayName = 'Wednesday';
    break;

  case 5:
    dayName = 'Thursday';
    break;

  case 6:
      dayName = 'Friday';
      break;

  case 7:
    dayName = 'Saturday';
    break;

  default:
    dayName = 'Invalid Day Number'
    break;
}

console.log('The day is: ' + dayName);