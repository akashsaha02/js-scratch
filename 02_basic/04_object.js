// const tinderUser=new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Akash"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "akash@tinder.com",
    fullname: {
        userFullname: {
            firstName: "Akash",
            lastName: "Saha"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName);
// console.log(regularUser.fullname.userFullname);
// console.log(regularUser.fullname);
// console.log(regularUser);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const users = [
    {
        id: 1,
        email: "akash@gmail.com"
    },
    {
        id: 1,
        email: "akash@gmail.com"
    },
    {
        id: 1,
        email: "akash@gmail.com"
    },
    {
        id: 1,
        email: "akash@gmail.com"
    },
    {
        id: 1,
        email: "akash@gmail.com"
    }
]


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

