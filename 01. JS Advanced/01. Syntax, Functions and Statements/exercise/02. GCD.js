function divisior(num1, num2){
    let number1 = Number(num1);
    let number2 = Number(num2);

    for (let i = 9;i >= 1;i--){
        if (number1 % i == 0 && number2 % i == 0){
            console.log(i);
            break;
        }
    }
}

divisior(15, 5);
divisior(2154, 458);
