const name = "Man Mohan Sharma";
const surname = " Vashista"

console.log(name + surname); // this is old type so we will not use this kind 

console.log(`Hello my name is ${name} and my surname is ${surname}`); // new type

const gameName = new String("Man Mohan") // new keyword is use to define objects;

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName)

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newstring = gameName.slice(-8,4); // here we can use -ve indexing also 
console.log(newstring);

const anotherString = gameName.substring(0,4); // here we can't use -ve indexing
console.log(anotherString);

const newStringone = "    Man Mohan   ";
console.log(newStringone);
console.log(newStringone.trim());  // to trim all the back space from both front and end;


// there are so much other function like spilt , replace 