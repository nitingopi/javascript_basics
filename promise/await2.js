function getPromise() {
    return new Promise(r => r(42));
}

async function getAsync(){ //% every async function returns a Promise
    return 84; //! return new Promise((resolve, reject) => {resolve(84);})
}

function nonAsync(){
    return 21;
}

async function doWork(){
    const r1 = await getPromise();
    console.log("r1", r1);

    const r2 = await getAsync();
    console.log("r2", r2);

    const r3 = await nonAsync();
    console.log("r3", r3);

    return "Done";
}

const r = doWork();
r.then(r => console.log(r));

// const r2 = await doWork(); //! await can only be called from inside an async function
// console.log("r2", r2);