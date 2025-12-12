// timer countdown

let timer;
let timeleft;

let display = document.getElementById("display")
let message = document.getElementById("message")
let secInput = document.getElementById("secInput")
let startBtn = document.getElementById("startBtn")
let stopBtn = document.getElementById("stopBtn")


startBtn.addEventListener("click", ()=>{

    timeleft = parseInt(secInput.value)

    if(!timeleft || timeleft <= 0){
       message.textContent = "pls enter valid number"
       return
    }

    message.textContent = ""

    display.textContent = timeleft


    clearInterval(timer)
    time = setInterval(() =>{
        timeleft--
        display.textContent = timeleft

        if(timeleft <=0){
            clearInterval(time)
            document.getElementById("message").textContent = "Time's Up"
        }
    }, 1000)
})


stopBtn.addEventListener("click", ()=>{
    clearInterval(time)
                document.getElementById("message").textContent = "Time Stopped"

})