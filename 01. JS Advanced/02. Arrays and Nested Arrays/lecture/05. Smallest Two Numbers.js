function smallestNums(arr){
    let nums = [...arr];
    nums.sort((a, b) => a - b);

    console.log(`${nums[0]} ${nums[1]}`);
}

smallestNums([30, 15, 50, 5]);
smallestNums([3, 0, 10, 4, 7, 3]);