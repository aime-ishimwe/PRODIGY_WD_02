const counter = document.getElementById("counter");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

//function for the start button
function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(upDate, 10);
        isRunning = true;
    }
}

//function for the stop button
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

//function for the reset button
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    counter.textContent = "00:00:00:00";
}


function upDate(){
    //display the hours, minutes, seconds and milliseconds on the timer
    const CurrentTime = Date.now();
    elapsedTime = CurrentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 *60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60 );
    let millisecods = Math.floor(elapsedTime % 1000 / 10 );

    // display a "0" infront of single digit numbers on the clock
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    millisecods = String(millisecods).padStart(2, "0");

    counter.textContent =`${hours}:${minutes}:${seconds}:${millisecods}`;
}