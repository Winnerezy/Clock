window.onload = function() {
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const amPM = document.getElementById("amPM");

    //getting all the necessary time values with methods
    function setDate(){
        const today = new Date();
        const hours = today.getHours();
       const minutes = today.getMinutes();

       //linking the hour and minute to the js script
    hourEl.innerHTML = hourTime(hours).toString().padStart(2, '0');

    //adding 0 to the beginning until it reaches 2 digits
    minuteEl.innerHTML = minutes.toString().padStart(2, '0');

    amPM.innerHTML = amPMfun(hours);

    }
    setInterval(setDate, 1000);
}

//adding AM or PM depending on the hour 
function amPMfun(hour){
    return hour < 12? 'AM': 'PM';
}


//changing the hour to 12-digit based when it pases 12PM
function hourTime(hour){
    return hour < 13? hour : hour - 12;
}
