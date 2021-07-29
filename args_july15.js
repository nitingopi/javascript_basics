var add = (a, b, d) => {
    var c = a + b;
    console.log(d);
    // console.log('arguments : ', arguments);
    // console.log(this);
    return c;
};

var result = add(5, 6, 7);
console.log(result);

function process(a, b) {
  console.log("arguments", arguments);
  return a + b;
}

console.log(process(1, 2));
