function add(num1, num2){
    return num1 + num2;
}

let sum = add(8, 9);
console.log(sum);

function subtract(num1, num2){
    return num1 - num2;
}

let sub = subtract(8, 6);
console.log(sub);


function multiply(num1, num2){
    return num1 * num2;
}

let mult = multiply(6, 6);
console.log(mult);


function divide(num1, num2){
    return num1 / num2;
}

let divid = divide(8, 6);
console.log(divid);

function operate(operator, num1, num2){
    if(operator == '+'){
        return add(num1, num2);
    }
    else if(operator == '-'){
        return subtract(num1, num2);
    }
    else if(operator == '*'){
        return multiply(num1, num2);
    }
    else if(operator == '/'){
        return divide(num1, num2);
    }
    else 
        return operator;
}

let testingOperator = operate('*', 25, 5);
console.log(testingOperator);