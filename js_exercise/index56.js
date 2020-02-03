// Create a new index56.js file
// Copy and paste the code from exercise 53
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator

// Define a number variable and assign the following value: 10
let number = 10;

// If number is even then show the following message: %number% is an even number
// if(number%2==0){
//     console.log(`${number} is an even number`);
// }else{
//     console.log(`${number} is an odd number`);
// }
let message = (number%2==0) ? `${number} is an even number`: `${number} is an odd number`;
console.log(message);
// Try changing the value to an odd number to see what happens