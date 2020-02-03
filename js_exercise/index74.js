// Create a new index74.js file
// Show the following output using while:
// *
// ***
// *****
// *******
// *********
// ***********
// *************
let result = '';
let num = 0;

while(num < 13){
    if(num%2 === 1)
     console.log(result);
    result = result.concat('*');
   
    num++;
}

