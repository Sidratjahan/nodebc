// Create a new index44.js file
// Define a text variable and assign the following value: HELLO
let text = 'HELLO';
// Define a result variable
let result;

// Get each char from the text variable and revert the text assigning it to the result variable
result = text.charAt(4).concat(text.charAt(3),text.charAt(2),text.charAt(1),text.charAt(0))
// At the end you should be able to show the following text: OLLEH
// Once you reverted the text, transform it to lowercase
console.log(result.toLowerCase());
// Show the final output: the final result is: olleh
// It kind of sound spanish, right?.. ole!!! (lol)