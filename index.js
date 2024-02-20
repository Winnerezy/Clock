window.onload = function() {
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const amPM = document.getElementById("amPM");
    function setDate(){
        const today = new Date();
        const hours = today.getHours();
       const minutes = today.getMinutes();

       //linking the hour and minute to the js script
    hourEl.innerHTML = hours.toString().padStart(2, '0');

    //adding 0 to the beginning until it reaches 2 digits
    minuteEl.innerHTML = minutes.toString().padStart(2, '0');

    amPM.innerHTML = amPMfun(minutes);

    }
    setInterval(setDate, 1000);
}
 
function amPMfun(hour){
    return hour < 12? 'AM': 'PM';
}

