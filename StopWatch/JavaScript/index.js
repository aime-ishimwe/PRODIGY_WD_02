const counter = document.getElementById("counter");
const laps = document.getElementById("laps"); 
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lapStartTime = 0;
let lapCount = 0; 

// Helper function to format elapsed time
function formatTime(time) {
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let seconds = Math.floor((time / 1000) % 60);
    let milliseconds = Math.floor((time % 1000) / 10);

    // Add leading zero if single digit
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

// Start button function
function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        lapStartTime = startTime; 
        timer = setInterval(upDate, 10);
        isRunning = true;
    }
}

// Stop button function
function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

// Reset button function
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    lapStartTime = 0; 
    lapCount = 0; 
    isRunning = false;
    counter.textContent = "00:00:00:00";
    laps.innerHTML = ""; 
}

// Lap button function
function lap() {
    if (isRunning) {
        const lapElapsedTime = Date.now() - lapStartTime;
        const lapTime = formatTime(lapElapsedTime);
        lapCount++; // Increment lap count
        const lapElement = document.createElement("div");
        lapElement.textContent = `Lap ${lapCount}: ${lapTime}`;
        laps.appendChild(lapElement); 
        lapStartTime = Date.now(); 
    } else {
        console.log("Timer is not running"); 
    }
}

// Update display function
function upDate() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    counter.textContent = formatTime(elapsedTime);
}
