const user = {
    username: "Akash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database: ");
        console.log(`Username: ${username}`);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// const promiseOne= new Promise()
// const date= new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function () {
        console.log(`Welcome ${this.username}`);
    }

    // return this;
}

const userOne = new User("akash", 12, true);
const userTwo = new User("saha", 11, false);

console.log(userOne.constructor);
// console.log(userTwo);