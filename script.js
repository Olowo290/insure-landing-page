let navBar =document.getElementById("nav-bar");
let hamburger = document.getElementById("hamburger")
function slideIn(){
    hamburger.classList.toggle("active")
    
}

hamburger.addEventListener("click", slideIn)