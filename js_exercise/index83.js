// Create a new index83.js file
// Copy and paste the code from exercise 73
// Refactor the code to use do/while instead of while

let index = 13;
let stars = '';
let i = 0;
do{
    stars = '';
    for(i=0; i<index; i++){
                stars =stars.concat('*')  
            }
            
            index--;
            console.log(stars);
            
}while(index>0)