const display = document.getElementById('display')

function buttonClick(number) {
    if (display.innerHTML == "0" && number != 0) {
        display.innerHTML = number;
    } else if (number == 0 && display.innerHTML == "0") {
        console.log("Cannot start with zero!")
    } else {
        display.innerHTML += number;
    }
}

function calculate() {
    document.getElementById("result").innerHTML = eval(display.innerHTML)
}