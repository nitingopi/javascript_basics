// 'use strict';

//! 1: Object literals -> {} [Single object]
var p = {id:1, name:"Brendan", print:function(){}};

//! 2: constructor function -> func()
function Employee(id, name){ //% constructor
    this.id = id;
    this.name = name;
}    

var e = new Employee(1, "Mark Andreesen"); //! you think class -> new constructor
console.log(e);

//> class Add{
function add(a, b){
}
//>}
var a = new add();
Employee(2, "Lars Bak");
console.log("Done");

