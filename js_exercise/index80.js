// Create a new index80.js file
// Copy and paste the code from exercise 70
// Refactor the code to use do/while instead of while

let number = 0;
let sum = 0;

do{
    if(number%2==1){
        sum+=number;
    }
    number++;
}while(number<1001)
console.log(sum);