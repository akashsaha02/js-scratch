const marvel_heros = ["thor", "iron man", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heroes=[...marvel_heros,...dc_heros]
// console.log(all_new_heroes)

const another_array=[1,2,3,[4,5,6],[6,7,[8,9,2,45,6]]]

const usable_arr=another_array.flat(Infinity)

// console.log(usable_arr);

console.log(Array.isArray("AKASH"))
console.log(Array.from("AKASH"))
console.log(Array.from({name:"Akash"})) //Interesting case

let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3,score4))


