function updateClock(){
    const currentDate = new Date();
    const hours = currentDate.toLocaleString("default", {hour: "2-digit", hour12:false, hourCycle: "h23"});
    const minutes = currentDate.toLocaleString("default", {minute: "2-digit"});
    const seconds = currentDate.toLocaleString("default", {second: "2-digit"});
    let clock = document.querySelector(".clock");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);