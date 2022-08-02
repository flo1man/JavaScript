function evenPostions(arr){
    let evenPosArr = [];

    for (let i = 0; i < arr.length; i+=2) {
        evenPosArr.push(arr[i]);
    }

    console.log(evenPosArr.join(" "));
}

evenPostions(['20', '30', '40', '50', '60']);
evenPostions(['5', '10']);