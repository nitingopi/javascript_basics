gfn = function(){
    console.log(`gfn ${this}`);
}

var vfn = function(){
    console.log(`vfn ${this}`);
}

function lfn(){
    console.log(`lfn ${this}`);
}

var person = {
    id: 1,
    name: "Brendan",
    print: function(){
        console.log(`person ${this}`);
    }    
}