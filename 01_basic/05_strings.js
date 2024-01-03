const name = "akash"
const repoCount = 50


// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Akash-game")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-7, 3)
console.log(anotherString)

const newStringOne="         akash sahaa         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://akash%20saha.fun/"
console.log(url.replace("%20","-"))

console.log(url.includes("fun"))

console.log(gameName.split("-"));

