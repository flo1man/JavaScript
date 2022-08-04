function solve(arr, num){
    let inputArr = [...arr];

    for (let i = 0; i < num; i++) {
        inputArr.unshift(inputArr.pop());
    }

    console.log(inputArr.join(' '));
}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15)