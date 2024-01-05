// console.log("a");
// console.log("k");
// console.log("a");
// console.log("s");
// console.log("h");

function sayMyname() {
    console.log("a");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h");
}

// sayMyname()

function addTwoNum(num1, num2) {
    // console.log(num1 + num2);
    return num1 + num2;
}

const result = addTwoNum(5, 6)
// console.log(result);

function loginUserMessage(username = "saha") {
    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("akash"));

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 300, 400));
const user = {
    username: "akash",
    price: 199
}

function handleObject(anyObj) {
    console.log(`user name is ${anyObj.username} and price is ${anyObj.price}`);
}

handleObject(user);

const myNewArr = [200, 300, 400, 800, 500]
function returnSecondValue(getArr) {
    return getArr[3];
}
console.log(returnSecondValue(myNewArr));