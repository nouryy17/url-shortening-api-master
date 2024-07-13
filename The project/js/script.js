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
const boxShortEmail=document.querySelector(".from  .short_links")
console.log(boxShortEmail)

shortenButten.addEventListener("click",function (ele) {
    ele.preventDefault()
    boxShortEmail.innerHTML=""
if (inputEmail.value==="") {
    inputEmail.style.outline="2px solid red"
}
if (inputEmail.value!=="") {
    createDivShortEmial(inputEmail.value)
    inputEmail.value=""

}
})
function createDivShortEmial(email) {
    console.log("ddddddddddddddddddddddd")
    inputEmail.style.outline="none"
    let div=document.createElement("div")
    let p=document.createElement("p")
    let p2=document.createElement("p")
    let span=document.createElement("span")
    boxShortEmail.appendChild(div)
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(span)
    p2.classList.add("tow")
    shortenURL(inputEmail.value,p2)
    p.innerHTML=email
    span.innerHTML="Copy" 

}

async function shortenURL(longUrl,p2) {
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
  
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }
  
    const shortUrl = await response.text();
    p2.innerHTML=shortUrl
  }
  

