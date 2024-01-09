const clock = document.getElementById("clock")

let date = new Date();

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)