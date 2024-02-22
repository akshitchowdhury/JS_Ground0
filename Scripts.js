

const colors = ["red", "green", "yellow"];

let index = 0;
const block = document.getElementsByClassName("container")[0]
document.addEventListener('click', ()=>{

block.style.backgroundColor = colors[index];

index = (index+1)% colors.length


})