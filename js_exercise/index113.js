// Create a new index113.js file
// Define the function getShapePerimeter that accepts 2 parameters: base and height
// If base and height are equal then calculate the perimeter of a square
// If base and height are not equal then calculate the perimeter of a rectangle
// This function returns a number that represents the shape perimeter
// Show the following output: %perimeter% is the shape perimeter
// If the perimeter is bigger than 100 then show the following output: The perimeter is too big
// Else show the following message: The perimeter is fine
// Call this function a couple of times with different values
// Test all possible cases

const getShapePerimiter =  function (base, height) { 
    return (base == height) ? (base * 4) : ((base + height) * 2);
};

let perimeter = getShapePerimiter(2, 10);  
console.log(`${perimeter} is the shape perimeter`);
if (perimeter > 100) {
    console.log("The perimiter is to big");
} else {
    console.log("The perimiter is fine");
};