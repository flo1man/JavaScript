function oddPositions(arr){
    let oddPosNums = [];

    for (let i = 1; i < arr.length; i+=2) {
        oddPosNums.push(arr[i] * 2);
    }
    oddPosNums.reverse();

    console.log(oddPosNums);
}

oddPositions([10, 15, 20, 25]);
oddPositions([3, 0, 10, 4, 7, 3]);