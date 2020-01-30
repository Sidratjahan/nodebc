// Create a new index35.js file
// Define the clientId variable and assign the following value: 143245
let clientId = 143245;

// Define the inputClientId variable and assign the following value: '143245'
let inputClientId = '1432455';

// Show as output if the input client id is the same as the client id value (use comparison by value)
// Example: The input client id is correct by value? true or false
console.log(`The input client id is corrct by value? ${clientId == inputClientId}`)


// Show as output if the input client id is the same as the client id value (use comparison by value & type)
// Example: The input client id is correct by value and type? true or false
let template = (clientId==inputClientId ) && (typeof(clientId)==typeof(inputClientId));
console.log(`The input client id is corrct by value and type? ${template} `);


