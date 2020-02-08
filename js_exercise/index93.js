// Create a new index93.js file
// Copy and paste the code from exercise 83
// Refactor the code to use for instead of do/while
// let index = 13;
// let stars = '';
// let i = 0;
// do{
//     stars = '';
//     for(i=0; i<index; i++){
//                 stars =stars.concat('*')  
//             }
            
//             index--;
//             console.log(stars);
            
// }while(index>0)
let stars = '';
for(let index=13; index>0; index--){
    stars = '';
    for(let i=0; i<index; i++){
                stars =stars.concat('*')  
            }
            
            console.log(stars);
}