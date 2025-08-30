// DAte 

let myDate = new Date();
console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString());


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


// let myCreatedDate = new Date("2025,0,23");
// let myCreatedDate = new Date("2025,0,23,5,3");
// let myCreatedDate = new Date("2025-01-23");
let myCreatedDate = new Date("01-23-2025");
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());