//% function gets "arguments" object
//% It can use rest parameters 
function sum(label, ...args){
    let total = 0;
    for (let index = 0; index < args.length; index++) {
        total += args[index];
    }
    return total;
}

//% Arrow function does not get arguments 
//% It has to use rest parameters
// const sum = (label, ...rest) => {
//     return rest.reduce( (total, value) => total + value);
// } 

const array = [1,2,3,4,5];
const result = sum("Total", ...array);
console.log(result);