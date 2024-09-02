function add (a, b) {return a + b };
function subtract (c, d) {return c - d};
function multiply (e, f) {return e * f};
function divide (g ,h) {return g / h};
function modulus (i,j) {return i % j};

function operate (n1, ope, n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    if ( ope === '+' ) { return add(n1, n2)}
    else if ( ope === '-' ) {return subtract(n1, n2)}
    else if ( ope === '*' ) {return multiply(n1, n2)}
    else if ( ope === '/' ) {return divide(n1, n2)}
    else if ( ope === '%' ) {return modulus(n1, n2)}
}

let display = document.querySelector('.display')
let userIn = document.querySelector('.user-input')
let result = document.querySelector('.result')
let numbersBu = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operator')
let clear = document.querySelectorAll('.clear')
let equal = document.querySelector('.equal')


//initializing operators 
let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
let isClicked = false

//event listeners for the numbers
numbersBu.forEach(btn => {
    btn.addEventListener('click', (event) => {
    if (event.target.value === '.') {
        if (!userIn.textContent.includes('.')) {
            userIn.textContent += event.target.value; 
        }
        else return;
    }

    if (event.target.value !== '.')  {
        userIn.textContent += event.target.value; 
    }})
});

//clear
clear.forEach(btn => {
    btn.addEventListener('click', (e) => {
        userIn.textContent = " ";
        currentOperator = null;
        firstOperand = null;
        secondOperand = null;
        result.textContent = '';
        isClicked = false
    })
})


//operators
operators.forEach(op => {
    op.addEventListener('click', (e) => {
        if (firstOperand === null && isClicked === false) {
            firstOperand = userIn.textContent;
            currentOperator = e.target.value;
            userIn.textContent = ''
        } 
        else if (firstOperand !== null && isClicked === false) {
            secondOperand = userIn.textContent    
        } 
        else if (firstOperand !== null && isClicked === true) {
            userIn.textContent = ''
            secondOperand =  userIn.textContent 
            isClicked = false
            currentOperator = e.target.value;
        }

    })
})

equal.addEventListener('click', () => {
    if(firstOperand !== null && currentOperator !== null) {
        secondOperand = userIn.textContent
        const resultValue = operate(firstOperand, currentOperator, secondOperand);
        userIn.textContent = resultValue
        firstOperand = resultValue
        isClicked = true
        currentOperator = null
         
    }
})
