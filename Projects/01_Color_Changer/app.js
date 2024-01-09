// const grey = document.getElementById("grey")
// const white = document.getElementById("white")
// const blue = document.getElementById("blue")
// const yellow = document.getElementById("yellow")

// grey.addEventListener("click",()=>{
//         document.querySelector('body').style.backgroundColor="grey"
// })

// white.addEventListener("click",()=>{
//     document.querySelector('body').style.backgroundColor="white"
// })

// yellow.addEventListener("click",()=>{
//     document.querySelector('body').style.backgroundColor="yellow"
// })

// blue.addEventListener("click",()=>{
//     document.querySelector('body').style.backgroundColor="blue"
// })


const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.id === "grey")
            body.style.backgroundColor = e.target.id
        if (e.target.id === "yellow")
            body.style.backgroundColor = e.target.id
        if (e.target.id === "blue")
            body.style.backgroundColor = e.target.id
        if (e.target.id === "white")
            body.style.backgroundColor = e.target.id
    })
})