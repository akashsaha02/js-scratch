const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    // console.log(parent.children[i].innerHTML);
}
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("Nodes: ", parent.childNodes);
