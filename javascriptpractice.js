// In programming, loops are used to repeat a block of code

// if you want to display a message 100 times, then you can use a loop

//break / continue

//the "break" statement is used to terminate the loop immediately
/* the "continue" statement is used to skip the current iteration of the loop and the control flow of the program
goes to the next iteration */



for (let i = 1; i <= 5; i++) {

  if (i == 3) {
    continue;
  }
  console.log(i);
}
