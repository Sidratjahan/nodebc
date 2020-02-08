// Create a new index99.js file
// Add all even numbers bettwen 0 and 1000 using for statement
// The iteration must break after finding the first 20 even numbers
// Show the result as output
var evenArray = [];
var sum=0;
var j = 0;

for(var i=0; i<=100;i++){
    if(i%2==0){
    evenArray.push(i);
}

}

for(var j=0; j<=20; j++){
    sum+=evenArray[j];
    console.log(sum)

}






 