const user = {
    username: "Man mohan",
    princ : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}

user.welcomeMessage();
user.username = "sam"
user.welcomeMessage();

console.log(this) // there is no current context that's why this is empty

// function chai(){
//     // let username = "hitesh";
//     // console.log(this.username);
//     console.log(this)
// }
// chai();

const chai = () => {
    let username = "hitesh";
    console.log(this.username);
}

// chai();

// const addTwo = (num1,num2) => {
//    return num1+num2;
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1, num2) => (num1+num2);

// console.log(addTwo(5,6));

const addTwo = (num1,num2) => ({username : "hitesh"})
