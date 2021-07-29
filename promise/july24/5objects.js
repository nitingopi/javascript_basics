//!5 Object.create [ES5]
const bigB = {firstName: "Amitabh", lastName: "Bachchan"};
console.log(bigB);

const smallB = Object.create(bigB); //* inheritance
smallB.firstName = "Abishek";
console.log(smallB);

const bayB = Object.create(smallB); //* inheritance
bayB.firstName = "Aradhya";
console.log(bayB.firstName, bayB.lastName);
