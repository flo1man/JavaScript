function solve(arr){
    let numbers = [...arr];
    let sortedNums = [];
    numbers.sort((a, b) => a - b);

    for (let i = 0; i < numbers.length / 2; i++) {
        sortedNums.push(numbers[i]);
        sortedNums.push(numbers[numbers.length - 1 - i]);
    }

    console.log(sortedNums);
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);