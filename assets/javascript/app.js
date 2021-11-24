const display = document.getElementById('display')

function buttonClick(number) {
    if (display.innerHTML == "DISPLAY HERE") {
        display.innerHTML = number;
    } else {
        display.innerHTML += number;
    }
}

