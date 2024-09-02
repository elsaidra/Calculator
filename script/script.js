// herr i will start with the 3 basic functions... 
function add (a, b) {return a + b };
function subtract (c, d) {return c - d};
function multiply (e, f) {return e * f};
function divide (g ,h) {return g / h};

function operate (n1, ope, n2) {
    if ( ope === '+' ) { return add(n1, n2)}
    else if ( ope === '-' ) {return subtract(n1, n2)}
    else if ( ope === '*' ) {return multiply(n1, n2)}
    else if ( ope === '/' ) {return divide(n1, n2)}
}
let display = document.querySelector('.display')
let userIn = document.querySelector('.user-input')
let result = document.querySelector('.result')
let numbersBu = document.querySelectorAll('.numbers')
let operator = document.querySelectorAll('.operator')
let clear = document.querySelectorAll('.clear')

let currentOperator = null;
let firstOperand = null;
let secondOperand = null;

//event listeners for the numbers
numbersBu.forEach(btn => {
    btn.addEventListener('click', (event) => {
    if (event.target.value === '.') {
        if (!userIn.textContent.includes('.')) {
            userIn.textContent += event.target.value; 
        }
        else return;
    }

    if (event.target.value !== '.')  userIn.textContent += event.target.value; 
    })
});

// clear 

clear.forEach(btn => {
    btn.addEventListener('click', (e) => {
        userIn.textContent = " ";
    })
})
