function aggregations(arr){
    let sum = 0;
    let inverseSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        inverseSum += 1 / arr[i];
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(arr.join(''))
}

aggregations([1, 2, 3]);
aggregations([2, 4, 8, 16]);