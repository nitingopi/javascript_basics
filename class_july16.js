//! Kill all function in JS, never use them

//* Compute function, make them FAT arrow
const sqr = x => x * x;

console.log(sqr(5));

//* Constructor function, make them classes
//! FRAUD class
//! There is class keyword, but there is no class inside


class Employee{

    constructor(id , name){
        this.id = id;
        this.name = name;
    }

    //% methods go into prototype
    print(){ //% This has no further prototype
        console.log(this.id, this.name);
    }


    //! Fat arrow inside a class go to every object
    id = 1; // Property of every object
    show = () => console.log("show details"); // Property of every object
   
}

const eich = new Employee(2, "Brendan");
eich.print();


