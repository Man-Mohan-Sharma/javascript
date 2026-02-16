// here we are learning function


function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("!");
}

sayMyName();

function AddTwoNumber(number1, number2){
    return(number1 + number2);
}

// AddTwoNumber(3,4);
// AddTwoNumber(3,'4');
// AddTwoNumber(3,null)
const sum = AddTwoNumber(3,5);
console.log(sum);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("Man Mohan"));

function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Man mohan",
    price : 199
};

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);
handleObject({
    username: "Vashista",
    price : 399
})

const myNewArray = [200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(`second value of array is ${returnSecondValue(myNewArray)}`)