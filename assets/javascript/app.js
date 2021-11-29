const display = document.getElementById('display');
const result = document.getElementById('result');


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
    } else if (display.innerHTML.includes("=")) {
        display.innerHTML = result.innerHTML + number; 
    } else if (display.innerHTML.endsWith("++") || display.innerHTML.endsWith("--") || display.innerHTML.endsWith("**") || display.innerHTML.endsWith("//") ) {
        console.log("Cannot use double signs!");
        display.innerHTML = display.innerHTML.slice(0, -1);
        display.innerHTML += number;
    } else {
        display.innerHTML += number;
    }
}

function calculate() {
    try {
        result.innerHTML = eval(display.innerHTML)
        display.innerHTML += "="
    }
    catch(error) {
        result.innerHTML = "Invalid input!";
    }
    
}


function reset() {
    document.getElementById("display").innerHTML = "0";
    document.getElementById("result").innerHTML = "";
}


window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "97") {
        buttonClick(1);
    } else if (evt.keyCode == "96") {
        buttonClick(0);
    } else if (evt.keyCode == "98") {
        buttonClick(2)
    } else if (evt.keyCode == "99") {
        buttonClick(3)
    } else if (evt.keyCode == "100") {
        buttonClick(4)
    } else if (evt.keyCode == "101") {
        buttonClick(5)
    } else if (evt.keyCode == "102") {
        buttonClick(6)
    } else if (evt.keyCode == "103") {
        buttonClick(7)
    } else if (evt.keyCode == "104") {
        buttonClick(8)
    } else if (evt.keyCode == "105") {
        buttonClick(9)
    } else if (evt.keyCode == "107") {
        buttonClick("+")
    } else if (evt.keyCode == "109") {
        buttonClick("-")
    } else if (evt.keyCode == "106") {
        buttonClick("*")
    } else if (evt.keyCode == "111") {
        buttonClick("/")
    } else if (evt.keyCode == "110") {
        buttonClick(".")
    } else if (evt.keyCode == "13") {
        calculate()
    } else if (evt.keyCode == "46") {
        reset();
    } else if (evt.keyCode == "8" && display.innerHTML.length == 1) {
        console.log("input already cleared!")
        display.innerHTML = "0";
    } else if(evt.keyCode == "8" && display.innerHTML != "0") {
        display.innerHTML = display.innerHTML.slice(0, -1);
    } 
    else {   
        console.log("invalid key pressed!")
    }
}


