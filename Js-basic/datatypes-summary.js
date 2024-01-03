/* 
Primitive data type: Call by value

7 types : String, Number, Boolean, null, undefined, Symbol(Unique value), BigInt(Scientific values)

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(anotherId);
console.log(id);

const bigNumber = 123456789876543n
console.log(typeof bigNumber);



/*
Reference (non-primitive) data type:

Array, Objects, Functions
*/

const heros = ["Thor", "Iron Man", "Wanda"]

let myObj = {
    name: "akash",
    age: 22
}

const myFunc = function () {
    console.log("Hello");
}
console.log(myFunc());