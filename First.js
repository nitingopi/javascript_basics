console.log('hello world');
g = 10; // global variable browser:window node:global

var x = 5; // local variable browser:window node:local to anonymous function
var y = 7; // local variable browser:window node:local to anonymous function

function add(a, b) { //* Function definition (not expression)
    var c;           //~ Local variable to function add   
    c = a + b;
    return c;
}

z = add(x, y); // browser:window node: global
var a = add(x, y); // browser:window node: local to anonymous function
console.log("z", z);
console.log("a", a);