const user = {
    userName: "Akash",
    price: 999,

    welcomMessage: function () {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }

}

// user.welcomMessage()
// user.userName = "Saha"
// user.welcomMessage()

// function chai(){
//     console.log(this);
// }
// chai()

// const chai=function(){
//     let userName="Akash"
//     console.log(this.userName);
// }
// chai()

// const chai = () => {
//     let userName = "Akash"
//     console.log(this);
// }
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(10, 20));

const addThree = (num1, num2, num3) => (num1 + num2 + num3)

const myArr = [2, 3, 4, 5, 6, 7, 8]
myArr.forEach()