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
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const time = document.querySelector("#time");
const divide = document.querySelector("#divide");
const percent = document.querySelector("#percent");
const equals = document.querySelector("#equals");
const allClear = document.querySelector("#allClear");
const plusOrMinus = document.querySelector("#plusOrMinus");
const decimal = document.querySelector("#decimal");

//intialize calculator
display.textContent = "0"
let inputValue;
let displayValue = "0"
let storedValue;

//calculator functions


//inputting and deleting values
function createNewValue() {
    if(displayValue.length < 7){
        if(displayValue === "0") {
            displayValue = "";
        }
        else {
            displayValue += inputValue;
            display.textContent = displayValue;
        }
    }
    else {}
}
function clearCalulator() {
    storedValue = "0";
    displayValue = "0";
    display.textContent = displayValue;
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
plus.addEventListener("pointerdown", () => {
    createNewValue()});
minus.addEventListener("pointerdown", () => {
    createNewValue()});
time.addEventListener("pointerdown", () => {
    createNewValue()});
divide.addEventListener("pointerdown", () => {
    createNewValue()});
percent.addEventListener("pointerdown", () => {
    createNewValue()});
equals.addEventListener("pointerdown", () => {
    calculateAndUpdate()});
allClear.addEventListener("pointerdown", () => {
    clearCalulator();
});
plusOrMinus.addEventListener("pointerdown", () => {
    if(displayValue.includes("-")) {
        displayValue = displayValue.slice(1);
        display.textContent = displayValue;
    }
    else if(!displayValue.includes("-")) {
        displayValue = "-" + displayValue;
        display.textContent = displayValue;
    }
});
decimal.addEventListener("pointerdown", () => {
    if(!displayValue.includes(".")) {
        displayValue += ".";
        display.textContent = displayValue;
    }
    else if(displayValue.includes(".")) {}
});

