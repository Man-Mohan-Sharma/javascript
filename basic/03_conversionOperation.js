let score = "33a";

console.log(typeof(score));
console.log(typeof score);

var valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33ab" => NaN
// true => 1 ; false => 0
// 1 => true; 0 => false
// "string" => true; ""=> false

// *****************Operations*********

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " Man MOhan Sharma";
let str3 = str1+str2;
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2); // if string is first the all are treated as string
console.log(1+2+"2"); // if string is last then first number are caluculated the string 


console.log(+true); // will print 1
console.log(+ "");   // will print 0

let num1, num2, num3;
num1 = num2 = num3 = 2+3;
