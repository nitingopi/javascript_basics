let array = [];
let element;

//! 1. [ARRAY] Arrays can behave like arrays
array[0] =1;


//! 2. [LIST] Arrays can also behave like linked lists
array.push(4); //% Add to the end of the linked list
console.log(array);
array.push(10);
console.log(array);


//! 3. [STACK] Arrays can also behave like stack - push and pop [LIFO]
array.push(20); //% push at the top of the stack
console.log(array);
element = array.pop(); //% pop from the top of the stack
console.log("element", element);
console.log(array);

//! 4. [QUEUE] Arrays can also behave like queues (FIFO)
element = array.shift();
console.log("element", element);
console.log(array);

//! 5. [DEQUEUE] Arrays can also behave like dequeue ( double ended queue )
array.unshift(50);
console.log(array);
array.push(100);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);

array.pop();
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);


