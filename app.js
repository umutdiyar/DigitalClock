const hourW = document.getElementById("hour");
const minutesW = document.getElementById("minutes");
const secondsW = document.getElementById("seconds");
const ampmW = document.getElementById("ampm");

function time() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h >= 24 ? "PM" : "AM";
    if(h > 24){
        h = h % 24
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    

    hourW.innerText = h;
    minutesW.innerText = m;
    secondsW.innerText = s;
    ampmW.innerText = ampm;
    setTimeout(() => {
        time();
    }, 1000)
}
time();