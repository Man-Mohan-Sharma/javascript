// primitive data type 

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 10;
const scoreValue = 100.3;
const isloggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherid = Symbol("123");  // here symbol of id and anotherid are different
console.log(id == anotherid);

const Bigint = 1234567893211n

// Non-Primitive or Reference type

// Array, Objects, Functions

const names = ["Man Mohan", "Pawan", "Sakshi"];
let myobj={
    name: "Man Mohan",
    age: 19
}

const myfun = function(){
    console.log("Hello Man MOhan");
}

console.log(typeof Bigint);