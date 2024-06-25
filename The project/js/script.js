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


let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}






