//% Object creation using Object literal {}
//% Without requiring class, like other languages
var p = { // ~ prototype based language which does not require classes
    id: 1,                //% Field
    name: "Brendon Eich", //% Field
    print: function () {   //% Method 
        console.log("I am a person object");
    }
};

console.log(p["id"]); //~ dict[key] -> value
console.log(p.id, p.name); //~ dict.key -> value
console.log(p["id"] == p.id);

p[1] = 5; //* no problem using 1 as key in a dictionary
// p.1 = 5; //! However 1 does not pass the identification naming rule
console.log(p[1]);

p.print();
console.log(p);


var a = function add( x, y){
    c = x+y;
    return c;
}


// console.log(id);