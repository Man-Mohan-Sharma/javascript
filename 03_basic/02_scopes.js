// let a = 20
// const b = 30
// var c = 40  // here all are access from anywhere but when we declare
// these variable inside a {} then var can be access outside the {}

{
    let a = 20
   const b = 30
   var c = 40 
}
// console.log(a)  give error 
// console.log(b)  this also give error 
console.log(c) // now here c is a var that's why we can acces c and this is a problem

let a = 300 // global scope
if(true){
    let a = 10; // bound scope
    let b = 20;
    console.log("inner ",a);
}
console.log("outer ",a);


// nested scope