const calculator = document.querySelector("#calculator");
const divide = document.querySelector('[data-operator="÷"]');
const multiply = document.querySelector('[data-operator="x"]');
const add = document.querySelector('[data-operator="+"]');
const subtract = document.querySelector('[data-operator="-"]');
const equals = document.querySelector('[data-operator="="]');
const operators = calculator.querySelectorAll("[data-operator]");
const digits = calculator.querySelectorAll("[data-digit]");
const functions = calculator.querySelectorAll("[data-function]");
const operation = document.querySelector("#operation");
const lastValue = document.querySelector("#lastValue");
const currentValue = document.querySelector("#currentValue");
let operatorChoice;
lastValue.textContent = ""
currentValue.textContent = "0"
let digitCount;
//digits
function checkIfOperatorIsNotSelected() {
    if(!divide.classList.contains("operatorSelected") &&
    !multiply.classList.contains("operatorSelected") &&
    !add.classList.contains("operatorSelected") &&
    !subtract.classList.contains("operatorSelected")) {
        return true
    }
    else {
        return false
    }
}

//creating a new value
digits.forEach(e => {
    e.addEventListener("pointerdown", function() {
        console.log(e.textContent);
        if(operation.textContent === "") {
            lastValue.textContent = "";
        }
        removeOperatorSelection();
        digitCount = currentValue.textContent.length;
        if(currentValue.textContent.includes("-")) {
            --digitCount;
        }
        if(currentValue.textContent.includes(".")) {
            --digitCount;
        }
        if(digitCount <= 7) {
            if(currentValue.textContent === "0" && e.textContent != ".") {
                currentValue.textContent = "";
                currentValue.textContent += e.textContent;
            }
            else if(currentValue.textContent === "-0" && e.textContent === "0") {}
            else if(currentValue.textContent === "-0" && e.textContent === ".") {
            currentValue.textContent += e.textContent;
            }
            else if(currentValue.textContent ==="-0" && e.textContent != "0") {
                currentValue.textContent = "-";
                currentValue.textContent += e.textContent;
            }
            else if(e.textContent === "." && currentValue.textContent.includes(".")){}
            else {
            currentValue.textContent += e.textContent;
            }
       }
       else {}
    }) 
})
//calculate
function calculate() {
    if(lastValue.textContent === "" && operatorChoice === "%") {
        if(operatorChoice === "%" && parseFloat(currentValue.textContent) != 0 || parseFloat(currentValue.textContent) != -0) {
            removeOperatorSelection();
            operation.textContent = ""; 
            lastValue.textContent = parseFloat(currentValue.textContent) / 10;
        }
    }
    else if(lastValue.textContent != "" && operation.textContent != "" && operatorChoice === "%" && parseFloat(currentValue.textContent) != 0) {
        removeOperatorSelection();
        operation.textContent = "";
        lastValue.textContent = parseFloat(currentValue.textContent) / 10;
    }
    else if(lastValue.textContent != "" && operation.textContent != "" && operatorChoice === "%" && parseFloat(currentValue.textContent) === 0) {
        removeOperatorSelection();
        operation.textContent = "";
        lastValue.textContent = parseFloat(lastValue.textContent) / 10;
    }
    else if(lastValue.textContent != "" && operation.textContent === "" && operatorChoice != "%") {

    }
    else {
        if(operatorChoice === "÷"){
            lastValue.textContent = parseFloat(lastValue.textContent) / parseFloat(currentValue.textContent);
        }
        else if(operatorChoice === "x"){
            lastValue.textContent = parseFloat(lastValue.textContent) * parseFloat(currentValue.textContent);
        }
        else if(operatorChoice === "-"){
            lastValue.textContent = parseFloat(lastValue.textContent) - parseFloat(currentValue.textContent);
        }
        else if(operatorChoice === "+"){
            lastValue.textContent = parseFloat(lastValue.textContent) + parseFloat(currentValue.textContent);
        }    
        else if(operatorChoice === "%") {
            removeOperatorSelection();
            operatorChoice = "";
            if(parseFloat(currentValue.textContent) != 0 && checkIfOperatorIsNotSelected() === true) {
                lastValue.textContent = parseFloat(currentValue.textContent) / 10;
            }
            else {
                operation.textContent = "";
                lastValue.textContent = parseFloat(lastValue.textContent) / 10;
            }
        }
        else if(operatorChoice === "=") {
            if(operation.textContent === "") {
                lastValue.textContent = currentValue.textContent;
            }
            else {
            operation.textContent = ""
            }
        }
        else {
            operation.textContent = this.innerText;
        }
    }
}   

//saving values
function saveValue() {
    lastValue.textContent = parseFloat(currentValue.textContent);
    currentValue.textContent =  "0";
}
//operators
function removeOperatorSelection() {
    operators.forEach(e => {
        e.classList.remove("operatorSelected");
    })
}
operators.forEach(e => {
    e.addEventListener("pointerdown", function() {
        if(!checkIfOperatorIsNotSelected()) {
        }
        else if(!checkIfOperatorIsNotSelected() && operatorChoice != "=" && lastValue.textContent != "") {
            
        }
        else if(checkIfOperatorIsNotSelected && lastValue.textContent != "" && operation.textContent === "" && parseFloat(currentValue.textContent) != 0) {
            lastValue.textContent = parseFloat(currentValue.textContent);
            currentValue.textContent = "0";
        }
        else {
            if(lastValue.textContent === "") {
                saveValue();
            }
            else {
                calculate();
                if(currentValue.textContent.includes("-")){
                    currentValue.textContent =  "0";
                }
                else {
                    currentValue.textContent =  "0";
                }
            }
        }
        removeOperatorSelection();
        operation.textContent = this.innerText;
        operatorChoice = this.innerText;
        if(operatorChoice === "=") {
            if(operation.textContent === "") {
                lastValue.textContent = currentValue.textContent;
            }
            else {
            operation.textContent = ""
            }
        }
        else {
            operation.textContent = this.innerText;
        }
        //operation functions
        if(operatorChoice === "÷") {
            divide.classList.add("operatorSelected");
        }
        else if(operatorChoice === "x") {
            multiply.classList.add("operatorSelected");
        }
        else if(operatorChoice === "-") {
            subtract.classList.add("operatorSelected");
        }
        else if(operatorChoice === "+") {
            add.classList.add("operatorSelected");
        }
        
    });
})

//functions
functions.forEach(e => {
    e.addEventListener("pointerdown", function() {
        if(e.innerText === "AC") {
            removeOperatorSelection();
            lastValue.textContent = "";
            currentValue.textContent = "0";
            operation.textContent = "";
        }
        else if(e.innerText === "±") {
            removeOperatorSelection();
            if(currentValue.textContent.includes("-")) {
                currentValue.textContent = currentValue.textContent.slice(1);
            }
            else {
                currentValue.textContent = "-" + currentValue.textContent;
            }
        }
        else if(e.innerText === "%"){
            operatorChoice = "%";
            calculate();
            currentValue.textContent = "0"
        }
    })
})