// singleton -> when we declare using constructs then singleton
// when we declare using literals then non-singleton will formed


// object literals

const mySym = Symbol("key1");

const JsUser = {
        name: "Man Mohan",
        "full name": "Man Mohan Sharma",
        location: "KKR",
        [mySym]: "mykey1",
        email: "manmohan@gmail.com",
        isLoggedIn: false,
        lastLoginDays: ["Monday","Saturday"] 
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "manmohan@chatgpt";
// Object.freeze(JsUser);
JsUser.email = "manmohan@microsoft";
console.log(JsUser);

JsUser.greeting = function(){
        console.log("Hello user !!");
}
// console.log(JsUser.greeting())
JsUser.greeting();