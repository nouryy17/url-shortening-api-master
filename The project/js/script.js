let div =document.querySelector("nav div")
let svg =document.querySelectorAll("nav .svg svg")
function toggleActivClass(clickEle) {
    let svgActiv=document.querySelectorAll("nav .svg svg.activ")
    svgActiv.forEach((ele) =>{
        ele.classList.remove("activ")
        div.classList.toggle("activ")
    })
    clickEle.classList.add("activ")



}

const shortenButten=document.querySelector(".from form button.shorten")
const inputEmail=document.getElementById("longurl")
const boxShortEmail=document.querySelector(".from from .short_links")


shortenButten.addEventListener("click",function (ele) {
    ele.preventDefault()
if (inputEmail.value==="") {
console.log(inputEmail)
    inputEmail.style.outline="2px solid red"
}
if (inputEmail.value!=="") {
    console.log("ddddddddddddddddddddddd")
    createDivShortEmial(inputEmail.value)
}
})
function createDivShortEmial(email) {
    email.style.outline="none"
    let div=document.createElement("div")
    let p=document.createElement("p")
    let p2=document.createElement("p")
    let span=document.createElement("span")
    boxShortEmail.appendChild(div)
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(span)
    p2.classList.add("tow")
    p.textContent(email)
    p2.textContent(email)
    span.textContent("Copy")  
}