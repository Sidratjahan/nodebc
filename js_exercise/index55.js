// Create a new index55.js file
// Copy and paste the code from exercise 52
// Refactor the code so it match the new requirements:*
// Replace if/ese statement for a conditional ternary operator



// Create a new index52.js file
// Copy and paste the code from exercise 49
// Refactor the code so it match the new requirements:
// If firstNumber variable is bigger than secondNumber then show the following message: Number %firstNumber% is bigger than %secondNumber%
// Else show Number %secondNumber% is bigger than %firstNumber%

// Create a new index49.js file
// Define 2 variables with the names firstNumber and secondNumber
let firstNumber, secondNumber;

// Assign firstNumber the number 10
// Assign secondNumber the number 5
firstNumber = 10;
secondNumber = 5;

// If the first number is bigger than the second number then show the following output: Number %firstNumber% is bigger than %secondNumber%
// Now try changing the secondNumber value and see what happens when you execute the code
// if (firstNumber>secondNumber) {
//     console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
// }else{
//     console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
// }


let message = (firstNumber>secondNumber) ? `Number ${firstNumber} is bigger than ${secondNumber}` : `Number ${secondNumber} is bigger than ${firstNumber}`;

console.log(message);
