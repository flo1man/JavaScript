function operation(num1, num2, operator){
    if (operator == '+'){
        console.log(num1 + num2);
    }
    else if (operator == '-'){
        console.log(num1 - num2);
    }
    else if (operator == '*'){
        console.log(num1 * num2);
    }
    else if (operator == '/'){
        console.log(num1 / num2);
    }
    else if (operator == '%'){
        console.log(num1 % num2);
    }
    else{
        console.log(num1 ** num2);
    }
}

operation(5, 6, '+');
operation(3, 5.5, '**');