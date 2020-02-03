// Create a new index73.js file
// Show the following output using while:
// *************
// ************
// ***********
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *


let index = 13;
let stars = '';
let i = 0;
while(index>0){
    stars = '';
    for(i=0; i<index; i++){
                stars =stars.concat('*')  
            }
            
            index--;
            console.log(stars);
            
}

///////////////////////////////////////////////////////////////////////

// var index = 13;
// var stars = '';
// var i = 0;
// while(index>0){
//     while(i<index){
//     i++;
//     stars=stars.concat('*'); 
//   }
//   index--;
//   console.log(stars); 
//   stars='*';
// }





