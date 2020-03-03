  
// Define a femaleStudents array and assign 5 students
// Define a maleStudents array and assign 5 students
// Define a students array and assign all students name using the femaleStudents and maleStudents arrays
// Sort the students list
// Show the following output:
// Each femaleStudents name using numeric indexes
// Each maleStudents name using while
// Each students name using for
let femaleStudents = ['Female1', 'Female2', 'Female3', 'Female4', 'Female5'];
let maleStudents = ['Male1', 'Male2', 'Male3', 'Male4', 'Male5'];
let students = femaleStudents.concat(maleStudents);
let index = 0;

students.sort();

console.log('\nFemale Students list:');
console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

console.log('\nMale Students list:');
while(index < maleStudents.length) {
    console.log(maleStudents[index]);
    index++;
}

console.log('\nAll Students list:');
for(j in students) {
    console.log(students[j]);
}