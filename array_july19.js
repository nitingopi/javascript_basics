//! There are no traditional arrays in JS
//! Array = Object (dictionary with __proto__ ) with .length property
//! Non positive numbers as index are stored as they are
//! They don't count towards length

function sqr(x) { return x * x };
let person = { id: 1, name: "Brendan" };
let p2 = { height: 6, age: 28, moustache: false };
console.log(person.toString());
let fake = { 0: 4, 1: 5, 2: 6, length: 3 };
fake[5] = 7;

//! Array index is a .toString() of what you provide
let array = [1, 2, 3];
array[3] = 4;
array[50] = 6;  
array["id"] = 1;
array[-1] = -5;
array[true] = false;
array[person] = "eich";
array[p2] = "Marc";
array[sqr] = ":-)"
array.name = "Brendan";
array["name"] = "Thomas";

console.log(array);

// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);

// }