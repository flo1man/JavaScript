function lastNumSequence(firstNum, secondNum){
    let numbers = [1];

    for (let i = 1; i < firstNum; i++) {
        let sum = 0;
        for (let j = 0; j < secondNum; j++) {
            let index = (i - secondNum) + j;
            if (index < 0){
                continue;
            }
            sum += numbers[index];
        }
        numbers[numbers.length] = sum;
    }

    console.log(numbers.join);
}

lastNumSequence(8, 2);