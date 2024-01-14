// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.akash = function () {
    console.log(`Akash is present in all objects`);
}

Array.prototype.heyAkash = function () {
    console.log(`Akash says hello`);
}

// heroPower.akash()
// myHeros.akash()
// myHeros.heyAkash()
// heroPower.heyAkash()

// inheritance

const User = {
    name: "saha",
    email: "saha@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "AkashSaha     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"AkashSAHAboss     ".trueLength()
"iceTea     ".trueLength()