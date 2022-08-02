function biggerHalf(arr){
    let nums = [...arr];
    let halfArr = [];
    nums.sort((a, b) => a - b);

    for (let i = Math.floor(nums.length / 2); i < nums.length; i++) {
        halfArr.push(nums[i]);
    }

    console.log(halfArr);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);