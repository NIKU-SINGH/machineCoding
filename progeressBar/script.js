var progressLabel = document.querySelector(".progressLabel");
var progressBar = document.querySelector(".progressBar");
var startButton = document.querySelector(".start");
console.log(progress.style.width);

function handleClick() {
    let value = 0;
    let interval = setInterval(() => {
        if (value === 100) {
            clearInterval(interval);
            return;
        }
        value += 10;
        progressBar.style.width = `${value}%`; 
        progressLabel.innerText = `${value}%`; 
        console.log("handle called", value);
    }, 1000);
}
