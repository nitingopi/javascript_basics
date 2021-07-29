// Based on the convention
// Functions starting with uppercase
// It should be used to create object
// Like new Person(1, "Brendan")
function Person(id, name){

    //! carefull
    //! If invoked like normal function
    //! these will go into global dictionary
    this.id = id;
    this.name = name;

}

// The right thing to do
let eich = new Person(1, "Brendon");

// But Javascript does not stop us 
// from doing the wrong thing
let result = Person(1, "Wrongdan");
