const calculator = document.querySelector("#calculator");
const divide = document.querySelector('[data-operator="÷"]');
const multiply = document.querySelector('[data-operator="x"]');
const add = document.querySelector('[data-operator="+"]');
const subtract = document.querySelector('[data-operator="-"]');
const equals = document.querySelector('[data-operator="="]');
const operators = calculator.querySelectorAll("[data-operator]");
let operatorChoice;

function removeOperatorSelection() {
    operators.forEach(e => {
        e.classList.remove("operatorSelected")
        console.log(e);
    })
}
operators.forEach(e => {
    e.addEventListener("pointerdown", function() {
        removeOperatorSelection();
        operatorChoice = this.innerText;
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
        else if(operatorChoice === "=") {
            
        }
    });
})