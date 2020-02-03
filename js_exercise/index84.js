// Create a new index84.js file
// Copy and paste the code from exercise 74
// Refactor the code to use do/while instead of while

let result = '';
let num = 0;

do{
    if(num%2 === 1)
     console.log(result);
    result = result.concat('*');
   
    num++;
}while(num < 13)
