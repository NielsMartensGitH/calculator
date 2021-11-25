const display = document.getElementById('display')

function buttonClick(number) {
    if (display.innerHTML == "0" && number != 0 && number != "." && number != "/" && number != "*" && number != "+") {
        display.innerHTML = number;
    } else if (number == 0 && display.innerHTML == "0") {
        console.log("Cannot start with zero!");
    } else if (number == "." && display.innerHTML == "0") {
        console.log("Cannot start with point!");
    } else if (number == "*" && display.innerHTML == "0") {
        console.log("Cannot start with *");
    } else if (number == "/" && display.innerHTML == "0") {
        console.log("Cannot start with /")
    } else if (number == "+" && display.innerHTML == "0") {
        console.log("Cannot start with +")
    } else if (display.innerHTML == "-" && number == "-") {
        console.log("Can't use - two times!")
    }
    else {
        display.innerHTML += number;
    }
}

function calculate() {
    document.getElementById("result").innerHTML = eval(display.innerHTML)
}


function reset() {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
}