const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    let ampm = "am";

    if (hours > 12) {
        hours = hours - 12;
        hours = String(hours).padStart(2, "0");
        ampm = "pm";
    }
    if (ampm === "pm") {    
        clock.innerText = `오후 ${hours}시 ${minutes}분`;
    } else {
        clock.innerText = `오전 ${hours}시 ${minutes}분`;

    }
}
getClock() // 코드 실행하자마자 시간 바로 나오도록 한번 호출해줌
setInterval(getClock, 1000); // 이후론 요걸로 1초마다 노출 
