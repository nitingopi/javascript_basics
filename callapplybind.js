// console.log(this);
// function topLevel(){
//     console.log(`${this}`);
// }
// topLevel();

id = 100;
const person = {
    id: 1,
    print(){
        console.log("person.id", this.id);
    }
}

//% call-site
person.print();  //% call-site person.print() 1. person 2. calling print 3. passing person as 'this' 


const ref = person.print; //! not a call-site ref of print, forgets person

console.log(ref);
console.log({ref});
ref(); //! -> global.print()


const correctRef = person.print.bind(person);
correctRef();








function injectId(id){
    this.id = id;
}

var obj = {};

injectId.call(obj, 5, "abc", true);
console.log(obj); 

injectId.apply(obj, [10, "xyz", false ]);
console.log(obj);
// console.log("hi nitin");