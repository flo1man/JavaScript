function sameDigits(num){
    let numToStr = String.toString(num);
    let character = numToStr.charAt(0);
    let isNotSame = true;
    let sum = 0;
    for (let i = 0;i < numToStr.length;i++){
        if (character != numToStr.charAt(i)){
            isNotSame = false;
        }
        sum += numToStr.charAt(i);
    }
    console.log(isNotSame);
    console.log(sum);
}

sameDigits(22222);