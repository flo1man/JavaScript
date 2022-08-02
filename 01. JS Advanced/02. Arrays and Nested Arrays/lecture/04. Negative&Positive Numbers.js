function orderNumbers(arr){
    let nums = [];

    arr.forEach(num => {
       if(Number(num) >= 0){
        nums.push(num);
       }
       else{
        nums.unshift(num);
       } 
    });

    console.log(nums.join('\n'));
}

orderNumbers([3, -2, 0, -1]);
orderNumbers([7, -2, 8, 9]);