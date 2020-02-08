// Create a new index94.js file
// Copy and paste the code from exercise 84
// Refactor the code to use for instead of do/while

// let num = 0;

// do{
//     if(num%2 === 1)
//      console.log(result);
//     result = result.concat('*');
   
//     num++;
// }while(num < 13)
let result = '';
for(num=0; num<13; num++){
    if(num%2==1)
    console.log(result);
    result = result.concat('*');
}