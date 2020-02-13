// Create a new index72.js file
// Show the following output using while:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
// *************

let result = "*";
let num = 0;

while(num < 13){
    
     console.log(result);
    result = result.concat('*');
   
    num++;
}

let str = '';
while(str.length <13){
    str = str + '*';
    console.log(str);
}



