function getAge(){
    age = 18;
}
function utility(name, age){
    console.log(name, " ", age)
}
utility();
utility("Love")
utility(20);
utility("Love", 20);



// function solve(value = "Rahul"){
//     console.log("HELLO", value);
// }
// solve();
// solve(null);
// solve(undefined);


// function sayName(myName = "Prabhu Deva"){
//     console.log("My name is:", myName);
// }
// sayName("Jatin Garg");


// function sayName(fName = "Virat", lName = "Singh"){
//     console.log("My name is: ", fName, " ", lName);
// }
// sayName("Jatin");

// function sayName(fName = "Uday", lName = fName.toUpperCase()){
//     console.log("My name is :" , fName," ", lName);
// }
// sayName();