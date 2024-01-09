const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green"
div.style.borderRadius = "15px"
div.style.padding = "12px"
// div.innerText = "AKASH SAHA"
const addText = document.createTextNode("AKASH SAHA")
div.appendChild(addText)

document.body.appendChild(div)