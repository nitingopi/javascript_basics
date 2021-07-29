//% 1. Arrow functions do not create prototype
//% 2. Arrow functions do not get 'this'
//% 3. Arrow functions do not get 'arguments'
//% 4. We cannot use  'new' on Arrow function


function sqr (x){ // kill all functions in JS
    console.log('arguments : ', arguments);
    return x*x;
}

function sqr            (x)    { return x*x ; } //! Declaration
var      sqr = function (x)    { return x*x ; } //* Expression
var      sqr =          (x) => { return x*x ; } //~ FAT Arrow function
var      sqr =          (x) =>          x*x ;  //~ Remove return   
var      sqr =           x  =>          x*x ;  //~ Remove () if single parameter

var sqr = x => x*x;

console.log(sqr(5));
// var child = new sqr(5);

console.log("hello world");    


