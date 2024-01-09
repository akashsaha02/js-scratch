function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python")
addLanguage("TypeScript")

function addOptiLang(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}

addOptiLang("golang")
addOptiLang("kotlin")
addOptiLang("Java")

// Edit
const secondChange = document.querySelector("li:nth-child(2)")
const newLi = document.createElement("li");
newLi.textContent = "C#";
secondChange.replaceWith(newLi);

// Edit
const firstChange = document.querySelector("li:first-child")
// const newLi2 = document.createElement("li")
// newLi2.textContent = "TS"
// firstChange.replaceWith(newLi2); 
firstChange.outerHTML='<li>TS</li>'

// Remove
const lastLang=document.querySelector('li:last-child')
lastLang.remove();