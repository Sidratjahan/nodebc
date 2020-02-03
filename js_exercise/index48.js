// Create a new index48.js file
// Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
let message = '3.14 it\'s a great number but 42 it\'s the answer to life.';
let msgArrray = message.split(' ');



// Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
let pi = parseFloat(msgArrray[0]);
console.log(pi);

// Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
let answerToLife = parseInt(msgArrray[6]);
console.log(answerToLife);

// Declare a result value and assign the result of adding pi and answerToLife values
let result = pi+answerToLife;

// Show the result variable value and name as output (use console.log(variable name, variable value))
console.log(`result: ${result}`);

// Show the following output: 45.14 is the result of adding pi and answerToLife
// Concatenate the strings and transform 45.14 (result value) from number to string using toString method
