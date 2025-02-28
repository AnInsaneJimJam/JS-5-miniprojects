let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = minutes < 10 && seconds < 10 ? `0${minutes}:0${seconds}` : minutes < 10 ? `0${minutes}:${seconds}` : seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    // pading can also be done using String(value).padstart(2,"0")
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 1000) // call function after every 1 sec
}
function stopClock() {
    clearInterval(interval)
}
function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}