// setInterval(handler, time, args);
function printMessage(message) {
    console.log(message);
    
}
// setInterval(printMessage, 2000, "Interval test");

function addListItem() {
    const list = document.getElementById("list");
    list.innerHTML += "<li>Item</li>"
}

function startHandler(timeout) {
    const id = setInterval(addListItem, timeout);
    const stopBtn = document.getElementById("stopBtn");
    stopBtn.onclick = () => stopHandler(id);
}

function stopHandler(id) {
    clearInterval(id);
}

function resetList()
{
    const list = document.getElementById("list");
    list.innerHTML = ""
}

function showCurrentTime() {
    const clock = document.getElementById("clock");

    const nowDate = new Date();

    let h = nowDate.getHours();
    let m = nowDate.getMinutes();
    let s = nowDate.getSeconds();

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    clock.innerText = `${h}:${m}:${s}`;
}

setInterval(showCurrentTime, 1000);


function newYearTimer() {
    const nowDate = new Date();
    const newYear = new Date(2025, 0, 1);
    
    const totalSeconds = (newYear - nowDate) / 1000;
    const days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds % 86400 / 3600);
    let minutes = Math.floor(totalSeconds % 3600 / 60);
    let seconds = Math.ceil(totalSeconds % 60);

    const timer = document.getElementById("nyTimer");

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    timer.innerText = `${days} days, ${hours}:${minutes}:${seconds}`;
}

setInterval(newYearTimer, 1000);