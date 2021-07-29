//% await works on promise !!!

const longrun =  (ms) => {
    console.log("start longrun");
    const start = new Date();
    while(new Date() - start < ms){
        // do nothing
    }
    console.log("end longrun");
}

function getData(){
    return new Promise((resolve, reject) => {
        longrun(2000);
        resolve(42);
    });

}

function getNormalData() {
    longrun(2000);
    return 12;
}

async function callForData(){
    // const promise = getData();
    // console.log("before promise");
    // promise.then(result => console.log("then result", result ));
    // console.log("after promise");

    // console.log("before await");
    // const result = await getData();
    // console.log("after await");
    // console.log("await result", result);
  
    console.log("before normal call");
    const result = getNormalData()
    console.log("after normal call");
    console.log("await result", result);
  
    console.log("Done");
}
callForData();