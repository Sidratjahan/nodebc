// Create a new index37.js file
// Define an average variable and assign the following value: 6
let average = 6;
// Define a studentAverage variable and assign the following value: 4
let studentAverage = 4;
// Show the following output:
// This student has a greater or equal average required to pass: true/false
console.log(`This student has a greater or equal average required to pass: ${studentAverage>=average}`);
// This student is missing %points% to pass
if (studentAverage<average){
    var missingPoints = average-studentAverage;
}
console.log(`This student is missing ${missingPoints} to pass`);
