//Dates

let myDate=new Date();
console.log(myDate.toISOString())
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())

console.log(typeof(myDate));

let myCreatedate= new Date(2025,5,26)
console.log(myCreatedate.toDateString());


console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getDay());

myDate.toLocaleDateString('default',{
    weekday:"long"
})
