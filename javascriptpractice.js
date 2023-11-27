// Recursive Functions

// A recursive function in JavaScript is a function that calls itself 

function countDown(num) {
  console.log(num);
  num--;
  if(num >= 0) {
    countDown(num);
  }; 
}

countDown(10);