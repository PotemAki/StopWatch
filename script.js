const outputTime = document.querySelector(".output-time");
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".reset-button");
const flagButton = document.querySelector(".flag-button");
const flagoutput = document.querySelector(".flag-output");

startButton.addEventListener('click', () => {
startCounting();
})
stopButton.addEventListener('click', () => {
stopCounting();
})
resetButton.addEventListener('click', () => {
resetCounting();
})
flagButton.addEventListener('click', () => {
flagCounting();
})

let miliSeconds = 00;
let seconds = 0;
let minutes = 0;
let value = ``;
let clockId;
let index = 0;
let tempMessage;
render()

function startCounting() {
  clearInterval(clockId)
  clockId =setInterval(() => {
  miliSeconds += 1
  if (miliSeconds >= 100) {
    miliSeconds = 0;
    seconds += 1;
  } else if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
 render()
},10)
}
function stopCounting() {
  clearInterval(clockId)
}
function resetCounting() {
  clearInterval(clockId)
  miliSeconds = 0;
  seconds = 0;
  minutes = 0;
  render();
  flagoutput.innerHTML = '';
  index = 0;
}

function flagCounting() {
  
  if (index >= 10) {
    clearTimeout(tempMessage);
    document.querySelector(".temp-message").innerHTML = `This is maximum you can save!`;
    tempMessage = setTimeout(() => {
      document.querySelector(".temp-message").innerHTML = ``;
    }, 2000);
    return
  }
  index += 1;
  let HTML = `<p>${index}: ${value}</p>`
  flagoutput.innerHTML += HTML
}

function render() {
  let miliSeconds2 = miliSeconds.toString().padStart(2, '0')
  let seconds2 = seconds.toString().padStart(2, '0')
  let minutes2 = minutes.toString().padStart(2, '0')
  
  value = `${minutes2}:${seconds2}.${miliSeconds2}`
  outputTime.innerHTML = value
}
