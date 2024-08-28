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