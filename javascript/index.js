const chronometer = new Chronometer()
const splitRowTemplate = document.querySelector(".template")
const splitParent = document.querySelector("#splits")

let minutes
let seconds

// get the buttons:
const btnLeft = document.getElementById('btnLeft')
const btnRight = document.getElementById('btnRight')

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec')
let minUni = document.getElementById('minUni')
let secDec = document.getElementById('secDec')
let secUni = document.getElementById('secUni')
let milDec = document.getElementById('milDec')
let milUni = document.getElementById('milUni')
let splits = document.getElementById('splits')

function printTime() {
  minutes = chronometer.getMinutes()
  seconds = chronometer.getSeconds()
  
  //convert to 2-figure strings
  minutes = chronometer.twoDigitsNumber(minutes)
  seconds = chronometer.twoDigitsNumber(seconds)
  printMinutes()
  printSeconds()

}

function printMinutes() {
  minDec.innerText = minutes[0]
  minUni.innerText = minutes[1]
}

function printSeconds() {
  secDec.innerText = seconds[0]
  secUni.innerText = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const newSplit = splitRowTemplate.cloneNode()
  newSplit.className = ""
  newSplit.innerText = chronometer.splitClick()
  splitParent.appendChild(newSplit)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
  chronometer.currentTime = 0
  minDec.innerText = "0"
  minUni.innerText = "0"
  secDec.innerText = "0"
  secUni.innerText = "0"
  splitParent.innerHTML = ""
}

// Start/Stop Button

let isRunning = false

btnLeft.addEventListener('click', () => {
  if (isRunning === false) {
    btnLeft.className = 'btn stop'
    btnLeft.innerText = 'STOP'
    btnRight.className = 'btn split'
    btnRight.innerText = 'SPLIT'
    isRunning = true
    console.log("it's running")
    chronometer.startClick(printTime)
  } else {
    chronometer.stopClick()
    btnLeft.className = 'btn start'
    btnLeft.innerText = 'START'
    btnRight.className = 'btn reset'
    btnRight.innerText = 'RESET'
    isRunning = false
  }
})

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (isRunning == true) {
    printSplit()
  } else {
    setResetBtn()
  }
})
