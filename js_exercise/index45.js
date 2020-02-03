// Create a new index45.js file
// Define a playerName variable with the following value: Patrik Laine is lame
let playerName = 'Patrik Laine is lame';
let playerNameSlice = playerName.slice(0,16);
console.log(playerNameSlice);
// PATRIK LAINE is the best Jets player, Go Jets!!


// Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let teamSlice = teams.slice(46,51);
let teamSlice1 = teamSlice.charAt(0).toUpperCase().concat(teamSlice.slice(1));

// Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
let message = 'Winnipeg is the best Canadian city, Go Winnipeg';
let msgSlice1 = message.slice(12,21);
let msgSlice2 = message.slice(34,39);
console.log(msgSlice1);
console.log(msgSlice2);

let template = 'player';
console.log(playerNameSlice.concat(msgSlice1,teamSlice1,template,msgSlice2,teamSlice1));
// Use the slice method to get the following words or phrases from the previous variables:

// Patrik Laine is
// jets
// the best
// , Go
// Use a template variable to create the final result
// Change the first jets character to be Capitalized
// Create all the variables that you might need to accomplish this objective
// The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!