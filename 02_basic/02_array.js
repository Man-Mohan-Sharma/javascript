const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc_heros);  // this method is use for concatination of two arrays;

const all_heros = [...marvel_heros,...dc_heros]; // this method can add multiple array and is known as spread;
console.log(all_heros);


const another_array = [1,2,3,[4,5,6],[7,[8,9,]]];
const newanother_array = another_array.flat(Infinity);
console.log(newanother_array);

console.log(Array.isArray("Man Mohan"));
console.log(Array.from("Man Mohan"));
console.log(Array.from({name:"hitesh"})); // interesting case here there is not given like array of key aur value

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
