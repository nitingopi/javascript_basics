const txn = [
    {txnNo: 1, description: "Zomato", amount: 250.00},
    {txnNo: 2, description: "Amazon", amount: 1250.00},
    {txnNo: 3, description: "Uber", amount: 300.00}
];

const transaction = txn.filter( element => element.amount >= 300);
console.log(transaction);

const transaction1 = txn.filter(element => [250,300].includes(element.amount));
console.log(transaction1);

const array = [1,2,3,4,5,6];
const sqrNo = array.map(element => element*element);
console.log(sqrNo);

const languages = ['c', 'c++', 'java', 'python', 'dart', 'javascript'];
console.log(languages);
console.log({languages});

const langLen = languages.map(element => element.length);
console.log({langLen});

const langLen1 = languages.map((lang, index) => 
{return {srno:index+1, language:lang, length: lang.length}});
console.log(langLen1);


const total = txn.reduce( (sum, element) => sum + element.amount, 0);
console.log(total);

const total1 = txn.reduce( (sum, element) => element.amount >= 300 ? sum + element.amount : 0, 0);
console.log(total1);


const total2 = txn.reduce( (sum, element) => element.amount >= 300 ? sum + element.amount : 0, 0);
console.log(total2);

console.log("---------------");
const array1 = [1,2,3,4];
let sum = 0;
sum  = array1.reduce( (sum, value) => sum + value);
console.log(sum);


const total3 = txn
    .filter(element => element.amount >= 300)
    .map(element => { return { txnNo: element.txnNo, amount: element.amount+100}})
    .reduce( (sum, element) => sum + element.amount, 0);

console.log(total3);


