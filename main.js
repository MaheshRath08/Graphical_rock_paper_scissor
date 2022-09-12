let start = document.getElementById("start")
let intro = document.querySelector(".intro")
let main = document.querySelector(".main")

let player = document.getElementById("pChoice")
let comp = document.getElementById("cChoice")
let btn = document.querySelectorAll(".choice")

let messageEl = document.getElementById("message")
let message = "WELCOME"

let pScoreEl = document.getElementById("pScore")
let cScoreEl = document.getElementById("cScore")

let pScore = 0
let cScore = 0
let list = ["rock", "paper", "scissor"]

start.addEventListener("click", ()=>{
    intro.classList.add("fadeOut")
    main.classList.remove("fadeOut")
})

btn.forEach(e=>{
    e.addEventListener("click", ()=>{
        let cGuess = compGuess()
        game(e.textContent, cGuess)

        comp.innerHTML = `<img src="/assets/${cGuess}.png">`
        player.innerHTML = `<img src="/assets/${e.textContent}.png">`
        
    })
})

function compGuess(){
    return list[Math.floor(Math.random() * 3)]
}

function game(p,c){
    if(p===c){
        message= "Tie"
    }
    if(p==="rock"){
        if(c==="scissor"){
            message = "You win"
            pScore++
        }else if(c==="paper"){
            message = "You Lost"
            cScore++
        }
    }
    if(p==="paper"){
        if(c==="rock"){
            message = "You win"
            pScore++
        }else if(c==="scissor"){
            message = "You Lost"
            cScore++
        }
    }
    if(p==="scissor"){
        if(c==="paper"){
            message = "You win"
            pScore++
        }else if(c==="rock"){
            message = "You Lost"
            cScore++
        }
    }
    messageEl.textContent = message
    pScoreEl.textContent = pScore
    cScoreEl.textContent = cScore
}