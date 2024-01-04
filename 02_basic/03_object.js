//singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "akash",
    age: 18,
    "full name": "Akash Saha",
    [mySym]: "key1",
    location: "bhubaneswar",
    isLoggedIn: "false",
    email: "akash@google.com",
    lastLoginDays: ["Monday", "Saturday"]
    ,
    greeting: function () {
        console.log("Hello JS user");
    },
    greetingTwo: function () {
        console.log(`Hello JS user, ${this.name}`);
    }
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "akash@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "akash@microsoft.com"
// console.log(JsUser);

// console.log(JsUser.greeting);
// console.log(JsUser.greetingTwo);
JsUser.greeting()
JsUser.greetingTwo()
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());