const tinderUser = new Object() // singleton object
// const tinderUser = {} // non- singleton object

console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Man mohan ";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        firstname: "Man Mohan",
        lastname: "Sharma"
    }
}
console.log(regularUser.fullname.firstname);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};
// assign operator
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3)

// spread method
const obj3 = {...obj1,...obj2};
console.log(obj3)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));