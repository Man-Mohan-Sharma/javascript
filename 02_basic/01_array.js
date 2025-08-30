// array

const myarr = [0,1,2,3,4];
const myhero = ["manmohan","papa","bhai"];

const myarr2 = new Array(1,2,3,4,5);
console.log(myarr[1]);
myarr.push(5);
myarr.push(6);
myarr.pop();
myarr.unshift(10);  // this will add number at the start of the array
myarr.pop();
console.log(myarr.includes(10)); // these type of question will always ans true or false;

const newarray = myarr.join(); // will convert a array into string and join them

console.log(myarr);
console.log(newarray);

// slice and splice
// slice -> will didn't effect the parent array and it didn't include the last index
// splice ->  will effect the parent array and also include the last element/index
console.log("A",myarr);

const myn1 = myarr.slice(1,3);

console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3);
console.log(myn2);

console.log("C ",myarr);