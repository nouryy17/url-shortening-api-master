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


// let newURL = document.getElementById("shorturl");
// let coptButton = document.getElementById("copy");

// coptButton.onclick = ()=>{
//     newURL.select();

//     window.navigator.clipboard.writeText(newURL.value);
// }

const shortenButten=document.querySelector(".from form button.shorten")
const inputEmail=document.querySelector(".form form input")
const boxShortEmail=document.querySelector(".from from .short_links")


shortenButten.addEventListener("click",function () {
if (inputEmail.value="") {
     console.log("inputEmail.value")
}
})