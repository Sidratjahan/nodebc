// Create a new index95.js file
// Copy and paste the code from exercise 85
// Refactor the code to use for instead of do/while
const f0=0;
let f1=-1;
let f2=1;

// do{
//     f = f1 +f2;
//     f1=f2;
//     f2 =f;
//     i ++;
//     console.log(f)
// }while (i<=10)
for(let i=1; i<=10; i++){
    
    f = f1 +f2;
    f1=f2;
    f2 =f;
 
    console.log(f)

}