let start = document.getElementById("start")
let intro = document.querySelector(".intro")
let main = document.querySelector(".main")

start.addEventListener("click", ()=>{
    intro.classList.add("fadeOut")
    main.classList.remove("fadeOut")
})