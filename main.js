let time;
let timeLeft;

const display = document.getElementById("display")
const message = document.getElementById("message")
const secInput= document.getElementById("secInput")

// start timer function

function startTimer(){
  clearInterval(time);
  
  timeLeft = secInput.value

  if(!timeLeft || timeLeft <= 0){
    message.textContent = "Please enter valid seconds!"
    return;
  }

  message.textContent = "";
  display.textContent = timeLeft;

  time = setInterval(() => {
    timeLeft--;
    display.textContent = timeLeft;
    if(timeLeft <= 0){
      clearInterval(time)
      message.textContent = "Time's up!!"
    }
  } , 1000)

}

// stop timer

function stopTimer(){
  clearInterval(time);
  display.textContent = "0"
  message.textContent = "Timer stopped!!"
}

document.getElementById("startBtn").addEventListener("click" , startTimer)
document.getElementById("stopBtn").addEventListener("click" , stopTimer)