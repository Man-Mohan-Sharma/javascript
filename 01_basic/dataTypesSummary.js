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



// Memory are of two types 1.Stack(Primitive), Heap(Non-Primitive);

let myname = "Sharma ji"
let anothername = myname;
anothername = "Man Mohan Sharma"; // here string is primitive data type so there is copy of data in stack so no change in other 
console.log(myname);
console.log(anothername);

const userone = {
    email : "user@google.com",
    upi: "user@ybl"
}
const usertwo = userone;
usertwo.email = "Manmohan@gmail.com";  // objects are reference datatype so there is reference of userone and usertwo are same if change in one will change other
console.log(userone.email);
console.log(usertwo.email);