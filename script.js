//Basic Operations for the Calculator

function add (number1, number2) {
    result = number1 + number2;
    return result
}

function substract (number1, number2) {
    result = number1 - number2;
}

function multiply (number1, number2) {
    result = number1 * number2;
}

function divide (number1, number2) {
    result = number1/number2;
}

function operate (number1, number2, operator) {
    if (operator == '+')  {add(number1, number2)
    return result}
    else if (operator == '-') {substract(number1, number2)
    return result}
    else if (operator == '*') {multiply(number1, number2)
    return result}
    else if (operator == '/') {divide(number1, number2)
    return result}
}

function operand (x) {
    number1 = Number(screenContent.innerHTML)
    operator = x
    screenContent.innerHTML = ''
}


//Functionality related to the buttons of the calculator
let button0 = document.querySelector('#button0');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');
let button6 = document.querySelector('#button6');
let button7 = document.querySelector('#button7');
let button8 = document.querySelector('#button8');
let button9 = document.querySelector('#button9');
let buttondot = document.querySelector('#DOT');
let clearButton = document.querySelector('#CLEAR');
let deleteButton = document.querySelector('#DELETE');
let plusButton = document.querySelector('#PLUS');
let minusButton = document.querySelector('#MINUS');
let divideButton = document.querySelector('#DIVIDE');
let timesButton = document.querySelector('#TIMES');
let equalsButton = document.querySelector('#EQUALS');
let screenContent = document.querySelector('#content');
screenContent.innerHTML= '';


button1.addEventListener('click', function(){
    let value = '1';
    screenContent.append(value);
})

button2.addEventListener('click', function(){
    let value = '2';
    screenContent.append(value);
})

button3.addEventListener('click', function(){
    let value = '3';
    screenContent.append(value);
})

button4.addEventListener('click', function(){
    let value = '4';
    screenContent.append(value);
})

button5.addEventListener('click', function(){
    let value = '5';
    screenContent.append(value);
})

button6.addEventListener('click', function(){
    let value = '6';
    screenContent.append(value);
})

button7.addEventListener('click', function(){
    let value = '7'
    screenContent.append(value)
})

button8.addEventListener('click', function(){
    let value = '8'
    screenContent.append(value)
})

button9.addEventListener('click', function(){
    let value = '9'
    screenContent.append(value)
})

button0.addEventListener('click', function(){
    let value = '0'
    screenContent.append(value)
})

buttondot.addEventListener('click', function(){
    let value = '.'
    if (screenContent.innerHTML.includes(value)) {
        return
    }
    else {screenContent.append(value)}
    
})

plusButton.addEventListener('click', function(){
    if (operator!== ''){
        number2 = Number(screenContent.innerHTML)
        result = operate(number1, number2, operator);
        screenContent.innerHTML = ''
        screenContent.append(result);
        result = number1
        operator = ''
    }
    else {operand('+')}
})

minusButton.addEventListener('click', function(){
    if (operator!== ''){
        number2 = Number(screenContent.innerHTML)
        result = operate(number1, number2, operator);
        screenContent.innerHTML = number1
        screenContent.innerHTML = ''
        screenContent.append(result);
        operator = ''
    }
    else {operand('-')}
})

timesButton.addEventListener('click', function(){
if (operator!== ''){
    number2 = Number(screenContent.innerHTML)
    result = operate(number1, number2, operator);
    screenContent.innerHTML = number1
    screenContent.innerHTML = ''
    screenContent.append(result);
    operator = ''
    }
    else {operand('*')}
})

divideButton.addEventListener('click', function(){
    if (operator!== ''){
        number2 = Number(screenContent.innerHTML)
        result = operate(number1, number2, operator);
        screenContent.innerHTML = number1
        screenContent.innerHTML = ''
        screenContent.append(result);
        operator = ''
        }
        else {operand ('/')}
})

equalsButton.addEventListener('click', function(){
    number2 = Number(screenContent.innerHTML);
    result = operate(number1, number2, operator)
    console.log(result)
    screenContent.innerHTML = ''
    screenContent.append(result)

})

clearButton.addEventListener('click', function(){
    screenContent.innerHTML = ''
    operator = ''
    number1 = 1;
    number2 = 1;
})


deleteButton.addEventListener('click', function(){
 newstring = screenContent.innerHTML.slice(0,-1)
 screenContent.innerHTML = ''
 screenContent.append(newstring)
})


//Values innate to the functionality of the calculator


let number1 = 1
let number2 = 1
let operator = ''