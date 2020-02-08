// Create a new index90.js file
// Copy and paste the code from exercise 80
// Refactor the code to use for instead of do/while

let sum = 0
for(let num=0; num<1001; num++){
    if(num%2==1)
    sum+=num;
}
console.log(sum);