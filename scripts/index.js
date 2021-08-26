//calculator components
const display = document.querySelector("#display");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const deleteButton = document.querySelector("#delete");

//set initial calculator display
display.textContent = "0";
let inputValue;
let newValue = "0"

//calculator functions
function setOperator() {
    newValue = "0"
    display.textContent = newValue;
}
//inputting and deleting values
function createNewValue() {
    if(newValue.length >= 6){
        alert("Max digits 6 " + newValue);
    }
    else {
        if(newValue === "0") {
            newValue = "";
            newValue += inputValue;
            display.textContent = newValue;
        }
        else {
            newValue += inputValue;
            display.textContent = newValue;
        }
    }
}
function deleteLastValue() {
    lastValue = newValue.length - 1;
    newValue = newValue.slice(0, lastValue);
    if(newValue.length === 0) {
        newValue = "0";
        display.textContent = newValue;
    }
    else {
    display.textContent = newValue;
    }
}

//calculator "button" press event listeners
zero.addEventListener("pointerdown", () => {
    inputValue = "0";
    createNewValue()});
one.addEventListener("pointerdown", () => {
    inputValue = "1";
    createNewValue()});
two.addEventListener("pointerdown", () => {
    inputValue = "2";
    createNewValue()});
three.addEventListener("pointerdown", () => {
    inputValue = "3";
    createNewValue()});
four.addEventListener("pointerdown", () => {
    inputValue = "4";
    createNewValue()});
five.addEventListener("pointerdown", () => {
    inputValue = "5";
    createNewValue()});
six.addEventListener("pointerdown", () => {
    inputValue = "6";
    createNewValue()});
seven.addEventListener("pointerdown", () => {
    inputValue = "7";
    createNewValue()});
eight.addEventListener("pointerdown", () => {
    inputValue = "8";
    createNewValue()});
nine.addEventListener("pointerdown", () => {
    inputValue = "9";
    createNewValue()});
deleteButton.addEventListener("pointerdown", () => {
    deleteLastValue()});

