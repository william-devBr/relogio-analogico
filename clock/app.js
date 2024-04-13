const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function setDate(){

    let now = new Date()

    let getSecond = now.getSeconds();
    let getMinute = now.getMinutes();
    let getHour = now.getHours();

    let seconDegree = (getSecond / 60) * 360;
    let minuteDegree = (getMinute / 60) * 360;
    let hourDegree = (getHour / 12) * 360;

    second.style.transform = `rotate(${seconDegree}deg)`;
    minute.style.transform = `rotate(${minuteDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);