// let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName = "akash"
    function two() {
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const userName = "akash"
    if (userName == "akash") {
        const website = "youtube"
        // console.log(userName + website)
    }
    // console.log(website);
}

// console.log(userName);

//--------------- INTERESTING ------------//

console.log(addOne(5));
function addOne(num) {
    return num + 1;
}
addOne(5)


// addTwo(7)
const addTwo = function (num) {
    return num + 2;
}

addTwo(7)
console.log(addTwo(5));
