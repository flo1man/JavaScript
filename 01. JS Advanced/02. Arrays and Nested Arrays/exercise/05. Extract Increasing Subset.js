function solve(arr){
    let inputArr = [...arr];
    let reducedArr = [];
    let last = 0;
    inputArr.forEach(curr => {
        if (curr > last){
            last = curr;
            reducedArr.push(curr);
        }
    });

    console.log(reducedArr);
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);

solve([1, 2, 3, 4]);

solve([20, 3, 2, 15 ,6, 1])